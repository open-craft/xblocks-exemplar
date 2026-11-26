import { useFormikContext } from 'formik';
import { SimpleRichTextEditor } from '@/shared/components/TinyMCE';
import { Form } from '@openedx/paragon';

import type { InitData } from '@/card/card-grid/types';
import CardListEditor from '@/card/common/studio-ui/CardListEditor';

export default function ContentForm() {
  const { values, setFieldValue } = useFormikContext<InitData>();

  return (
    <div>
      <CardListEditor />
      <Form.Group className="card-studio-field">
        <Form.Label>Leading Content</Form.Label>
        <Form.Text muted>
          An optional title or description that can be shown above the cards.
        </Form.Text>
        <SimpleRichTextEditor
          ariaLabel="Rich text editor for the description content."
          value={values.description}
          onEditorChange={(value: string) =>
            setFieldValue('description', value)
          }
          height="200px"
        />
      </Form.Group>
      <Form.Group className="card-studio-field">
        <Form.Label>Trailing Content</Form.Label>
        <Form.Text muted>
          An optional description that can be shown below the cards.
        </Form.Text>
        <SimpleRichTextEditor
          ariaLabel="Rich text editor for the footer description content."
          value={values.footerDescription}
          onEditorChange={(value: string) =>
            setFieldValue('footerDescription', value)
          }
          height="200px"
        />
      </Form.Group>
    </div>
  );
}
