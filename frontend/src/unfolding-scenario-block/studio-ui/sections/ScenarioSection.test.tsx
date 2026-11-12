import { describe, it, expect, vi } from 'vitest';
import { render } from '@opencraft/xblock-react-utils/testing';
import { within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form, Formik } from 'formik';
import ScenarioSection from './ScenarioSection';
import type { Data, InteractionType, Scenario } from '../../apiTypes';
import { newScenario } from '../utils';

function renderSection(
  scenario: Scenario = newScenario(),
  interactionType: InteractionType = 'Explore',
) {
  const initialData: Data = {
    displayName: 'Exercise',
    scenarioData: {
      name: 'Exercise',
      introduction: {
        heading: 'Introduction',
        description: 'Welcome',
        imageURL: '',
      },
      scenarios: [newScenario(), scenario],
      outcome: {
        heading: 'Outcome',
        description: 'Done',
        displaySelectedOptions: false,
      },
      interactionType,
    },
  };
  const onSave = vi.fn();
  const screen = render(
    <Formik initialValues={initialData} onSubmit={onSave}>
      <Form>
        <ScenarioSection index={1} />
        <button type="submit">Save</button>
      </Form>
    </Formik>,
  );
  return { screen, user: userEvent.setup(), onSave, initialData };
}

describe('ScenarioSection', () => {
  it('seeds three options with only the first feedback panel expanded', () => {
    const { screen } = renderSection();
    expect(
      screen.getByRole('heading', { name: 'Scenario 2' }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole('textbox', { name: /^Option [A-C]$/ }),
    ).toHaveLength(3);
    expect(
      screen.getByRole('button', { name: 'Hide feedback for option A' }),
    ).toHaveAttribute('aria-expanded', 'true');
    expect(
      screen.getByRole('button', { name: 'Show feedback for option B' }),
    ).toHaveAttribute('aria-expanded', 'false');
    expect(
      screen.getAllByRole('textbox', { name: 'Feedback message' }),
    ).toHaveLength(1);
  });

  it('saves every scenario field to the selected scenario without changing its neighbour', async () => {
    const { screen, user, onSave, initialData } = renderSection();
    await user.type(
      within(
        screen.getByRole('region', { name: 'Introduction' }),
      ).getByLabelText('Heading'),
      'The situation',
    );
    await user.type(
      screen.getByLabelText('Scenario introduction paragraph'),
      '<p>Context</p>',
    );
    const instructionHeading = within(
      screen.getByRole('region', { name: 'Instructions' }),
    ).getByLabelText('Heading');
    await user.clear(instructionHeading);
    await user.type(instructionHeading, 'Your task');
    await user.type(
      screen.getByLabelText('Scenario instructions paragraph'),
      '<p>Choose carefully</p>',
    );
    await user.type(screen.getByLabelText('Prompt Text'), 'What next?');
    await user.type(screen.getByLabelText('Option A'), 'Ask for help');
    await user.type(
      screen.getByRole('textbox', { name: 'Feedback message' }),
      'A helpful choice',
    );
    await user.selectOptions(
      screen.getByRole('combobox', { name: 'Select an icon' }),
      'Correct',
    );
    await user.click(screen.getByRole('button', { name: 'Save' }));
    const saved = onSave.mock.calls[0][0] as Data;
    expect(saved.scenarioData.scenarios[0]).toEqual(
      initialData.scenarioData.scenarios[0],
    );
    expect(saved.scenarioData.scenarios[1]).toEqual({
      heading: 'The situation',
      description: '<p>Context</p>',
      instructionTitle: 'Your task',
      instructionDescription: '<p>Choose carefully</p>',
      prompt: 'What next?',
      options: [
        {
          value: 'Ask for help',
          feedback: 'A helpful choice',
          type: 'Correct',
        },
        ...initialData.scenarioData.scenarios[1].options.slice(1),
      ],
    });
  });

  it.each(['Correct', 'Incorrect', 'Warning'])(
    'persists the %s feedback icon',
    async (type) => {
      const { screen, user, onSave } = renderSection();
      await user.selectOptions(
        screen.getByRole('combobox', { name: 'Select an icon' }),
        type,
      );
      await user.click(screen.getByRole('button', { name: 'Save' }));
      expect(
        onSave.mock.calls[0][0].scenarioData.scenarios[1].options[0].type,
      ).toBe(type);
    },
  );

  it('collapses feedback without deleting its message or type', async () => {
    const scenario = newScenario();
    scenario.options[0] = {
      value: 'Existing answer',
      feedback: 'Keep this feedback',
      type: 'Warning',
    };
    const { screen, user, onSave } = renderSection(scenario);
    await user.click(
      screen.getByRole('button', { name: 'Hide feedback for option A' }),
    );
    expect(
      screen.queryByRole('textbox', { name: 'Feedback message' }),
    ).not.toBeInTheDocument();
    await user.click(
      screen.getByRole('button', { name: 'Show feedback for option A' }),
    );
    expect(
      screen.getByRole('textbox', { name: 'Feedback message' }),
    ).toHaveValue('Keep this feedback');
    await user.click(screen.getByRole('button', { name: 'Save' }));
    expect(onSave.mock.calls[0][0].scenarioData.scenarios[1]).toEqual(scenario);
  });

  it('adds an empty option, expands its feedback and focuses its input', async () => {
    const { screen, user } = renderSection();
    await user.click(screen.getByRole('button', { name: 'Add option' }));
    expect(screen.getByLabelText('Option D')).toHaveValue('');
    expect(screen.getByLabelText('Option D')).toHaveFocus();
    expect(
      screen.getByRole('button', { name: 'Hide feedback for option D' }),
    ).toHaveAttribute('aria-expanded', 'true');
  });

  it('removes and renumbers options while preserving remaining feedback and expansion', async () => {
    const scenario = newScenario();
    scenario.options = [
      { value: 'First', feedback: 'One', type: 'Incorrect' },
      { value: 'Second', feedback: 'Two', type: 'Correct' },
      { value: 'Third', feedback: 'Three', type: 'Warning' },
    ];
    const { screen, user, onSave } = renderSection(scenario);
    await user.click(
      screen.getByRole('button', { name: 'Show feedback for option C' }),
    );
    await user.click(screen.getByRole('button', { name: 'Delete option B' }));
    expect(screen.getByLabelText('Option B')).toHaveValue('Third');
    expect(screen.queryByLabelText('Option C')).not.toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Hide feedback for option B' }),
    ).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('button', { name: 'Add option' })).toHaveFocus();
    await user.click(screen.getByRole('button', { name: 'Save' }));
    expect(onSave.mock.calls[0][0].scenarioData.scenarios[1].options).toEqual([
      scenario.options[0],
      scenario.options[2],
    ]);
  });

  it.each([0, 2])(
    'deletes option index %s without changing the other saved options',
    async (index) => {
      const scenario = newScenario();
      scenario.options = [
        { value: 'First', feedback: 'One', type: 'Incorrect' },
        { value: 'Second', feedback: 'Two', type: 'Correct' },
        { value: 'Third', feedback: 'Three', type: 'Warning' },
      ];
      const { screen, user, onSave } = renderSection(scenario);
      await user.click(
        screen.getByRole('button', {
          name: `Delete option ${index === 0 ? 'A' : 'C'}`,
        }),
      );
      await user.click(screen.getByRole('button', { name: 'Save' }));
      expect(onSave.mock.calls[0][0].scenarioData.scenarios[1].options).toEqual(
        scenario.options.filter((_, optionIndex) => optionIndex !== index),
      );
    },
  );

  it('does not allow removal of the last option', async () => {
    const { screen, user } = renderSection();
    await user.click(screen.getByRole('button', { name: 'Delete option A' }));
    await user.click(screen.getByRole('button', { name: 'Delete option A' }));
    expect(
      screen.getByRole('button', { name: 'Delete option A' }),
    ).toBeDisabled();
    expect(screen.getAllByRole('textbox', { name: /^Option / })).toHaveLength(
      1,
    );
  });

  it('allows an existing empty option list to be repaired', async () => {
    const { screen, user } = renderSection({ ...newScenario(), options: [] });
    await user.click(screen.getByRole('button', { name: 'Add option' }));
    expect(screen.getByLabelText('Option A')).toHaveFocus();
    expect(
      screen.getByRole('button', { name: 'Hide feedback for option A' }),
    ).toHaveAttribute('aria-expanded', 'true');
  });

  it.each<InteractionType>(['Explore', 'SelectOne'])(
    'preserves feedback in %s mode',
    async (mode) => {
      const scenario = newScenario();
      scenario.options[0] = {
        value: 'Answer',
        feedback: 'Existing feedback',
        type: 'Warning',
      };
      const { screen, user, onSave } = renderSection(scenario, mode);
      expect(
        screen.getByRole('textbox', { name: 'Feedback message' }),
      ).toHaveValue('Existing feedback');
      await user.click(screen.getByRole('button', { name: 'Save' }));
      expect(onSave.mock.calls[0][0].scenarioData.scenarios[1]).toEqual(
        scenario,
      );
    },
  );
});
