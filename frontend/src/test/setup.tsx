import { vi, afterEach } from 'vitest';
import '@testing-library/jest-dom';
import { jQueryFactory } from 'jquery/factory';
import { JSDOM } from 'jsdom';
// @ts-expect-error Default export not annotated.
import initMockJax from 'jquery-mockjax';

const window = new JSDOM('<html></html>').window;

// @ts-expect-error Doesn't expect to get JSDOM's simulated Window
window.$ = jQueryFactory(window);

// Stub out AJAX calls in Jquery and add an interface for mocking them.
initMockJax(window.$, window);

window.$.mockjaxSettings.logLevel = 1; // warning messages

// @ts-expect-error global is both defined and not defined, between type checking
// and the test environment. No settings satisfy both.
global.$ = window.$;

// @dnd-kit uses ResizeObserver which is not available in jsdom
globalThis.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

// Paragon's Sticky component uses IntersectionObserver which is not available in jsdom
globalThis.IntersectionObserver = class IntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
} as unknown as typeof IntersectionObserver;

// @dnd-kit checks `event instanceof PointerEvent` but PointerEvent may not be
// exposed as a global in jsdom's module scope. Provide a shim so the check
// doesn't throw "Right-hand side of 'instanceof' is not an object".
if (!globalThis.PointerEvent) {
  globalThis.PointerEvent = class PointerEvent extends MouseEvent {
    constructor(type: string, params: PointerEventInit = {}) {
      super(type, params);
    }
  } as unknown as typeof PointerEvent;
}

// https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
// Required for the tinymce editor component.
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// TinyMCE renders its content inside an iframe, which can't be tested with
// the testing library's JSDom.
// Replace it with a plain textarea that mirrors the value/onEditorChange API.
vi.mock('@/shared/components/TinyMCE', () => ({
  SimpleRichTextEditor: ({
    value,
    ariaLabel,
    onEditorChange,
  }: {
    value: string;
    ariaLabel: string;
    onEditorChange: (content: string) => void;
  }) => (
    <textarea
      aria-label={ariaLabel}
      value={value}
      onChange={(e) => onEditorChange(e.target.value)}
    />
  ),
}));

afterEach(() => {
  $.mockjax.clearAll();
});
