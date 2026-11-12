import Form from '@openedx/paragon/dist/Form';
import { useFormikContext } from 'formik';
import { SimpleRichTextEditor } from '@/shared/components/TinyMCE';
import type { Data } from '../../apiTypes';

export default function OutcomeSection() {
  const { values, setFieldValue } = useFormikContext<Data>();
  const outcome = values.scenarioData.outcome;
  const displaySelected = outcome.displaySelectedOptions;

  return (
    <div className="us-panel">
      <h4>Outcome</h4>
      <section className="us-section">
        <h5>Choose outcome template</h5>
        <Form.RadioSet
          name="outcomeTemplate"
          value={displaySelected ? 'selectedOptions' : 'summary'}
        >
          <Form.Radio
            value="summary"
            onChange={() =>
              setFieldValue(
                'scenarioData.outcome.displaySelectedOptions',
                false,
              )
            }
          >
            Summary
          </Form.Radio>
          <Form.Radio
            value="selectedOptions"
            onChange={() =>
              setFieldValue('scenarioData.outcome.displaySelectedOptions', true)
            }
          >
            Record of Selected Options
          </Form.Radio>
        </Form.RadioSet>
      </section>
      <section className="us-section">
        <h5>{displaySelected ? 'Record of Selected Options' : 'Summary'}</h5>
        <p className="us-section-help">
          {displaySelected
            ? 'The summary appears above a list of the answer options that the learner selected.'
            : 'Provide a summary for the exercise'}
        </p>
        <Form.Group className="us-field">
          <Form.Label>Heading</Form.Label>
          <Form.Control
            type="text"
            name="scenarioData.outcome.heading"
            value={outcome.heading}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFieldValue('scenarioData.outcome.heading', e.target.value)
            }
          />
        </Form.Group>
        <Form.Group className="us-field">
          <Form.Label>Paragraph</Form.Label>
          <SimpleRichTextEditor
            value={outcome.description}
            onEditorChange={(content) =>
              setFieldValue('scenarioData.outcome.description', content)
            }
            ariaLabel="Outcome paragraph"
          />
        </Form.Group>
      </section>
    </div>
  );
}
