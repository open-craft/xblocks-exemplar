import { describe, it, expect, vi } from 'vitest';
import { render } from '@opencraft/xblock-react-utils/testing';
import { within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from './App.tsx';
import type { Data } from '../apiTypes.ts';
import { newScenario } from './utils';

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

const specRender = (initialData: Data = defaultData) => {
  const mockOnSave = vi.fn();
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

    await user.click(rendered.getByRole('button', { name: 'Introduction' }));
    expect(
      rendered.getByRole('heading', { name: 'Introduction' }),
    ).toBeInTheDocument();
    expect(
      rendered.getByRole('button', { name: 'Introduction' }),
    ).toHaveAttribute('aria-current', 'true');
    expect(rendered.getByRole('button', { name: 'Setup' })).toHaveAttribute(
      'aria-current',
      'false',
    );

    await user.click(rendered.getByRole('button', { name: 'Outcome' }));
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

  it('keeps scenario edits separate across sidebar navigation and saves the edited options', async () => {
    const { screen: rendered, user, mockOnSave } = specRender();
    const sidebar = rendered.getByRole('navigation', {
      name: 'Editor sections',
    });
    const add = within(sidebar).getByRole('button', {
      name: 'Add scenario (max 5)',
    });
    await user.click(add);
    await user.click(add);
    await user.click(
      within(sidebar).getByRole('button', { name: 'Scenario 1' }),
    );
    await user.type(
      rendered.getByLabelText('Option A'),
      'First scenario answer',
    );
    await user.click(
      within(sidebar).getByRole('button', { name: 'Scenario 2' }),
    );
    expect(rendered.getByLabelText('Option A')).toHaveValue('');
    await user.type(
      rendered.getByLabelText('Option A'),
      'Second scenario answer',
    );
    await user.click(
      within(sidebar).getByRole('button', { name: 'Scenario 1' }),
    );
    expect(rendered.getByLabelText('Option A')).toHaveValue(
      'First scenario answer',
    );

    // The content must remain outside the navigation, in Paragon's sibling panel.
    const panel = rendered
      .getByRole('heading', { name: 'Scenario 1' })
      .closest('.us-editor-panel');
    expect(sidebar).not.toContainElement(panel as HTMLElement);
    expect(panel?.parentElement).toBe(sidebar.parentElement);
    expect(panel?.parentElement).toHaveClass('pgn__modal-body-content');

    await user.click(rendered.getByRole('button', { name: 'Save' }));
    const scenarios = mockOnSave.mock.calls[0][0].scenarioData.scenarios;
    expect(scenarios[0].options[0].value).toBe('First scenario answer');
    expect(scenarios[1].options[0].value).toBe('Second scenario answer');
  });

  it('does not reseed existing options or clear feedback when changing interaction mode', async () => {
    const scenario = newScenario();
    scenario.options = [
      { value: 'Saved answer', feedback: 'Saved feedback', type: 'Warning' },
    ];
    const {
      screen: rendered,
      user,
      mockOnSave,
    } = specRender({
      ...defaultData,
      scenarioData: { ...defaultData.scenarioData, scenarios: [scenario] },
    });
    for (const interaction of [/Select an Answer/, /Explore/]) {
      await user.click(rendered.getByRole('radio', { name: interaction }));
      await user.click(rendered.getByRole('button', { name: 'Scenario 1' }));
      expect(
        rendered.getAllByRole('textbox', { name: /^Option / }),
      ).toHaveLength(1);
      expect(
        rendered.getByRole('textbox', { name: 'Feedback message' }),
      ).toHaveValue('Saved feedback');
      expect(
        rendered.getByRole('combobox', { name: 'Select an icon' }),
      ).toHaveValue('Warning');
      await user.click(rendered.getByRole('button', { name: 'Setup' }));
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
    const { screen: rendered, user, mockOnSave } = specRender();

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
      expect.anything(), // Formik passes formik helpers as the second argument.
    );
  });
});
