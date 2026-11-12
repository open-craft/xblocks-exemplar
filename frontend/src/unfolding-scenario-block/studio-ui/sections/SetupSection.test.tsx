import { describe, it, expect } from 'vitest';
import { render } from '@opencraft/xblock-react-utils/testing';
import { within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Formik } from 'formik';
import SetupSection from './SetupSection';
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
      <SetupSection />
    </Formik>,
  );

describe('SetupSection', () => {
  it('renders the interaction radiogroup with Explore selected by default', () => {
    const screen = renderSection();
    const group = screen.getByRole('radiogroup', {
      name: 'How learners interact',
    });

    const explore = within(group).getByRole('radio', { name: /Explore/ });
    const selectOne = within(group).getByRole('radio', {
      name: /Select an Answer/,
    });
    expect(explore).toHaveAttribute('aria-checked', 'true');
    expect(selectOne).toHaveAttribute('aria-checked', 'false');
  });

  it('selects the other interaction type on click', async () => {
    const user = userEvent.setup();
    const screen = renderSection();

    const selectOne = screen.getByRole('radio', { name: /Select an Answer/ });
    await user.click(selectOne);

    expect(selectOne).toHaveAttribute('aria-checked', 'true');
    expect(screen.getByRole('radio', { name: /Explore/ })).toHaveAttribute(
      'aria-checked',
      'false',
    );
  });

  it('moves selection with arrow keys within the interaction group', async () => {
    const user = userEvent.setup();
    const screen = renderSection();

    const explore = screen.getByRole('radio', { name: /Explore/ });
    explore.focus();
    await user.keyboard('{ArrowRight}');

    const selectOne = screen.getByRole('radio', { name: /Select an Answer/ });
    expect(selectOne).toHaveAttribute('aria-checked', 'true');
    expect(selectOne).toHaveFocus();
  });

  it('renders the three Primary colour swatches, none selected by default', () => {
    const screen = renderSection();
    const group = screen.getByRole('radiogroup', { name: 'Color variant' });

    const swatches = within(group).getAllByRole('radio');
    expect(swatches).toHaveLength(3);
    for (const swatch of swatches) {
      expect(swatch).toHaveAttribute('aria-checked', 'false');
    }
    expect(
      within(group).getByRole('radio', { name: /Navy/ }),
    ).toBeInTheDocument();
    expect(
      within(group).getByRole('radio', { name: /Blue/ }),
    ).toBeInTheDocument();
    expect(
      within(group).getByRole('radio', { name: /Lake/ }),
    ).toBeInTheDocument();
  });

  it('selects a colour variant and shows the existing selection', async () => {
    const user = userEvent.setup();
    const screen = renderSection();

    const lake = screen.getByRole('radio', { name: /Lake/ });
    await user.click(lake);
    expect(lake).toHaveAttribute('aria-checked', 'true');

    const navy = screen.getByRole('radio', { name: /Navy/ });
    await user.click(navy);
    expect(navy).toHaveAttribute('aria-checked', 'true');
    expect(lake).toHaveAttribute('aria-checked', 'false');
  });
});
