import { useMemo, useState } from 'react';
import { Form, Formik, useFormikContext } from 'formik';
import { Alert, ModalDialog } from '@openedx/paragon';
import StudioHeader from '@/shared/components/StudioHeader';
import EditorSidebar from './components/EditorSidebar';
import type { SectionKey } from './components/EditorSidebar';
import StudioFooter from './components/StudioFooter';
import SetupSection from './sections/SetupSection';
import IntroductionSection from './sections/IntroductionSection';
import OutcomeSection from './sections/OutcomeSection';
import ScenarioSection from './sections/ScenarioSection';
import { ValidationProvider } from './ValidationContext';
import {
  StudioSaveError,
  firstErrorSection,
  orderSections,
  validateData,
  type FieldErrors,
  type ValidationResult,
} from './validation';
import type { Data } from '../apiTypes';

interface StudioUIProps {
  initialData: Data;
  onSave: (data: Data) => void | Promise<void>;
  onCancel: () => void;
}

interface ServerErrors {
  errors: FieldErrors;
  unmapped: string[];
  sections: SectionKey[];
  /** Snapshot of the rejected values; stale messages disappear once edited. */
  valuesJson: string;
}

interface EditorBodyProps {
  activeSection: SectionKey;
  onSelectSection: (section: SectionKey) => void;
  attempted: boolean;
  serverErrors: ServerErrors | null;
  saving: boolean;
  onCancel: () => void;
}

function EditorBody({
  activeSection,
  onSelectSection,
  attempted,
  serverErrors,
  saving,
  onCancel,
}: EditorBodyProps) {
  const { values, setFieldValue } = useFormikContext<Data>();
  const scenarios = values.scenarioData.scenarios;

  // When scenarios are deleted, the stored section key can point past the end
  // of the list; derive the section actually displayed instead of adjusting
  // state from an effect.
  const displayedSection: SectionKey =
    activeSection.startsWith('scenario:') &&
    Number(activeSection.slice('scenario:'.length)) >= scenarios.length
      ? scenarios.length > 0
        ? `scenario:${scenarios.length - 1}`
        : 'introduction'
      : activeSection;

  const validation = useMemo(() => {
    const client = validateData(values);
    const stale =
      serverErrors && serverErrors.valuesJson !== JSON.stringify(values)
        ? null
        : serverErrors;
    const errors = { ...client.errors, ...(stale?.errors ?? {}) };
    const unmapped = [...client.unmapped, ...(stale?.unmapped ?? [])];
    return {
      errors,
      unmapped,
      sections: orderSections([...client.sections, ...(stale?.sections ?? [])]),
    };
  }, [values, serverErrors]);

  const messages = [
    ...new Set([...Object.values(validation.errors), ...validation.unmapped]),
  ];
  const showErrors = attempted && messages.length > 0;

  return (
    <ValidationProvider value={{ errors: validation.errors, showErrors }}>
      <Form>
        <div className="us-editor">
          <StudioHeader
            title={values.displayName}
            onTitleChange={(title) => setFieldValue('displayName', title)}
            showEditingPrefix={false}
            onClose={onCancel}
          />
          <ModalDialog.Body className="us-editor-body">
            <EditorSidebar
              activeSection={displayedSection}
              onSelect={onSelectSection}
              errorSections={
                showErrors
                  ? Object.fromEntries(
                      validation.sections.map((section) => [section, true]),
                    )
                  : {}
              }
            />
            <div className="us-editor-panel">
              {showErrors && (
                <Alert variant="danger" className="us-editor-alert">
                  <Alert.Heading>We couldn't save your exercise</Alert.Heading>
                  <ul className="mb-0">
                    {messages.map((message) => (
                      <li key={message}>{message}</li>
                    ))}
                  </ul>
                </Alert>
              )}
              {displayedSection === 'setup' && <SetupSection />}
              {displayedSection === 'introduction' && <IntroductionSection />}
              {displayedSection === 'outcome' && <OutcomeSection />}
              {displayedSection.startsWith('scenario:') && (
                <ScenarioSection
                  key={displayedSection}
                  index={Number(displayedSection.slice('scenario:'.length))}
                />
              )}
            </div>
          </ModalDialog.Body>
          <StudioFooter onCancel={onCancel} saving={saving} />
        </div>
      </Form>
    </ValidationProvider>
  );
}

function EditorForm({ initialData, onSave, onCancel }: StudioUIProps) {
  const [activeSection, setActiveSection] = useState<SectionKey>('setup');
  const [attempted, setAttempted] = useState(false);
  const [serverErrors, setServerErrors] = useState<ServerErrors | null>(null);
  const [saving, setSaving] = useState(false);

  const openSection = (result: ValidationResult) => {
    setAttempted(true);
    setActiveSection((current) =>
      firstErrorSection(
        result,
        current.startsWith('scenario:') ? current : 'introduction',
      ),
    );
  };

  const handleSubmit = async (values: Data) => {
    const client = validateData(values);
    setServerErrors(null);
    if (Object.keys(client.errors).length > 0 || client.unmapped.length > 0) {
      openSection(client);
      return;
    }

    setAttempted(false);
    setSaving(true);
    try {
      await onSave(values);
    } catch (error) {
      if (!(error instanceof StudioSaveError)) {
        throw error;
      }
      setServerErrors({
        errors: error.fieldErrors,
        unmapped: error.unmapped,
        sections: error.sections,
        valuesJson: JSON.stringify(values),
      });
      setAttempted(true);
      if (error.sections.length > 0) {
        setActiveSection(firstErrorSection(error));
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <Formik initialValues={initialData} onSubmit={handleSubmit}>
      <EditorBody
        activeSection={activeSection}
        onSelectSection={setActiveSection}
        attempted={attempted}
        serverErrors={serverErrors}
        saving={saving}
        onCancel={onCancel}
      />
    </Formik>
  );
}

export default function StudioUI({
  initialData,
  onSave,
  onCancel,
}: StudioUIProps) {
  return (
    <EditorForm initialData={initialData} onSave={onSave} onCancel={onCancel} />
  );
}
