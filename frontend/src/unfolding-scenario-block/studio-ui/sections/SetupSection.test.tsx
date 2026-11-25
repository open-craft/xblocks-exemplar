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
    expect(explore).toBeChecked();
    expect(selectOne).not.toBeChecked();
  });

  it('selects the other interaction type on click', async () => {
    const user = userEvent.setup();
    const screen = renderSection();

    const selectOne = screen.getByRole('radio', { name: /Select an Answer/ });
    await user.click(selectOne);

    expect(selectOne).toBeChecked();
    expect(screen.getByRole('radio', { name: /Explore/ })).not.toBeChecked();
  });

  it('exposes real radio inputs that are all keyboard reachable', () => {
    const screen = renderSection();
    const group = screen.getByRole('radiogroup', {
      name: 'How learners interact',
    });

    const radios = within(group).getAllByRole('radio');
    expect(radios).toHaveLength(2);
    for (const radio of radios) {
      // Native radios are focusable without roving tabindex bookkeeping, and
      // the browser handles arrow-key selection.
      expect(radio).toBeEnabled();
      expect(radio.tagName).toBe('INPUT');
      expect(radio).not.toHaveAttribute('tabindex', '-1');
    }
  });

  it('renders the three Primary colour swatches, none selected by default', () => {
    const screen = renderSection();
    const group = screen.getByRole('radiogroup', { name: 'Color variant' });

    const swatches = within(group).getAllByRole('radio');
    expect(swatches).toHaveLength(3);
    for (const swatch of swatches) {
      expect(swatch).not.toBeChecked();
      // Nothing selected yet: every swatch must still be tabbable.
      expect(swatch).not.toHaveAttribute('tabindex', '-1');
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

  it('renders each variant as two background/text tiles, as in the design', async () => {
    const user = userEvent.setup();
    const screen = renderSection();
    const navy = screen.getByRole('radio', { name: /Navy/ });
    // The card wrapper owns the input and the label content.
    const card = navy.closest('.us-swatch') as HTMLElement;

    const tiles = () => [
      ...card.querySelectorAll<HTMLElement>('.us-swatch-tile'),
    ];
    expect(tiles()).toHaveLength(2);
    expect(tiles()[0].style.background).toBe(
      'var(--pgn-wgu-color-background-main-navy, #002855)',
    );
    expect(tiles()[1].style.background).toBe(
      'var(--pgn-wgu-color-navy-900, #001124)',
    );
    for (const tile of tiles()) {
      expect(tile.style.color).toBe(
        'var(--pgn-wgu-color-text-pure-white, #ffffff)',
      );
    }

    // Selecting shows the check badge on that card only.
    expect(card.querySelector('.us-swatch-check')).toBeNull();
    await user.click(navy);
    expect(card.querySelector('.us-swatch-check')).not.toBeNull();
  });

  it('explains an unavailable saved variant without discarding it', () => {
    const screen = renderSection({
      ...defaultData,
      scenarioData: {
        ...defaultData.scenarioData,
        colorVariant: 'primary-retired',
      },
    });

    expect(screen.getByRole('status')).toHaveTextContent(
      /“primary-retired” isn't available in this theme/,
    );
    for (const swatch of within(
      screen.getByRole('radiogroup', { name: 'Color variant' }),
    ).getAllByRole('radio')) {
      expect(swatch).not.toBeChecked();
    }
  });

  it('selects a colour variant and shows the existing selection', async () => {
    const user = userEvent.setup();
    const screen = renderSection();

    const lake = screen.getByRole('radio', { name: /Lake/ });
    await user.click(lake);
    expect(lake).toBeChecked();

    const navy = screen.getByRole('radio', { name: /Navy/ });
    await user.click(navy);
    expect(navy).toBeChecked();
    expect(lake).not.toBeChecked();
  });
});
