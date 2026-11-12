import { describe, it, expect } from 'vitest';
import { render } from '@opencraft/xblock-react-utils/testing';
import userEvent from '@testing-library/user-event';
import { Formik } from 'formik';
import OutcomeSection from './OutcomeSection';
import type { Data } from '../../apiTypes';

const defaultData: Data = {
  displayName: 'Unfolding Scenario',
  scenarioData: {
    name: 'Unfolding Scenario',
    introduction: {
      heading: 'Intro',
      description: 'The introduction.',
      imageURL: '',
    },
    scenarios: [],
    outcome: {
      heading: 'Outcome',
      description: 'The outcome.',
      displaySelectedOptions: false,
    },
    interactionType: 'Explore',
  },
};

const renderSection = (data: Data = defaultData) =>
  render(
    <Formik initialValues={data} onSubmit={() => {}}>
      <OutcomeSection />
    </Formik>,
  );

describe('OutcomeSection', () => {
  it('defaults to the Summary template', () => {
    const screen = renderSection();

    expect(screen.getByRole('radio', { name: 'Summary' })).toBeChecked();
    expect(
      screen.getByRole('radio', { name: 'Record of Selected Options' }),
    ).not.toBeChecked();
    expect(
      screen.getByText('Provide a summary for the exercise'),
    ).toBeInTheDocument();
  });

  it('switches to the Record of Selected Options template', async () => {
    const user = userEvent.setup();
    const screen = renderSection();

    await user.click(
      screen.getByRole('radio', { name: 'Record of Selected Options' }),
    );

    expect(
      screen.getByRole('radio', { name: 'Record of Selected Options' }),
    ).toBeChecked();
    expect(screen.getByRole('radio', { name: 'Summary' })).not.toBeChecked();
    expect(
      screen.getByText(
        'The summary appears above a list of the answer options that the learner selected.',
      ),
    ).toBeInTheDocument();
  });

  it('binds the outcome heading input', async () => {
    const user = userEvent.setup();
    const screen = renderSection();

    const input = screen.getByLabelText('Heading');
    await user.clear(input);
    await user.type(input, 'Well done');

    expect(input).toHaveValue('Well done');
  });
});
