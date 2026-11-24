import { useId, useRef, useState } from 'react';
import { FieldArray, useFormikContext } from 'formik';
import { Button, Icon, IconButton } from '@openedx/paragon';
import Form from '@openedx/paragon/dist/Form';
import {
  Add,
  Cancel,
  CheckCircleOutline,
  ChatBubbleOutline,
  DeleteOutline,
  Warning,
} from '@openedx/paragon/icons';
import { SimpleRichTextEditor } from '@/shared/components/TinyMCE';
import { BODY_PLUGINS, BODY_TOOLBAR } from '../richText';
import type { Data, FeedbackType } from '../../apiTypes';
import { emptyOption } from '../utils';
import { useFieldError, useFieldErrors } from '../ValidationContext';

const FEEDBACK_ICONS = {
  Correct: CheckCircleOutline,
  Incorrect: Cancel,
  Warning,
} satisfies Record<FeedbackType, typeof CheckCircleOutline>;

/** Positional labels without imposing an artificial option limit (A … Z, AA …). */
function optionLabel(index: number): string {
  let label = '';
  for (
    let position = index + 1;
    position > 0;
    position = Math.floor((position - 1) / 26)
  ) {
    label = String.fromCharCode(65 + ((position - 1) % 26)) + label;
  }
  return label;
}

