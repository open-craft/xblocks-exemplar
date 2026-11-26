import { render, screen } from '@opencraft/xblock-react-utils/testing';
import { describe, it, expect } from 'vitest';
import { Formik } from 'formik';
import { type InitData } from '@/card/card-grid/types';
import ContentForm from './ContentForm';

const makeInitData = (overrides: Partial<InitData> = {}): InitData => ({
  cards: [
    {
      id: 1,
      name: 'Card #1',
      title: '',
      secondaryContent: null,
    },
  ],
  displayName: 'My Card Grid',
  description: 'Grid intro text',
  orientation: 'HORIZONTAL',
  backgroundColor: '#ffffff',
  footerDescription: 'Grid footer text',
  ...overrides,
});

const ContentFormWithContext = ({ initData }: { initData: InitData }) => (
  <Formik initialValues={initData} onSubmit={() => {}}>
    <ContentForm />
  </Formik>
);

describe('Card Grid > ContentForm', () => {
  it('renders the card list editor', () => {
    render(<ContentFormWithContext initData={makeInitData()} />);
    expect(
      screen.getByRole('button', { name: /Add Card/i }),
    ).toBeInTheDocument();
  });

  // The rich text editors are rendered by a mock that maps the `ariaLabel`
  // prop onto the textarea, so they can be queried by their accessible name.
  describe('Leading Content', () => {
    it('shows the description from the init data', () => {
      render(
        <ContentFormWithContext
          initData={makeInitData({ description: 'Grid intro text' })}
        />,
      );
      expect(
        screen.getByRole('textbox', {
          name: 'Rich text editor for the description content.',
        }),
      ).toHaveValue('Grid intro text');
    });
  });

  describe('Trailing Content', () => {
    it('shows the footer description from the init data', () => {
      render(
        <ContentFormWithContext
          initData={makeInitData({ footerDescription: 'Grid footer text' })}
        />,
      );
      expect(
        screen.getByRole('textbox', {
          name: 'Rich text editor for the footer description content.',
        }),
      ).toHaveValue('Grid footer text');
    });
  });
});
