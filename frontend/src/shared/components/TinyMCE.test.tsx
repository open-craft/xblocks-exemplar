import { describe, expect, it, vi } from 'vitest';
import { render } from '@opencraft/xblock-react-utils/testing';
import { Editor } from '@tinymce/tinymce-react';
import { SimpleRichTextEditor } from './TinyMCE';

// Override the suite-wide textarea mock to inspect the real editor's config.
vi.unmock('@/shared/components/TinyMCE');
vi.mock('@tinymce/tinymce-react', () => ({ Editor: vi.fn(() => null) }));

const props = {
  value: '<p>Content</p>',
  ariaLabel: 'Paragraph',
  onEditorChange: vi.fn(),
};

describe('SimpleRichTextEditor presets', () => {
  it('leaves the default toolbar and plugins unchanged for other blocks', () => {
    render(<SimpleRichTextEditor {...props} />);
    expect(vi.mocked(Editor).mock.lastCall?.[0].init).toMatchObject({
      plugins: ['help'],
      toolbar: 'undo redo | blocks | bold italic forecolor',
    });
  });

  it('enables only supported body formatting and the lists plugin for the body preset', () => {
    render(
      <SimpleRichTextEditor
        {...props}
        preset="body"
        placeholder="Describe the situation"
      />,
    );
    const init = vi.mocked(Editor).mock.lastCall?.[0].init;
    expect(init).toMatchObject({
      plugins: ['help', 'lists'],
      placeholder: 'Describe the situation',
    });
    expect(init?.toolbar).toContain('bullist numlist');
    expect(init?.toolbar).toContain('alignleft');
    expect(init?.toolbar).toContain('underline');
    expect(init?.toolbar).not.toContain('forecolor');
    expect(init?.toolbar).not.toContain('blocks');
  });
});