export default function ScenarioSection({ index }: { index: number }) {
  const { values, handleChange, handleBlur, setFieldValue } =
    useFormikContext<Data>();
  const scenario = values.scenarioData.scenarios[index];
  const path = `scenarioData.scenarios[${index}]`;
  const id = useId();
  // Expansion is editor-only state, never included in the saved scenario.
  const [expanded, setExpanded] = useState<number[]>([0]);
  const focusNewOption = useRef<number | null>(null);
  const addButton = useRef<HTMLButtonElement>(null);
  const headingError = useFieldError(`${path}.heading`);
  const descriptionError = useFieldError(`${path}.description`);
  const instructionTitleError = useFieldError(`${path}.instructionTitle`);
  const instructionDescriptionError = useFieldError(
    `${path}.instructionDescription`,
  );
  const promptError = useFieldError(`${path}.prompt`);
  const fieldErrors = useFieldErrors();

  if (!scenario) return null;

  return (
    <section
      className="us-panel us-scenario-panel"
      aria-labelledby={`${id}-title`}
    >
      <h4 id={`${id}-title`}>Scenario {index + 1}</h4>
      <p className="us-section-help us-section">
        Scenarios describe the situation or context in which a question takes
        place. Each scenario includes an introduction, instructions, and a
        multiple-choice question. You can add up to 5 scenarios.
      </p>
      <section className="us-section" aria-labelledby={`${id}-introduction`}>
        <h5 id={`${id}-introduction`}>Introduction</h5>
        <Form.Group className="us-field" controlId={`${id}-heading`}>
          <Form.Label>Heading</Form.Label>
          <Form.Control
            name={`${path}.heading`}
            value={scenario.heading}
            isInvalid={Boolean(headingError)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {headingError && (
            <Form.Control.Feedback type="invalid">
              {headingError}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <div className="us-field">
          <p className="us-rich-text-label">Paragraph</p>
          <SimpleRichTextEditor
            value={scenario.description}
            onEditorChange={(content) =>
              setFieldValue(`${path}.description`, content)
            }
            ariaLabel="Scenario introduction paragraph"
            plugins={BODY_PLUGINS}
            toolbar={BODY_TOOLBAR}
            height="240px"
            placeholder="Describe the scenario or context for the question"
          />
          {descriptionError && (
            <Form.Control.Feedback type="invalid" className="d-block">
              {descriptionError}
            </Form.Control.Feedback>
          )}
        </div>
      </section>
      <section className="us-section" aria-labelledby={`${id}-instructions`}>
        <h5 id={`${id}-instructions`}>Instructions</h5>
        <Form.Group className="us-field" controlId={`${id}-instruction-title`}>
          <Form.Label>Heading</Form.Label>
          <Form.Control
            name={`${path}.instructionTitle`}
            value={scenario.instructionTitle}
            isInvalid={Boolean(instructionTitleError)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {instructionTitleError && (
            <Form.Control.Feedback type="invalid">
              {instructionTitleError}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <div className="us-field">
          <p className="us-rich-text-label">Paragraph</p>
          <SimpleRichTextEditor
            value={scenario.instructionDescription}
            onEditorChange={(content) =>
              setFieldValue(`${path}.instructionDescription`, content)
            }
            ariaLabel="Scenario instructions paragraph"
            plugins={BODY_PLUGINS}
            toolbar={BODY_TOOLBAR}
            height="240px"
            placeholder={
              'Describe to the learner what they need to do e.g. “Choose the explanation that best matches your first reaction”'
            }
          />
          {instructionDescriptionError && (
            <Form.Control.Feedback type="invalid" className="d-block">
              {instructionDescriptionError}
            </Form.Control.Feedback>
          )}
        </div>
      </section>
      <section className="us-section" aria-labelledby={`${id}-prompt`}>
        <h5 id={`${id}-prompt`}>Prompt</h5>
        <Form.Group controlId={`${id}-prompt-text`}>
          <Form.Label>Prompt Text</Form.Label>
          <Form.Control
            name={`${path}.prompt`}
            value={scenario.prompt}
            isInvalid={Boolean(promptError)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {promptError && (
            <Form.Control.Feedback type="invalid">
              {promptError}
            </Form.Control.Feedback>
          )}
        </Form.Group>
      </section>
      <section className="us-section" aria-labelledby={`${id}-options`}>
        <h5 id={`${id}-options`}>Options with feedback</h5>
        <p className="us-section-help">
          Enter the answer options and choose the feedback message and icon
          shown when each option is selected.
        </p>
        <FieldArray name={`${path}.options`}>
          {({ push, remove }) => (
            <div className="us-options-editor">
              {scenario.options.map((option, optionIndex) => {
                const label = optionLabel(optionIndex);
                const optionPath = `${path}.options[${optionIndex}]`;
                const isExpanded = expanded.includes(optionIndex);
                const feedbackId = `${id}-feedback-${optionIndex}`;
                const valueError = fieldErrors[`${optionPath}.value`];
                return (
                  <div className="us-option" key={optionIndex}>
                    <div className="us-option-row">
                      <div className="us-option-input">
                        <Form.Control
                          ref={(node: HTMLInputElement | null) => {
                            if (
                              node &&
                              focusNewOption.current === optionIndex
                            ) {
                              node.focus();
                              focusNewOption.current = null;
                            }
                          }}
                          aria-label={`Option ${label}`}
                          name={`${optionPath}.value`}
                          placeholder="Enter an option"
                          value={option.value}
                          isInvalid={Boolean(valueError)}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {valueError && (
                          <Form.Control.Feedback type="invalid">
                            {valueError}
                          </Form.Control.Feedback>
                        )}
                      </div>
                      <IconButton
                        type="button"
                        src={ChatBubbleOutline}
                        alt={`${isExpanded ? 'Hide' : 'Show'} feedback for option ${label}`}
                        aria-expanded={isExpanded}
                        aria-controls={feedbackId}
                        onClick={() =>
                          setExpanded((current) =>
                            isExpanded
                              ? current.filter((item) => item !== optionIndex)
                              : [...current, optionIndex],
                          )
                        }
                      />
                      <IconButton
                        type="button"
                        src={DeleteOutline}
                        alt={`Delete option ${label}`}
                        disabled={scenario.options.length <= 1}
                        onClick={() => {
                          if (scenario.options.length <= 1) return;
                          remove(optionIndex);
                          setExpanded((current) =>
                            current
                              .filter((item) => item !== optionIndex)
                              .map((item) =>
                                item > optionIndex ? item - 1 : item,
                              ),
                          );
                          addButton.current?.focus();
                        }}
                      />
                    </div>
                    <div
                      className="us-option-feedback"
                      id={feedbackId}
                      hidden={!isExpanded}
                    >
                      <p>Show following feedback when {label} is selected:</p>
                      <Form.Group controlId={`${feedbackId}-type`}>
                        <Form.Label>Select an icon</Form.Label>
                        <div className="us-feedback-icon-picker">
                          <Icon
                            src={FEEDBACK_ICONS[option.type]}
                            aria-hidden="true"
                          />
                          <Form.Control
                            as="select"
                            name={`${optionPath}.type`}
                            value={option.type}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          >
                            {Object.keys(FEEDBACK_ICONS).map((type) => (
                              <option key={type} value={type}>
                                {type}
                              </option>
                            ))}
                          </Form.Control>
                        </div>
                      </Form.Group>
                      <Form.Group controlId={`${feedbackId}-message`}>
                        <Form.Label>Feedback message</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          name={`${optionPath}.feedback`}
                          value={option.feedback}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Form.Group>
                    </div>
                  </div>
                );
              })}
              <Button
                type="button"
                variant="link"
                ref={addButton}
                iconBefore={Add}
                onClick={() => {
                  focusNewOption.current = scenario.options.length;
                  setExpanded((current) => [
                    ...current,
                    scenario.options.length,
                  ]);
                  push(emptyOption());
                }}
              >
                Add option
              </Button>
            </div>
          )}
        </FieldArray>
      </section>
    </section>
  );
}
