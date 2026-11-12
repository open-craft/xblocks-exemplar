import { useState } from 'react';
import { Form, Formik, useFormikContext } from 'formik';
import { ModalDialog } from '@openedx/paragon';
import StudioHeader from '@/shared/components/StudioHeader';
import EditorSidebar from './components/EditorSidebar';
import type { SectionKey } from './components/EditorSidebar';
import StudioFooter from './components/StudioFooter';
import SetupSection from './sections/SetupSection';
import IntroductionSection from './sections/IntroductionSection';
import OutcomeSection from './sections/OutcomeSection';
import type { Data } from '../apiTypes';

interface StudioUIProps {
  initialData: Data;
  onSave: (data: Data) => void;
  onCancel: () => void;
}

function EditorForm({ onCancel }: { onCancel: () => void }) {
  const [activeSection, setActiveSection] = useState<SectionKey>('setup');
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

  let scenarioPanelHeading = '';
  if (displayedSection.startsWith('scenario:')) {
    scenarioPanelHeading = `Scenario ${Number(displayedSection.slice('scenario:'.length)) + 1}`;
  }

  return (
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
            onSelect={setActiveSection}
          />
          <div className="us-editor-panel">
            {displayedSection === 'setup' && <SetupSection />}
            {displayedSection === 'introduction' && <IntroductionSection />}
            {displayedSection === 'outcome' && <OutcomeSection />}
            {displayedSection.startsWith('scenario:') && (
              /* Scenario panel placeholder; implemented in phase 4. */
              <div className="us-panel">
                <h4>{scenarioPanelHeading}</h4>
              </div>
            )}
          </div>
        </ModalDialog.Body>
        <StudioFooter onCancel={onCancel} />
      </div>
    </Form>
  );
}

export default function StudioUI({
  initialData,
  onSave,
  onCancel,
}: StudioUIProps) {
  return (
    <Formik initialValues={initialData} onSubmit={onSave}>
      <EditorForm onCancel={onCancel} />
    </Formik>
  );
}
