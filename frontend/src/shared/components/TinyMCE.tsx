import { Editor } from '@tinymce/tinymce-react';

// TinyMCE so the global var exists
import 'tinymce/tinymce';
// DOM model
import 'tinymce/models/dom/model';
// Theme
import 'tinymce/themes/silver';
// Toolbar icons
import 'tinymce/icons/default';
// Editor styles
import 'tinymce/skins/ui/oxide/skin';
// This whole app is rendered in a shadow dom, so we also need this
import 'tinymce/skins/ui/oxide/skin.shadowdom.js';

// importing the plugin js.
// if you use a plugin that is not listed here the editor will fail to load
// import 'tinymce/plugins/advlist';
// import 'tinymce/plugins/anchor';
// import 'tinymce/plugins/autolink';
// import 'tinymce/plugins/autoresize';
// import 'tinymce/plugins/autosave';
// import 'tinymce/plugins/charmap';
// import 'tinymce/plugins/code';
// import 'tinymce/plugins/codesample';
// import 'tinymce/plugins/directionality';
// import 'tinymce/plugins/emoticons';
// import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/help';
import 'tinymce/plugins/help/js/i18n/keynav/en';
// import 'tinymce/plugins/image';
// import 'tinymce/plugins/importcss';
// import 'tinymce/plugins/link';
import 'tinymce/plugins/lists';
// import 'tinymce/plugins/media';
// import 'tinymce/plugins/nonbreaking';
// import 'tinymce/plugins/quickbars';
// import 'tinymce/plugins/searchreplace';
// import 'tinymce/plugins/table';
// import 'tinymce/plugins/visualblocks';
// import 'tinymce/plugins/visualchars';

// importing plugin resources
// import 'tinymce/plugins/emoticons/js/emojis';

// Content styles, including inline UI like fake cursors
import 'tinymce/skins/content/default/content';
import 'tinymce/skins/ui/oxide/content';

interface TinyMceEditorProps {
  value: string;
  onEditorChange: (content: string) => void;
  ariaLabel: string;
  height?: string;
  /** Body formatting supported by the unfolding-scenario HTML sanitiser. */
  preset?: 'simple' | 'body';
  placeholder?: string;
}

// A simple editor with restricted styling,
// for text content where we want to allow some simple styling (eg. colours, headings, bold/italics),
// but nothing that would mess up the designs or layouts.
//
// Content here is expected to be sanitised on the backend using src/exemplar_common/utils.py:sanitise_simple_html
export const SimpleRichTextEditor = ({
  value,
  onEditorChange,
  ariaLabel,
  height,
  preset = 'simple',
  placeholder,
}: TinyMceEditorProps) => {
  return (
    <>
      <Editor
        licenseKey="gpl"
        value={value}
        onEditorChange={onEditorChange}
        init={{
          iframe_aria_text: ariaLabel,
          promotion: false,
          menubar: false,
          plugins: preset === 'body' ? ['help', 'lists'] : ['help'],
          toolbar:
            preset === 'body'
              ? 'undo redo | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent'
              : 'undo redo | blocks | bold italic forecolor',
          height,
          placeholder,
        }}
      />
    </>
  );
};
