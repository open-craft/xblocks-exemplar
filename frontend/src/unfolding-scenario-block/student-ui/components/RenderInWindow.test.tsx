import { afterEach, describe, expect, it, vi } from 'vitest';
import type { CSSProperties } from 'react';
import { render } from '@opencraft/xblock-react-utils/testing';
import { RenderInWindow } from './RenderInWindow';

const windows: { document: Document; close: () => void }[] = [];

afterEach(() => {
  vi.restoreAllMocks();
  windows.length = 0;
  document.body.innerHTML = '';
});

describe('RenderInWindow', () => {
  it('applies the colour variant custom properties to the popup container', () => {
    // The popup container is created imperatively, so it is not part of the
    // React tree the style prop normally reaches.
    const close = vi.fn();
    vi.spyOn(window, 'open').mockReturnValue({
      document,
      addEventListener: vi.fn(),
      close,
    } as unknown as Window);
    windows.push({ document, close });

    const { unmount } = render(
      <RenderInWindow
        title="Activity"
        className="xblock-unfolding-scenario-wrapper min-vh-100"
        cssContent=""
        themeUrls={[]}
        style={
          {
            '--color-bg-main':
              'var(--pgn-wgu-color-background-main-lake, #46b1ef)',
            '--color-txt-content':
              'var(--pgn-wgu-color-text-main-navy, #002855)',
          } as CSSProperties
        }
        onClose={() => {}}
      >
        <p>Activity content</p>
      </RenderInWindow>,
    );

    const container = document.querySelector<HTMLDivElement>(
      '.xblock-unfolding-scenario-wrapper',
    );
    expect(container).not.toBeNull();
    expect(container?.style.getPropertyValue('--color-bg-main')).toBe(
      'var(--pgn-wgu-color-background-main-lake, #46b1ef)',
    );
    expect(container?.style.getPropertyValue('--color-txt-content')).toBe(
      'var(--pgn-wgu-color-text-main-navy, #002855)',
    );
    expect(container?.textContent).toContain('Activity content');
    unmount();
  });

  it('leaves the container unstyled when no variant is selected', () => {
    vi.spyOn(window, 'open').mockReturnValue({
      document,
      addEventListener: vi.fn(),
      close: vi.fn(),
    } as unknown as Window);

    const { unmount } = render(
      <RenderInWindow
        title="Activity"
        className="xblock-unfolding-scenario-wrapper"
        cssContent=""
        themeUrls={[]}
        onClose={() => {}}
      >
        <p>Activity content</p>
      </RenderInWindow>,
    );

    const container = document.querySelector<HTMLDivElement>(
      '.xblock-unfolding-scenario-wrapper',
    );
    expect(container?.getAttribute('style')).toBeNull();
    unmount();
  });
});
