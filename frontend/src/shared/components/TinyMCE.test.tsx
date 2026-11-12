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

describe('SimpleRichTextEditor', () => {
  it('keeps the default toolbar and plugins for blocks that pass nothing', () => {
    render(<SimpleRichTextEditor {...props} />);
    expect(vi.mocked(Editor).mock.lastCall?.[0].init).toMatchObject({
      plugins: ['help'],
      toolbar: 'undo redo | blocks | bold italic forecolor',
    });
  });

  it('uses the caller-provided plugins and toolbar', () => {
    render(
      <SimpleRichTextEditor
        {...props}
        plugins={['help', 'lists']}
        toolbar="undo redo | bullist numlist"
        placeholder="Describe the situation"
      />,
    );
    expect(vi.mocked(Editor).mock.lastCall?.[0].init).toMatchObject({
      plugins: ['help', 'lists'],
      toolbar: 'undo redo | bullist numlist',
      placeholder: 'Describe the situation',
    });
  });
});
