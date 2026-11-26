import { render, screen } from '@opencraft/xblock-react-utils/testing';
import {
  RuntimeContext,
  saveStudioBlock,
  type XBlockRuntime,
} from '@opencraft/xblock-react-utils';
import type { ReactElement } from 'react';
import userEvent from '@testing-library/user-event';
import { within } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import StudioUI from './StudioUI';
import type { InitData } from '@/card/card-grid/types';
import { XBlockConfigContext } from '@/lib/context';
import type { XBlockConfig } from '@/types';

vi.mock('@opencraft/xblock-react-utils', async (importOriginal) => {
  const actual =
    await importOriginal<typeof import('@opencraft/xblock-react-utils')>();
  return { ...actual, saveStudioBlock: vi.fn() };
});

const mockRuntime: XBlockRuntime = {
  handlerUrl: vi.fn(
    (_element: Element | null, handler: string) => `/${handler}`,
  ),
  notify: vi.fn(),
};

const defaultInitData: InitData = {
  cards: [
    {
      id: 1,
      name: 'Card #1',
      title: '',
      secondaryContent: null,
    },
  ],
  displayName: 'Card Grid Editor',
  description: '<p>Test description</p>', // p tags because TinyMCE always returns HTML
  orientation: 'HORIZONTAL',
  backgroundColor: '#ffffff',
  footerDescription: '',
};

const defaultConfig = {
  enable_json_editing: true,
} as XBlockConfig;

const renderWithConfig = (
  ui: ReactElement,
  config: XBlockConfig | null = defaultConfig,
) =>
  render(
    <RuntimeContext.Provider
      value={{ runtime: mockRuntime, element: document.createElement('div') }}
    >
      <XBlockConfigContext.Provider value={config}>
        {ui}
      </XBlockConfigContext.Provider>
    </RuntimeContext.Provider>,
  );

beforeEach(() => {
  vi.clearAllMocks();
});

describe('Studio UI', () => {
  it('shows the Content tab with the card editor by default', () => {
    renderWithConfig(<StudioUI initData={defaultInitData} />);

    expect(
      screen.getByRole('heading', { name: 'Editing: Card Grid Editor' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Content' })).toHaveAttribute(
      'aria-selected',
      'true',
    );
    expect(screen.getByRole('tab', { name: 'Settings' })).toHaveAttribute(
      'aria-selected',
      'false',
    );
    expect(screen.getByRole('tab', { name: 'JSON' })).toHaveAttribute(
      'aria-selected',
      'false',
    );
    expect(
      screen.getByRole('button', { name: /Add Card/i }),
    ).toBeInTheDocument();
  });

  it('renders a filled, correctly labelled panel for every tab', () => {
    renderWithConfig(<StudioUI initData={defaultInitData} />);

    const panels = Array.from(
      document.querySelectorAll<HTMLElement>('[role="tabpanel"]'),
    );
    expect(panels).toHaveLength(3);
    panels.forEach((panel) => {
      expect(panel).not.toBeEmptyDOMElement();

      const labelledBy = panel.getAttribute('aria-labelledby');
      expect(labelledBy).toBeTruthy();

      const tab = document.getElementById(labelledBy as string);
      expect(tab).not.toBeNull();
      expect(tab).toHaveAttribute('aria-controls', panel.id);
    });

    const visiblePanel = screen.getByRole('tabpanel', { name: 'Content' });
    expect(
      within(visiblePanel).getByRole('button', { name: /Add Card/i }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole('tabpanel')).toHaveLength(1);
  });

  it('supports arrow-key navigation between tabs', async () => {
    const user = userEvent.setup();
    renderWithConfig(<StudioUI initData={defaultInitData} />);

    const contentTab = screen.getByRole('tab', { name: 'Content' });
    contentTab.focus();
    await user.keyboard('{ArrowRight}');

    const settingsTab = screen.getByRole('tab', { name: 'Settings' });
    expect(settingsTab).toHaveAttribute('aria-selected', 'true');
    expect(settingsTab).toHaveFocus();
  });

  it('shows the card grid settings in the Settings tab', async () => {
    const user = userEvent.setup();
    renderWithConfig(<StudioUI initData={defaultInitData} />);

    await user.click(screen.getByRole('tab', { name: 'Settings' }));

    expect(
      screen.getByRole('button', { name: /Vertical Cards/ }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Horizontal Cards/ }),
    ).toBeInTheDocument();
    expect(screen.getByText('Background Color')).toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: /Add Card/i }),
    ).not.toBeInTheDocument();
  });

  it('updates the component name from the header title editor', async () => {
    const user = userEvent.setup();
    renderWithConfig(<StudioUI initData={defaultInitData} />);

    await user.click(screen.getByRole('button', { name: 'Edit display name' }));
    const titleInput = screen.getByRole('textbox', { name: 'Display name' });
    await user.clear(titleInput);
    await user.type(titleInput, 'Renamed Grid{Enter}');

    expect(
      screen.getByRole('heading', { name: 'Editing: Renamed Grid' }),
    ).toBeInTheDocument();
  });

  it('saves the block when the Save button is clicked', async () => {
    const user = userEvent.setup();
    renderWithConfig(<StudioUI initData={defaultInitData} />);

    await user.click(screen.getByRole('button', { name: 'Save' }));
    expect(saveStudioBlock).toHaveBeenCalledWith(
      expect.objectContaining({
        saveUrl: '/studio_save',
        data: defaultInitData,
        runtime: mockRuntime,
      }),
    );
  });

  it('hides the JSON tab when JSON editing is disabled', () => {
    renderWithConfig(<StudioUI initData={defaultInitData} />, {
      enable_json_editing: false,
    } as XBlockConfig);

    expect(screen.getByRole('tab', { name: 'Content' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Settings' })).toBeInTheDocument();
    expect(screen.queryByRole('tab', { name: 'JSON' })).not.toBeInTheDocument();
    expect(document.querySelectorAll('[role="tabpanel"]')).toHaveLength(2);
  });

  it('hides the JSON tab when no config is provided', () => {
    renderWithConfig(<StudioUI initData={defaultInitData} />, null);

    expect(screen.queryByRole('tab', { name: 'JSON' })).not.toBeInTheDocument();
  });
});
