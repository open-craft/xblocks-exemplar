import { act } from 'react';
import { render, screen } from '@opencraft/xblock-react-utils/testing';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { Formik } from 'formik';
import { type InitData } from '@/card/card-grid/types';
import SettingsForm from './SettingsForm';

const makeInitData = (overrides: Partial<InitData> = {}): InitData => ({
  cards: [],
  displayName: 'My Card Grid',
  description: 'This is a test grid',
  orientation: 'HORIZONTAL',
  backgroundColor: '#ffffff',
  footerDescription: 'Footer text',
  ...overrides,
});

const SettingsFormWithContext = ({ initData }: { initData: InitData }) => (
  <Formik initialValues={initData} onSubmit={() => {}}>
    <SettingsForm />
  </Formik>
);

// Paragon's ColorPicker positions its popup via Popper, which updates React
// state asynchronously after mount; flush that update inside act() so tests
// don't warn about un-wrapped state updates.
const renderForm = async (initData: InitData) => {
  const result = render(<SettingsFormWithContext initData={initData} />);
  await act(async () => {});
  return result;
};

describe('Card Grid > SettingsForm', () => {
  describe('Card layout orientation buttons', () => {
    it('marks the vertical option as active when orientation is VERTICAL', async () => {
      await renderForm(makeInitData({ orientation: 'VERTICAL' }));
      expect(
        screen.getByRole('button', { name: /Vertical Cards/ }),
      ).toHaveClass('btn-outline-success');
      expect(
        screen.getByRole('button', { name: /Horizontal Cards/ }),
      ).toHaveClass('btn-outline-secondary');
    });

    it('marks the horizontal option as active when orientation is HORIZONTAL', async () => {
      await renderForm(makeInitData({ orientation: 'HORIZONTAL' }));
      expect(
        screen.getByRole('button', { name: /Horizontal Cards/ }),
      ).toHaveClass('btn-outline-success');
      expect(
        screen.getByRole('button', { name: /Vertical Cards/ }),
      ).toHaveClass('btn-outline-secondary');
    });

    it('switches orientation to VERTICAL when the Vertical Cards button is clicked', async () => {
      const user = userEvent.setup();
      await renderForm(makeInitData({ orientation: 'HORIZONTAL' }));
      await user.click(screen.getByRole('button', { name: /Vertical Cards/ }));
      expect(
        screen.getByRole('button', { name: /Vertical Cards/ }),
      ).toHaveClass('btn-outline-success');
      expect(
        screen.getByRole('button', { name: /Horizontal Cards/ }),
      ).toHaveClass('btn-outline-secondary');
    });

    it('switches orientation to HORIZONTAL when the Horizontal Cards button is clicked', async () => {
      const user = userEvent.setup();
      await renderForm(makeInitData({ orientation: 'VERTICAL' }));
      await user.click(
        screen.getByRole('button', { name: /Horizontal Cards/ }),
      );
      expect(
        screen.getByRole('button', { name: /Horizontal Cards/ }),
      ).toHaveClass('btn-outline-success');
      expect(
        screen.getByRole('button', { name: /Vertical Cards/ }),
      ).toHaveClass('btn-outline-secondary');
    });
  });

  describe('Background color', () => {
    it('shows the color from the init data', async () => {
      const { container } = await renderForm(
        makeInitData({ backgroundColor: '#12FF23' }),
      );
      const colorPicker =
        container.getElementsByClassName('pgn__color-picker')[0];
      expect(colorPicker).toHaveStyle('background-color: rgb(18, 255, 35);');
    });
    // NOTE: The color-picker is a complex element with a floating div acting as the
    // picking area. Testing its interactivity is out of scope for this test.
  });
});
