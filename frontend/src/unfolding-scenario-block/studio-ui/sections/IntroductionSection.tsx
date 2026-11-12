import Form from '@openedx/paragon/dist/Form';
import { useFormikContext } from 'formik';
import { SimpleRichTextEditor } from '@/shared/components/TinyMCE';
import { URLFilePickerWrapper } from '@/shared/components/URLFilePickerWrapper';
import type { Data } from '../../apiTypes';

export default function IntroductionSection() {
  const { values, setFieldValue } = useFormikContext<Data>();
  const introduction = values.scenarioData.introduction;

  return (
    <div className="us-panel">
      <h4>Introduction</h4>
      <Form.Group className="us-field">
        <Form.Label>Heading</Form.Label>
        <Form.Control
          type="text"
          name="scenarioData.introduction.heading"
          value={introduction.heading}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFieldValue('scenarioData.introduction.heading', e.target.value)
          }
        />
      </Form.Group>
      <Form.Group className="us-field">
        <Form.Label>Paragraph</Form.Label>
        <Form.Text muted>
          Introduce the exercise and give learners some context about what
          they'll learn
        </Form.Text>
        <SimpleRichTextEditor
          value={introduction.description}
          onEditorChange={(content) =>
            setFieldValue('scenarioData.introduction.description', content)
          }
          ariaLabel="Introduction paragraph"
          preset="body"
        />
      </Form.Group>
      <Form.Group className="us-field">
        <Form.Label>Featured image</Form.Label>
        <Form.Text muted>Add image (recommended size: 1500 x 2200px)</Form.Text>
        <URLFilePickerWrapper
          setValue={async (url) =>
            setFieldValue('scenarioData.introduction.imageURL', url)
          }
          fileTypes={['image']}
        >
          <Form.Control
            type="text"
            name="scenarioData.introduction.imageURL"
            value={introduction.imageURL}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFieldValue(
                'scenarioData.introduction.imageURL',
                e.target.value,
              )
            }
          />
        </URLFilePickerWrapper>
        {introduction.imageURL && (
          <div className="us-image-preview">
            <img src={introduction.imageURL} alt="Featured image preview" />
            <button
              type="button"
              className="btn btn-link us-image-remove"
              onClick={() =>
                setFieldValue('scenarioData.introduction.imageURL', '')
              }
            >
              Remove image
            </button>
          </div>
        )}
      </Form.Group>
    </div>
  );
}
