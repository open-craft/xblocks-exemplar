import { render, screen } from '@opencraft/xblock-react-utils/testing';
import {
  RuntimeContext,
  type XBlockRuntime,
} from '@opencraft/xblock-react-utils';
import { Formik } from 'formik';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import StudioForm from './StudioForm';
import { XBlockConfigContext } from '@/lib/context';
import type { XBlockConfig } from '@/types';

const mockRuntime: XBlockRuntime = { handlerUrl: vi.fn(), notify: vi.fn() };

const renderForm = () =>
  render(
    <RuntimeContext.Provider
      value={{ runtime: mockRuntime, element: document.createElement('div') }}
    >
      <XBlockConfigContext.Provider
        value={{ enable_json_editing: true } as XBlockConfig}
      >
        <Formik initialValues={{ displayName: 'Block' }} onSubmit={vi.fn()}>
          <StudioForm
            id="test-block-tabs"
            contentTab={<p>Content pane</p>}
            settingsTab={<p>Settings pane</p>}
          />
        </Formik>
      </XBlockConfigContext.Provider>
    </RuntimeContext.Provider>,
  );

describe('StudioForm', () => {
  it('uses the given id as the prefix for the tab ids', () => {
    renderForm();

    expect(screen.getByRole('tab', { name: 'Content' }).id).toMatch(
      /^test-block-tabs-/,
    );
  });

  it('renders the given content and settings in their tabs', async () => {
    const user = userEvent.setup();
    renderForm();

    expect(screen.getByRole('tabpanel', { name: 'Content' })).toHaveTextContent(
      'Content pane',
    );

    await user.click(screen.getByRole('tab', { name: 'Settings' }));
    expect(
      screen.getByRole('tabpanel', { name: 'Settings' }),
    ).toHaveTextContent('Settings pane');
  });
});
