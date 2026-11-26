import { useState, type ReactNode } from 'react';
import { Form, useFormikContext } from 'formik';
import {
  ModalDialog,
  TabContainer,
  TabContent,
  TabPane,
} from '@openedx/paragon';
import ModalFooter from '@/card/common/studio-ui/ModalFooter';
import JsonImporter from '@/shared/components/JsonImporter';
import StudioHeader from '@/shared/components/StudioHeader';
import { EDITOR_TABS } from '@/shared/components/constants';
import { useXBlockConfig } from '@/lib/context';
import { type XBlockConfig } from '@/types';

interface StudioFormProps {
  /** Id of the tab container, also the prefix of the tab and panel ids. */
  id: string;
  contentTab: ReactNode;
  settingsTab: ReactNode;
}

/**
 * The tabbed editor shared by the card blocks. Must be rendered inside a Formik
 * context whose values include `displayName`.
 */
export default function StudioForm({
  id,
  contentTab,
  settingsTab,
}: StudioFormProps) {
  const defaultTab = EDITOR_TABS[0].key;
  const [activeTab, setActiveTab] = useState<string>(defaultTab);
  const { values, setFieldValue } = useFormikContext<{ displayName: string }>();
  const config = useXBlockConfig<XBlockConfig>();
  const enableJsonEditing = Boolean(config?.enable_json_editing);
  const tabs = enableJsonEditing
    ? EDITOR_TABS
    : EDITOR_TABS.filter((t) => t.key !== 'json');

  return (
    <Form>
      <TabContainer
        id={id}
        activeKey={activeTab}
        onSelect={(eventKey: string | null) =>
          setActiveTab(eventKey || defaultTab)
        }
        transition={false}
      >
        <div className="studio-ui card-studio">
          <StudioHeader
            activeTab={activeTab}
            title={values.displayName}
            onTitleChange={(value) => setFieldValue('displayName', value)}
            tabs={tabs}
          />
          <ModalDialog.Body>
            <TabContent className="card-studio-tab-content">
              <TabPane eventKey="content">{contentTab}</TabPane>
              <TabPane eventKey="settings">{settingsTab}</TabPane>
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
