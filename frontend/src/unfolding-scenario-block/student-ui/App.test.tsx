import { describe, it } from 'vitest';
import { render } from '@opencraft/xblock-react-utils/testing';
import { App } from './App.tsx';
import type { Data } from '../apiTypes.ts';

describe('App.tsx', () => {
  it('renders with minimal default data', () => {
    const data: Data = {
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
    const screen = render(<App data={data} themeUrls={[]} cssContent="" />);
    screen.getByText(/introduction to this unfolding scenario/);
    screen.getByText(/Launch/);

    // TODO more tests when the components are more stable
  });
});
