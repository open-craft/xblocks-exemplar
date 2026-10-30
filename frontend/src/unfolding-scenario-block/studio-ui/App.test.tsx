import { describe, it, vi } from 'vitest';
import { render } from '@opencraft/xblock-react-utils/testing';
import userEvent from '@testing-library/user-event';
import { App } from './App.tsx';
import type { Data } from '../apiTypes.ts';

const defaultData: Data = {
  displayName: '',
  scenarioData: {
    name: '',
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

describe('App.tsx', () => {
  it('renders', () => {
    const { screen } = specRender();

    // TODO: implement proper tests for the editor
    screen.getByLabelText(/Display Name/);
  });
});
