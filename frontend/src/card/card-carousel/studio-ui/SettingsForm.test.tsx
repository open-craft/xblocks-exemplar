import { render, screen } from '@opencraft/xblock-react-utils/testing';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { Formik } from 'formik';
import { type InitData } from '@/card/card-carousel/types';
import SettingsForm from './SettingsForm';

const makeInitData = (overrides: Partial<InitData> = {}): InitData => ({
  cards: [],
  displayName: 'My Carousel',
  ...overrides,
});

const SettingsFormWithContext = ({ initData }: { initData: InitData }) => (
  <Formik initialValues={initData} onSubmit={() => {}}>
    <SettingsForm />
  </Formik>
);

describe('Card Carousel > SettingsForm', () => {
  it('shows the Display Name field with the current value', () => {
    render(<SettingsFormWithContext initData={makeInitData()} />);
    expect(screen.getByRole('textbox', { name: 'Display Name' })).toHaveValue(
      'My Carousel',
    );
  });

  it('does not show carousel-level card layout buttons', () => {
    render(<SettingsFormWithContext initData={makeInitData()} />);
    expect(
      screen.queryByRole('button', { name: /Vertical Cards/ }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: /Horizontal Cards/ }),
    ).not.toBeInTheDocument();
  });

  describe('Add card numbers checkbox', () => {
    it('is checked by default when disableNumbering is not set', () => {
      render(<SettingsFormWithContext initData={makeInitData()} />);
      expect(
        screen.getByRole('checkbox', { name: 'Add card numbers' }),
      ).toBeChecked();
    });

    it('is unchecked when disableNumbering is true', () => {
      render(
        <SettingsFormWithContext
          initData={makeInitData({ disableNumbering: true })}
        />,
      );
      expect(
        screen.getByRole('checkbox', { name: 'Add card numbers' }),
      ).not.toBeChecked();
    });

    it('can be toggled off and back on', async () => {
      const user = userEvent.setup();
      render(<SettingsFormWithContext initData={makeInitData()} />);
      const checkbox = screen.getByRole('checkbox', {
        name: 'Add card numbers',
      });
      await user.click(checkbox);
      expect(checkbox).not.toBeChecked();
      await user.click(checkbox);
      expect(checkbox).toBeChecked();
    });
  });

  describe('Background color', () => {
    it('shows the color from the init data', () => {
      const { container } = render(
        <SettingsFormWithContext
          initData={makeInitData({ backgroundColor: '#12FF23' })}
        />,
      );
      const colorPicker =
        container.getElementsByClassName('pgn__color-picker')[0];
      expect(colorPicker).toHaveStyle('background-color: rgb(18, 255, 35);');
    });
    // The color-picker is a complex element with a floating div acting as the picking area.
    // It would be out of the scope of this test - to test for interactivity.
  });
});
