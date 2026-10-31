import { render, screen } from '@opencraft/xblock-react-utils/testing';
import {
  RuntimeContext,
  type XBlockRuntime,
} from '@opencraft/xblock-react-utils';
import type { ReactElement } from 'react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import ModalFooter from './ModalFooter';

const mockRuntime: XBlockRuntime = { handlerUrl: vi.fn(), notify: vi.fn() };

const renderWithRuntime = (ui: ReactElement) =>
  render(
    <RuntimeContext.Provider
      value={{ runtime: mockRuntime, element: document.createElement('div') }}
    >
      {ui}
    </RuntimeContext.Provider>,
  );

describe('ModalFooter', () => {
  it('shows a Continue button when not showing editor', () => {
    renderWithRuntime(
      <ModalFooter showingEditor={false} onContinue={vi.fn()} />,
    );
    expect(
      screen.getByRole('button', { name: 'Continue' }),
    ).toBeInTheDocument();
  });

  it('shows a Save button when showing editor', () => {
    renderWithRuntime(
      <ModalFooter showingEditor={true} onContinue={vi.fn()} />,
    );
    expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument();
  });

  it('Cancel button calls runtime.notify("cancel", {})', async () => {
    const user = userEvent.setup();
    renderWithRuntime(
      <ModalFooter showingEditor={false} onContinue={vi.fn()} />,
    );
    await user.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(mockRuntime.notify).toHaveBeenCalledWith('cancel', {});
  });
});
