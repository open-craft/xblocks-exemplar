import { describe, it, expect, vi } from 'vitest';
import { render } from '@opencraft/xblock-react-utils/testing';
import { within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from './App.tsx';
import type { Data, Scenario } from '../apiTypes.ts';
import { newScenario } from './utils';
import { StudioSaveError, parseServerErrors } from './validation.ts';

const completeScenario = (overrides: Partial<Scenario> = {}): Scenario => ({
  ...newScenario(),
  heading: 'Scenario heading',
  description: '<p>Scenario context</p>',
  instructionTitle: 'What you need to do',
  instructionDescription: '<p>Choose one option</p>',
  prompt: 'Which option?',
  options: [{ value: 'An answer', feedback: 'Some feedback', type: 'Correct' }],
  ...overrides,
});

const defaultData: Data = {
  displayName: 'Unfolding Scenario',
  scenarioData: {
    name: 'Unfolding Scenario',
    introduction: {
      heading: 'Intro',
      description: 'The introduction to this unfolding scenario',
      imageURL: 'https://picsum.photos/id/82/300',
    },
    scenarios: [],
    outcome: {
      heading: 'The outcome',
      description: 'Just an example outcome.',
      displaySelectedOptions: false,
    },
    interactionType: 'Explore',
  },
};

const validData = (overrides: Partial<Data['scenarioData']> = {}): Data => ({
  ...defaultData,
  scenarioData: {
    ...defaultData.scenarioData,
    scenarios: [completeScenario()],
    ...overrides,
  },
});

const specRender = (
  initialData: Data = defaultData,
  onSaveImpl?: (data: Data) => void | Promise<void>,
) => {
  const mockOnSave = vi.fn(onSaveImpl);
  const mockOnCancel = vi.fn();

  return {
    mockOnSave,
    mockOnCancel,
    initialData,
    user: userEvent.setup(),
    screen: render(
      <App
        initialData={initialData}
        onSave={mockOnSave}
        onCancel={mockOnCancel}
      />,
    ),
  };
};

const sidebarButton = (screen: ReturnType<typeof render>, name: string) =>
  within(screen.getByRole('navigation', { name: 'Editor sections' })).getByRole(
    'button',
    { name },
  );

describe('Studio editor shell', () => {
  it('renders the header, sidebar, Setup panel and footer actions', () => {
    const { screen: rendered, mockOnCancel } = specRender();

    expect(
      rendered.getByRole('heading', { name: 'Unfolding Scenario' }),
    ).toBeInTheDocument();
    expect(
      rendered.getByRole('button', { name: 'Close editor' }),
    ).toBeInTheDocument();

    const sidebar = rendered.getByRole('navigation', {
      name: 'Editor sections',
    });
    expect(
      within(sidebar).getByRole('button', { name: 'Setup' }),
    ).toHaveAttribute('aria-current', 'true');
    expect(
      within(sidebar).getByRole('button', { name: 'Introduction' }),
    ).toBeInTheDocument();
    expect(
      within(sidebar).getByRole('button', { name: 'Add scenario (max 5)' }),
    ).toBeInTheDocument();
    expect(
      within(sidebar).getByRole('button', { name: 'Outcome' }),
    ).toBeInTheDocument();

    expect(
      rendered.getByRole('heading', { name: 'Setup' }),
    ).toBeInTheDocument();
    expect(
      rendered.getByRole('button', { name: 'Cancel' }),
    ).toBeInTheDocument();
    expect(rendered.getByRole('button', { name: 'Save' })).toBeInTheDocument();
    expect(mockOnCancel).not.toHaveBeenCalled();
  });

  it('switches the panel from the sidebar', async () => {
    const { screen: rendered, user } = specRender();

    await user.click(sidebarButton(rendered, 'Introduction'));
    expect(
      rendered.getByRole('heading', { name: 'Introduction' }),
    ).toBeInTheDocument();
    expect(sidebarButton(rendered, 'Introduction')).toHaveAttribute(
      'aria-current',
      'true',
    );
    expect(sidebarButton(rendered, 'Setup')).toHaveAttribute(
      'aria-current',
      'false',
    );

    await user.click(sidebarButton(rendered, 'Outcome'));
    expect(
      rendered.getByRole('heading', { name: 'Outcome' }),
    ).toBeInTheDocument();
  });

  it('adds scenarios up to the cap and hides the add button at 5', async () => {
    const { screen: rendered, user } = specRender();
    const addButton = () =>
      rendered.getByRole('button', { name: 'Add scenario (max 5)' });

    await user.click(addButton());
    await user.click(addButton());
    expect(
      rendered.getByRole('button', { name: 'Scenario 1' }),
    ).toBeInTheDocument();
    expect(
      rendered.getByRole('button', { name: 'Scenario 2' }),
    ).toBeInTheDocument();

    await user.click(rendered.getByRole('button', { name: 'Scenario 1' }));
    expect(
      rendered.getByRole('heading', { name: 'Scenario 1' }),
    ).toBeInTheDocument();

    await user.click(addButton());
    await user.click(addButton());
    await user.click(addButton());
    expect(
      rendered.getByRole('button', { name: 'Scenario 5' }),
    ).toBeInTheDocument();
    expect(
      rendered.queryByRole('button', { name: 'Add scenario (max 5)' }),
    ).not.toBeInTheDocument();
  });

  it('shows delete buttons only with more than one scenario, and renumbers', async () => {
    const { screen: rendered, user } = specRender();

    await user.click(
      rendered.getByRole('button', { name: 'Add scenario (max 5)' }),
    );
    expect(
      rendered.queryByRole('button', { name: 'Delete scenario 1' }),
    ).not.toBeInTheDocument();

    await user.click(
      rendered.getByRole('button', { name: 'Add scenario (max 5)' }),
    );
    expect(
      rendered.getByRole('button', { name: 'Delete scenario 1' }),
    ).toBeInTheDocument();
    expect(
      rendered.getByRole('button', { name: 'Delete scenario 2' }),
    ).toBeInTheDocument();

    await user.click(
      rendered.getByRole('button', { name: 'Delete scenario 1' }),
    );
    // The remaining scenario is renumbered as Scenario 1 and delete is hidden again.
    expect(
      rendered.getByRole('button', { name: 'Scenario 1' }),
    ).toBeInTheDocument();
    expect(
      rendered.queryByRole('button', { name: 'Scenario 2' }),
    ).not.toBeInTheDocument();
    expect(
      rendered.queryByRole('button', { name: 'Delete scenario 1' }),
    ).not.toBeInTheDocument();
  });

  it('keeps scenario edits separate across sidebar navigation', async () => {
    const {
      screen: rendered,
      user,
      mockOnSave,
    } = specRender(
      validData({
        scenarios: [
          completeScenario({
            options: [
              { value: 'First answer', feedback: '', type: 'Incorrect' },
            ],
          }),
          completeScenario({
            options: [
              { value: 'Second answer', feedback: '', type: 'Incorrect' },
            ],
          }),
        ],
      }),
    );
    const sidebar = rendered.getByRole('navigation', {
      name: 'Editor sections',
    });

    await user.click(sidebarButton(rendered, 'Scenario 1'));
    expect(rendered.getByLabelText('Option A')).toHaveValue('First answer');
    await user.click(sidebarButton(rendered, 'Scenario 2'));
    expect(rendered.getByLabelText('Option A')).toHaveValue('Second answer');
    await user.click(sidebarButton(rendered, 'Scenario 1'));
    expect(rendered.getByLabelText('Option A')).toHaveValue('First answer');

    // The content must remain outside the navigation, in Paragon's sibling panel.
    const panel = rendered
      .getByRole('heading', { name: 'Scenario 1' })
      .closest('.us-editor-panel');
    expect(sidebar).not.toContainElement(panel as HTMLElement);
    expect(panel?.parentElement).toBe(sidebar.parentElement);
    expect(panel?.parentElement).toHaveClass('pgn__modal-body-content');

    await user.click(rendered.getByRole('button', { name: 'Save' }));
    const scenarios = mockOnSave.mock.calls[0][0].scenarioData.scenarios;
    expect(scenarios[0].options[0].value).toBe('First answer');
    expect(scenarios[1].options[0].value).toBe('Second answer');
  });

  it('does not reseed existing options or clear feedback when changing interaction mode', async () => {
    const scenario = completeScenario({
      options: [
        { value: 'Saved answer', feedback: 'Saved feedback', type: 'Warning' },
      ],
    });
    const {
      screen: rendered,
      user,
      mockOnSave,
    } = specRender(validData({ scenarios: [scenario] }));
    for (const interaction of [/Select an Answer/, /Explore/]) {
      await user.click(rendered.getByRole('radio', { name: interaction }));
      await user.click(sidebarButton(rendered, 'Scenario 1'));
      expect(
        rendered.getAllByRole('textbox', { name: /^Option / }),
      ).toHaveLength(1);
      expect(
        rendered.getByRole('textbox', { name: 'Feedback message' }),
      ).toHaveValue('Saved feedback');
      expect(
        rendered.getByRole('combobox', { name: 'Select an icon' }),
      ).toHaveValue('Warning');
      await user.click(sidebarButton(rendered, 'Setup'));
    }
    await user.click(rendered.getByRole('button', { name: 'Save' }));
    expect(mockOnSave.mock.calls[0][0].scenarioData.scenarios).toEqual([
      scenario,
    ]);
  });

  it('calls onCancel from the footer and the header close button', async () => {
    const { screen: rendered, user, mockOnCancel } = specRender();

    await user.click(rendered.getByRole('button', { name: 'Cancel' }));
    expect(mockOnCancel).toHaveBeenCalledTimes(1);

    await user.click(rendered.getByRole('button', { name: 'Close editor' }));
    expect(mockOnCancel).toHaveBeenCalledTimes(2);
  });

  it('saves the edited title', async () => {
    const { screen: rendered, user, mockOnSave } = specRender(validData());

    await user.click(
      rendered.getByRole('button', { name: 'Edit display name' }),
    );
    const titleInput = rendered.getByRole('textbox', { name: 'Display name' });
    await user.clear(titleInput);
    await user.type(titleInput, 'Renamed Scenario{Enter}');
    expect(
      rendered.getByRole('heading', { name: 'Renamed Scenario' }),
    ).toBeInTheDocument();

    await user.click(rendered.getByRole('button', { name: 'Save' }));
    expect(mockOnSave).toHaveBeenCalledWith(
      expect.objectContaining({ displayName: 'Renamed Scenario' }),
    );
  });
});

describe('Studio editor validation', () => {
  it('blocks saving with an alert, sidebar badges and an inline error', async () => {
    const {
      screen: rendered,
      user,
      mockOnSave,
    } = specRender(
      validData({
        introduction: { heading: '', description: '', imageURL: '' },
      }),
    );

    await user.click(rendered.getByRole('button', { name: 'Save' }));

    expect(mockOnSave).not.toHaveBeenCalled();
    const message = 'Add a heading for the introduction';
    expect(
      rendered.getByText("We couldn't save your exercise"),
    ).toBeInTheDocument();
    const panel = rendered.getByRole('heading', {
      name: 'Introduction',
    }).parentElement as HTMLElement;
    expect(within(panel).getAllByText(message).length).toBeGreaterThan(0);
    expect(
      sidebarButton(rendered, 'Introduction')
        .closest('.us-editor-nav-item')
        ?.querySelector('.us-editor-error-badge'),
    ).not.toBeNull();
    // The editor switches to the first invalid section.
    expect(sidebarButton(rendered, 'Introduction')).toHaveAttribute(
      'aria-current',
      'true',
    );
  });

  it('clears the alert and inline error once the field is fixed', async () => {
    const { screen: rendered, user } = specRender(
      validData({
        introduction: { heading: '', description: '<p>Text</p>', imageURL: '' },
      }),
    );

    await user.click(rendered.getByRole('button', { name: 'Save' }));
    expect(
      rendered.getByText("We couldn't save your exercise"),
    ).toBeInTheDocument();

    await user.type(rendered.getByLabelText('Heading'), 'A new heading');

    expect(
      rendered.queryByText("We couldn't save your exercise"),
    ).not.toBeInTheDocument();
    expect(
      sidebarButton(rendered, 'Introduction')
        .closest('.us-editor-nav-item')
        ?.querySelector('.us-editor-error-badge'),
    ).toBeNull();
  });

  it('reports the client-only scenario count rule', async () => {
    const { screen: rendered, user, mockOnSave } = specRender();

    await user.click(rendered.getByRole('button', { name: 'Save' }));

    expect(mockOnSave).not.toHaveBeenCalled();
    expect(rendered.getByText('Add at least one scenario')).toBeInTheDocument();
  });

  it('treats whitespace-only rich text as empty', async () => {
    const {
      screen: rendered,
      user,
      mockOnSave,
    } = specRender(
      validData({
        outcome: {
          heading: 'Outcome',
          description: '<p>&nbsp;</p>',
          displaySelectedOptions: false,
        },
      }),
    );

    await user.click(rendered.getByRole('button', { name: 'Save' }));

    expect(mockOnSave).not.toHaveBeenCalled();
    expect(
      rendered.getAllByText('Add some text for the outcome').length,
    ).toBeGreaterThan(0);
    expect(sidebarButton(rendered, 'Outcome')).toHaveAttribute(
      'aria-current',
      'true',
    );
  });

  it('shows server field errors like client errors', async () => {
    const serverRejection = new StudioSaveError(
      parseServerErrors({
        'String should have at least 1 character': [
          'scenarioData.outcome.heading',
        ],
      }),
    );
    const {
      screen: rendered,
      user,
      mockOnSave,
    } = specRender(validData(), () => Promise.reject(serverRejection));

    await user.click(rendered.getByRole('button', { name: 'Save' }));

    expect(mockOnSave).toHaveBeenCalledTimes(1);
    expect(
      rendered.getAllByText('String should have at least 1 character').length,
    ).toBeGreaterThan(0);
    expect(sidebarButton(rendered, 'Outcome')).toHaveAttribute(
      'aria-current',
      'true',
    );
    expect(
      sidebarButton(rendered, 'Outcome')
        .closest('.us-editor-nav-item')
        ?.querySelector('.us-editor-error-badge'),
    ).not.toBeNull();
  });

  it('drops stale server errors once the author edits the value', async () => {
    const { screen: rendered, user } = specRender(validData(), () =>
      Promise.reject(
        new StudioSaveError(
          parseServerErrors({
            'String should have at least 1 character': [
              'scenarioData.outcome.heading',
            ],
          }),
        ),
      ),
    );

    await user.click(rendered.getByRole('button', { name: 'Save' }));
    expect(
      rendered.getAllByText('String should have at least 1 character').length,
    ).toBeGreaterThan(0);

    await user.type(rendered.getByLabelText('Heading'), '!');

    expect(
      rendered.queryByText('String should have at least 1 character'),
    ).not.toBeInTheDocument();
  });

  it('shows unattributable server messages without a section badge', async () => {
    const {
      screen: rendered,
      user,
      mockOnSave,
    } = specRender(validData(), () =>
      Promise.reject(
        new StudioSaveError(parseServerErrors('Something went wrong')),
      ),
    );

    await user.click(rendered.getByRole('button', { name: 'Save' }));

    expect(mockOnSave).toHaveBeenCalledTimes(1);
    expect(rendered.getByText('Something went wrong')).toBeInTheDocument();
    expect(
      rendered
        .queryAllByRole('navigation', { name: 'Editor sections' })[0]
        .querySelectorAll('.us-editor-error-badge').length,
    ).toBe(0);
    // A failed save must leave the editor usable again.
    expect(rendered.getByRole('button', { name: 'Save' })).toBeEnabled();
  });

  it("preserves the author's edits when validation blocks the save", async () => {
    const {
      screen: rendered,
      user,
      mockOnSave,
    } = specRender(
      validData({
        introduction: { heading: '', description: '', imageURL: '' },
        outcome: {
          heading: '',
          description: '<p>Summary</p>',
          displaySelectedOptions: false,
        },
      }),
    );

    await user.click(rendered.getByRole('button', { name: 'Save' }));
    const heading = rendered.getByLabelText('Heading');
    await user.type(heading, 'Kept value');

    expect(mockOnSave).not.toHaveBeenCalled();
    expect(heading).toHaveValue('Kept value');
    // Other sections keep their errors until they are fixed too.
    expect(
      rendered.getByText('Add a heading for the outcome'),
    ).toBeInTheDocument();
    expect(sidebarButton(rendered, 'Introduction')).toHaveAttribute(
      'aria-current',
      'true',
    );
  });

  it('disables Save while the request is in flight', async () => {
    let resolveSave: () => void = () => {};
    const { screen: rendered, user } = specRender(
      validData(),
      () =>
        new Promise<void>((resolve) => {
          resolveSave = resolve;
        }),
    );

    await user.click(rendered.getByRole('button', { name: 'Save' }));
    const saving = rendered.getByRole('button', { name: 'Saving…' });
    expect(saving).toBeDisabled();

    resolveSave();
    expect(await rendered.findByRole('button', { name: 'Save' })).toBeEnabled();
  });
});
