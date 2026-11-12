import { describe, it, expect, vi } from 'vitest';
import { render } from '@opencraft/xblock-react-utils/testing';
import { within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from './App.tsx';
import type { Data } from '../apiTypes.ts';

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
