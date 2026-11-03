import { useContext, useState } from 'react';
import { Form, Formik, useFormikContext } from 'formik';
import { type InitData } from '../types';
import {
  RuntimeContext,
  saveStudioBlock,
  useHandlerUrl,
} from '@opencraft/xblock-react-utils';
import { type XBlockConfig } from '@/types';
import ModalFooter from '@/card/common/studio-ui/ModalFooter';
import {
  ModalDialog,
  TabContainer,
  TabContent,
  TabPane,
} from '@openedx/paragon';
import { EDITOR_TABS } from '@/shared/components/constants';
import StudioHeader from '@/shared/components/StudioHeader';
import { useXBlockConfig } from '@/lib/context';
import JsonImporter from '@/shared/components/JsonImporter';

import SettingsForm from './components/SettingsForm';
import ContentForm from './components/ContentForm.tsx';

interface StudioUIProps {
  initData: InitData;
}

function StudioForm() {
  const defaultTab = EDITOR_TABS[0].key;
  const [activeTab, setActiveTab] = useState<string>(defaultTab);
  const { values, setFieldValue } = useFormikContext<InitData>();
  const config = useXBlockConfig<XBlockConfig>();
  const enableJsonEditing = Boolean(config?.enable_json_editing);
  const tabs = enableJsonEditing
    ? EDITOR_TABS
    : EDITOR_TABS.filter((t) => t.key !== 'json');

  return (
    <Form>
      <TabContainer
        id="card-grid-studio-tabs"
        activeKey={activeTab}
        onSelect={(eventKey: string | null) =>
          setActiveTab(eventKey || defaultTab)
        }
        transition={false}
      >
        <div className="studio-ui card-grid-studio">
          <StudioHeader
            activeTab={activeTab}
            title={values.displayName}
            onTitleChange={(value) => setFieldValue('displayName', value)}
            tabs={tabs}
          />
          <ModalDialog.Body>
            <TabContent className="tab-content">
              <TabPane eventKey="content">
                <ContentForm />
              </TabPane>
              <TabPane eventKey="settings">
                <SettingsForm />
              </TabPane>
              {enableJsonEditing && (
                <TabPane eventKey="json">
                  <JsonImporter liveData={values} />
                </TabPane>
              )}
            </TabContent>
          </ModalDialog.Body>
          <ModalFooter showingEditor onContinue={() => {}} />
        </div>
      </TabContainer>
    </Form>
  );
}

function StudioUI({ initData }: StudioUIProps) {
  const { runtime } = useContext(RuntimeContext);
  const saveUrl = useHandlerUrl('studio_save');

  return (
    <Formik
      initialValues={initData}
      onSubmit={(values) => {
        saveStudioBlock<InitData>({
          saveUrl,
          data: values,
          runtime,
          errorMessage: 'Failed to save the card grid.',
        });
      }}
    >
      <StudioForm />
    </Formik>
  );
}

export default StudioUI;
