import { render, screen } from '@opencraft/xblock-react-utils/testing';
import {
  saveStudioBlock,
  type XBlockRuntime,
} from '@opencraft/xblock-react-utils';
import type { ReactElement } from 'react';
import userEvent from '@testing-library/user-event';
import { within } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import StudioUI from './StudioUI';
import type { InitData } from '@/card/card-carousel/types';
import { XBlockConfigContext } from '@/lib/context';
import type { XBlockConfig } from '@/types';

vi.mock('@opencraft/xblock-react-utils', async (importOriginal) => {
  const actual =
    await importOriginal<typeof import('@opencraft/xblock-react-utils')>();
  return { ...actual, saveStudioBlock: vi.fn() };
});

const mockRuntime: XBlockRuntime = { handlerUrl: vi.fn(), notify: vi.fn() };

const defaultInitData: InitData = {
  cards: [],
  displayName: 'Carousel Editor',
};

const defaultConfig = {
  enable_json_editing: true,
} as XBlockConfig;

const renderWithConfig = (
  ui: ReactElement,
  config: XBlockConfig | null = defaultConfig,
) =>
  render(
    <XBlockConfigContext.Provider value={config}>
      {ui}
    </XBlockConfigContext.Provider>,
  );

beforeEach(() => {
  vi.clearAllMocks();
});

describe('Studio UI', () => {
  it('shows the Content tab with the carousel editor by default', () => {
    renderWithConfig(
      <StudioUI runtime={mockRuntime} initData={defaultInitData} saveUrl="" />,
    );

    expect(
      screen.getByRole('heading', { name: 'Editing: Carousel Editor' }),
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
    renderWithConfig(
      <StudioUI runtime={mockRuntime} initData={defaultInitData} saveUrl="" />,
    );

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
    renderWithConfig(
      <StudioUI runtime={mockRuntime} initData={defaultInitData} saveUrl="" />,
    );

    const contentTab = screen.getByRole('tab', { name: 'Content' });
    contentTab.focus();
    await user.keyboard('{ArrowRight}');

    const settingsTab = screen.getByRole('tab', { name: 'Settings' });
    expect(settingsTab).toHaveAttribute('aria-selected', 'true');
    expect(settingsTab).toHaveFocus();
  });

  it('shows the carousel settings in the Settings tab', async () => {
    const user = userEvent.setup();
    renderWithConfig(
      <StudioUI runtime={mockRuntime} initData={defaultInitData} saveUrl="" />,
    );

    await user.click(screen.getByRole('tab', { name: 'Settings' }));

    expect(screen.getByRole('textbox', { name: 'Display Name' })).toHaveValue(
      'Carousel Editor',
    );
    expect(
      screen.getByRole('checkbox', { name: 'Add card numbers' }),
    ).toBeInTheDocument();
    expect(screen.getByText('Background Color')).toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: /Add Card/i }),
    ).not.toBeInTheDocument();
  });

  it('keeps display name changes in sync with the Settings tab', async () => {
    const user = userEvent.setup();
    renderWithConfig(
      <StudioUI runtime={mockRuntime} initData={defaultInitData} saveUrl="" />,
    );

    await user.click(screen.getByRole('button', { name: 'Edit display name' }));
    const titleInput = screen.getByRole('textbox', { name: 'Display name' });
    await user.clear(titleInput);
    await user.type(titleInput, 'Renamed Carousel{Enter}');

    await user.click(screen.getByRole('tab', { name: 'Settings' }));
    expect(screen.getByRole('textbox', { name: 'Display Name' })).toHaveValue(
      'Renamed Carousel',
    );
  });

  it('adds new cards using the fixed horizontal default orientation', async () => {
    const user = userEvent.setup();
    renderWithConfig(
      <StudioUI
        runtime={mockRuntime}
        saveUrl=""
        initData={{
          displayName: 'Legacy',
          cards: [
            {
              id: 1,
              name: 'Old card',
              title: '',
              orientation: 'VERTICAL',
              secondaryContent: null,
            },
          ],
        }}
      />,
    );
    expect(screen.getByRole('button', { name: /Vertical Card/ })).toHaveClass(
      'btn-outline-success',
    );
    await user.click(screen.getByRole('button', { name: /Horizontal Card/ }));
    await user.click(screen.getByRole('button', { name: /Add Card/i }));
    expect(screen.getByRole('button', { name: /Horizontal Card/ })).toHaveClass(
      'btn-outline-success',
    );
    await user.click(screen.getByText('Old card'));
    expect(screen.getByRole('button', { name: /Horizontal Card/ })).toHaveClass(
      'btn-outline-success',
    );
  });

  it('saves per-card orientation without root orientation', async () => {
    const user = userEvent.setup();
    const card = {
      id: 1,
      name: 'Legacy',
      title: '',
      orientation: 'VERTICAL' as const,
      secondaryContent: null,
    };
    renderWithConfig(
      <StudioUI
        runtime={mockRuntime}
        saveUrl="/save"
        initData={{
          displayName: 'Legacy',
          cards: [card],
        }}
      />,
    );
    await user.click(screen.getByRole('button', { name: 'Save' }));
    expect(saveStudioBlock).toHaveBeenCalledWith(
      expect.objectContaining({
        saveUrl: '/save',
        data: {
          displayName: 'Legacy',
          cards: [card],
        },
      }),
    );
    expect(card.orientation).toBe('VERTICAL');
  });

  it('gives the first placeholder card the fixed horizontal orientation', () => {
    renderWithConfig(
      <StudioUI runtime={mockRuntime} saveUrl="" initData={defaultInitData} />,
    );
    expect(screen.getByRole('button', { name: /Horizontal Card/ })).toHaveClass(
      'btn-outline-success',
    );
    expect(defaultInitData.cards).toEqual([]);
  });

  it('hides the JSON tab when JSON editing is disabled', () => {
    renderWithConfig(
      <StudioUI runtime={mockRuntime} initData={defaultInitData} saveUrl="" />,
      { enable_json_editing: false } as XBlockConfig,
    );

    expect(screen.getByRole('tab', { name: 'Content' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Settings' })).toBeInTheDocument();
    expect(screen.queryByRole('tab', { name: 'JSON' })).not.toBeInTheDocument();
    expect(document.querySelectorAll('[role="tabpanel"]')).toHaveLength(2);
  });

  it('hides the JSON tab when no config is provided', () => {
    renderWithConfig(
      <StudioUI runtime={mockRuntime} initData={defaultInitData} saveUrl="" />,
      null,
    );

    expect(screen.queryByRole('tab', { name: 'JSON' })).not.toBeInTheDocument();
  });
});
