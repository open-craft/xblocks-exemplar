import { describe, it, expect } from 'vitest';
import { render } from '@opencraft/xblock-react-utils/testing';
import userEvent from '@testing-library/user-event';
import { Formik } from 'formik';
import IntroductionSection from './IntroductionSection';
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
      <IntroductionSection />
    </Formik>,
  );

describe('IntroductionSection', () => {
  it('renders the heading input with the current value', () => {
    const screen = renderSection();

    expect(screen.getByLabelText('Heading')).toHaveValue('Intro');
  });

  it('updates the heading as the author types', async () => {
    const user = userEvent.setup();
    const screen = renderSection();

    const input = screen.getByLabelText('Heading');
    await user.clear(input);
    await user.type(input, 'A new introduction');

    expect(input).toHaveValue('A new introduction');
  });

  it('shows the paragraph helper text', () => {
    const screen = renderSection();

    expect(
      screen.getByText(/Introduce the exercise and give learners some context/),
    ).toBeInTheDocument();
  });

  it('binds the featured image URL input', async () => {
    const user = userEvent.setup();
    const screen = renderSection();

    const urlInput = screen.getByLabelText('Featured image').closest('input');
    expect(urlInput).not.toBeNull();

    await user.type(urlInput as HTMLInputElement, 'https://example.com/a.png');
    expect(urlInput).toHaveValue('https://example.com/a.png');
  });

  it('shows the image size hint and remove affordance when set', () => {
    const screen = renderSection({
      ...defaultData,
      scenarioData: {
        ...defaultData.scenarioData,
        introduction: {
          ...defaultData.scenarioData.introduction,
          imageURL: 'https://example.com/a.png',
        },
      },
    });

    expect(
      screen.getByText(/Add image \(recommended size: 1500 x 2200px\)/),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Remove image' }),
    ).toBeInTheDocument();
  });

  it('hides the remove affordance when no image is set', () => {
    const screen = renderSection();

    expect(
      screen.queryByRole('button', { name: 'Remove image' }),
    ).not.toBeInTheDocument();
  });
});
