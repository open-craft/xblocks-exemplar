import { describe, it, expect } from 'vitest';
import { render } from '@opencraft/xblock-react-utils/testing';
import { App } from './App.tsx';
import type { Data } from '../apiTypes.ts';
import { COLOUR_VARIANTS } from '../variants.ts';

const makeData = (colorVariant?: string): Data => ({
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
    colorVariant,
  },
});

describe('App.tsx', () => {
  it('renders with minimal default data', () => {
    const screen = render(
      <App data={makeData()} themeUrls={[]} cssContent="" />,
    );
    screen.getByText(/introduction to this unfolding scenario/);
    screen.getByText(/Launch/);

    // TODO more tests when the components are more stable
  });

  it('applies the selected colour variant to the block wrapper', () => {
    const screen = render(
      <App data={makeData('primary-lake')} themeUrls={[]} cssContent="" />,
    );
    const wrapper = document.querySelector<HTMLDivElement>(
      '.xblock-unfolding-scenario-wrapper',
    );
    const tokens = COLOUR_VARIANTS.find(
      (variant) => variant.id === 'primary-lake',
    )!.tokens;
    expect(wrapper?.style.getPropertyValue('--color-bg-main')).toBe(
      tokens['--color-bg-main'],
    );
    expect(wrapper?.style.getPropertyValue('--color-txt-content')).toBe(
      tokens['--color-txt-content'],
    );
    expect(wrapper?.textContent).toContain('Intro');
    screen.unmount();
  });

  it.each([undefined, 'primary-not-shipped'])(
    'leaves the default appearance for colorVariant=%s',
    (colorVariant) => {
      render(
        <App data={makeData(colorVariant)} themeUrls={[]} cssContent="" />,
      );
      const wrapper = document.querySelector<HTMLDivElement>(
        '.xblock-unfolding-scenario-wrapper',
      );
      expect(wrapper?.getAttribute('style')).toBeNull();
    },
  );
});
