import { useMemo, useState } from 'react';
import { Form, Formik, useFormikContext } from 'formik';
import {
  ModalDialog,
  TabContainer,
  TabContent,
  TabPane,
} from '@openedx/paragon';
import { type InitData } from '@/card/card-carousel/types';
import { newCard } from '@/card/common/utils';
import {
  saveStudioBlock,
  type XBlockRuntime,
} from '@opencraft/xblock-react-utils';
import SettingsForm from '@/card/card-carousel/studio-ui/SettingsForm';
import StudioHeader from '@/shared/components/StudioHeader';
import { EDITOR_TABS } from '@/shared/components/constants';
import CarouselEditor from '@/card/common/studio-ui/CardListEditor';
import ModalFooter from '@/card/common/studio-ui/ModalFooter';
import JsonImporter from '@/shared/components/JsonImporter';
import { type XBlockConfig } from '@/types';
import { useXBlockConfig } from '@/lib/context';

interface StudioUIProps {
  saveUrl: string;
  runtime: XBlockRuntime;
  initData: InitData;
}

interface StudioFormProps {
  saveUrl: string;
  runtime: XBlockRuntime;
}

function StudioForm({ saveUrl, runtime }: StudioFormProps) {
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
        id="card-carousel-studio-tabs"
        activeKey={activeTab}
        onSelect={(eventKey: string | null) =>
          setActiveTab(eventKey ? eventKey : defaultTab)
        }
        transition={false}
      >
        <div className="studio-ui card-carousel-studio">
          <StudioHeader
            activeTab={activeTab}
            title={values.displayName}
            onTitleChange={(value) => setFieldValue('displayName', value)}
            tabs={tabs}
          />
          <ModalDialog.Body>
            <TabContent className="card-carousel-studio-tab-content">
              <TabPane eventKey="content">
                <CarouselEditor enableCardOrientation />
              </TabPane>
              <TabPane eventKey="settings">
                <SettingsForm />
              </TabPane>
              {enableJsonEditing && (
                <TabPane eventKey="json">
                  <JsonImporter saveUrl={saveUrl} runtime={runtime} />
                </TabPane>
              )}
            </TabContent>
          </ModalDialog.Body>
          <ModalFooter runtime={runtime} showingEditor onContinue={() => {}} />
        </div>
      </TabContainer>
    </Form>
  );
}

function StudioUI({ runtime, saveUrl, initData }: StudioUIProps) {
  const initialData = useMemo(
    () =>
      initData.cards.length
        ? initData
        : {
            ...initData,
            cards: [newCard([], { orientation: 'HORIZONTAL' as const })],
          },
    [initData],
  );

  return (
    <Formik
      initialValues={initialData}
      onSubmit={(values) => {
        saveStudioBlock<InitData>({
          saveUrl,
          data: values,
          runtime,
          errorMessage: 'Failed to save the card carousel.',
        });
      }}
    >
      <StudioForm saveUrl={saveUrl} runtime={runtime} />
    </Formik>
  );
}

export default StudioUI;
