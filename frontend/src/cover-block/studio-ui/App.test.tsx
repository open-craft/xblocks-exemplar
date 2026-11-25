import { describe, expect, it } from 'vitest';
import userEvent from '@testing-library/user-event';
import type { ReactNode } from 'react';
import { RuntimeContext } from '@opencraft/xblock-react-utils';
import {
  fireEvent,
  mockRuntime,
  render,
  waitFor,
} from '@opencraft/xblock-react-utils/testing';
import { Variant } from '../apiTypes.ts';
import { initDataFactory } from '../lib/specHelpers.tsx';
import App from './App.tsx';
import { XBlockConfigContext } from '../../lib/context.ts';

const specRender = (component: ReactNode) => {
  const runtime = mockRuntime();
  const element = document.createElement('div');
  const screen = render(
    <XBlockConfigContext.Provider value={null}>
      <RuntimeContext.Provider value={{ runtime, element }}>
        {component}
      </RuntimeContext.Provider>
    </XBlockConfigContext.Provider>,
  );
  return { screen, runtime, element };
};

describe('App.tsx', () => {
  it('renders', () => {
    const { screen } = specRender(<App {...initDataFactory()} />);
    screen.getByLabelText('Variant');
  });
  it('dynamically shows the color selectors', async () => {
    const { screen } = specRender(
      <App {...initDataFactory({ variant: Variant.section })} />,
    );
    // Section does not have any color pickers.
    await waitFor(() => expect(screen.queryAllByText(/color/i).length).toBe(0));
    const selector = screen.getByLabelText('Variant');
    fireEvent.change(selector, { target: { value: Variant.course } });
    await waitFor(() =>
      expect(screen.queryAllByText(/color/i).length).toEqual(4),
    );
  });
  it('dynamically removes the color selectors', async () => {
    const { screen } = specRender(
      <App {...initDataFactory({ variant: Variant.course })} />,
    );
    await waitFor(() =>
      expect(screen.queryAllByText(/color/i).length).toEqual(4),
    );
    const selector = screen.getByLabelText('Variant');
    fireEvent.change(selector, { target: { value: Variant.section } });
    await waitFor(() => expect(screen.queryAllByText(/color/i).length).toBe(0));
  });
  it('submits changes to the server', async () => {
    const resultingData = initDataFactory({
      display_name: 'My new block',
      variant: Variant.course,
      main_header_color: '#abc123',
    });
    $.mockjax({
      url: '/handler/studio_save',
      method: 'POST',
      data: JSON.stringify(resultingData),
      contentType: 'application/json',
      responseText: {},
    });
    const user = userEvent.setup();
    const { screen, runtime } = specRender(
      <App {...initDataFactory({ variant: Variant.course })} />,
    );
    const displayName = screen.getByLabelText('Display Name');
    await user.clear(displayName);
    await user.type(displayName, 'My new block');
    const selector = screen.getByLabelText('Variant');
    fireEvent.change(selector, { target: { value: Variant.course } });
    const mainHeaderColor = screen.getByLabelText('Main header color');
    fireEvent.change(mainHeaderColor, { target: { value: '#abc123' } });
    await user.click(screen.getByText('Save'));
    await waitFor(() =>
      expect(runtime.notify).toHaveBeenCalledWith('save', { state: 'end' }),
    );
  });
  it('calls runtime.notify with cancel on click', async () => {
    const user = userEvent.setup();
    const { screen, runtime } = specRender(<App {...initDataFactory()} />);
    await user.click(screen.getByText('Cancel'));
    expect(runtime.notify).toHaveBeenCalledWith('cancel', {});
    expect(runtime.notify).toHaveBeenCalledOnce();
  });
  it('shows Image Position field for section variant only', async () => {
    const { screen: sectionScreen } = specRender(
      <App {...initDataFactory({ variant: Variant.section })} />,
    );
    await waitFor(() =>
      expect(sectionScreen.getByLabelText('Image Position')).toBeTruthy(),
    );
  });
  it('hides Image Position field for course variant', async () => {
    const { screen: courseScreen } = specRender(
      <App {...initDataFactory({ variant: Variant.course })} />,
    );
    await waitFor(() =>
      expect(courseScreen.queryByLabelText('Image Position')).toBeNull(),
    );
  });
});
