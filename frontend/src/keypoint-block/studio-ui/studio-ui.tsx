import React, { useState } from 'react';
import {
  ActionRow,
  Button,
  ColorPicker,
  Form,
  ModalDialog,
  Stack,
  TabContainer,
  TabContent,
  TabPane,
} from '@openedx/paragon';
import { Add, DeleteOutline } from '@openedx/paragon/icons';
import { type KeyPoint, type XBlockData } from '../type';
import { useContext } from 'react';
import {
  RuntimeContext,
  useHandlerUrl,
  saveStudioBlock,
} from '@opencraft/xblock-react-utils';
import { type XBlockConfig } from '@/types';
import { EDITOR_TABS } from '@/shared/components/constants';
import StudioHeader from '@/shared/components/StudioHeader';
import { useXBlockConfig } from '@/lib/context';
import JsonImporter from '@/shared/components/JsonImporter';

interface StudioUiProps {
  data: XBlockData;
}

export default function StudioUi({ data }: StudioUiProps) {
  const { runtime } = useContext(RuntimeContext);
  const studioSaveUrl = useHandlerUrl('studio_save');
  const [header, setHeader] = useState<string>(data.header || '');
  const [keypoints, setKeypoints] = useState<KeyPoint[]>(data.keypoints || []);
  const [summary, setSummary] = useState<string>(data.summary || '');
  const [buttonText, setButtonText] = useState<string>(data.button_text || '');
  const [buttonLink, setButtonLink] = useState<string>(data.button_link || '');
  const [backgroundColor, setBackgroundColor] = useState<string>(
    data.background_color || '',
  );

  const addKeypoint = () => {
    setKeypoints([...keypoints, { keypoint: '', description: '' }]);
  };

  const updateKeypoint = (idx: number, change: Partial<KeyPoint>) => {
    const updated = [...keypoints];
    updated[idx] = { ...updated[idx], ...change };
    setKeypoints(updated);
  };

  const removeKeypoint = (idx: number) => {
    setKeypoints(keypoints.filter((_, i) => i !== idx));
  };

  const handleSave = () => {
    const data: XBlockData = {
      header,
      keypoints,
      summary,
      button_text: buttonText,
      button_link: buttonLink,
      background_color: backgroundColor,
    };

    saveStudioBlock<XBlockData>({
      saveUrl: studioSaveUrl,
      data,
      runtime,
      errorMessage: 'Failed to save keypoint configuration',
    });
  };
  const defaultTab = EDITOR_TABS[0].key;
  const [activeTab, setActiveTab] = useState<string>(defaultTab);
  const config = useXBlockConfig<XBlockConfig>();
  const enableJsonEditing = Boolean(config?.enable_json_editing);
  const tabs = enableJsonEditing
    ? EDITOR_TABS
    : EDITOR_TABS.filter((t) => t.key !== 'json');

  return (
    <TabContainer
      id="keypoint-block-studio-tabs"
      activeKey={activeTab}
      onSelect={(eventKey: string | null) =>
        setActiveTab(eventKey || defaultTab)
      }
      transition={false}
    >
      <div className="xblock-keypoints-studio">
        <StudioHeader
          activeTab={activeTab}
          title={header}
          onTitleChange={setHeader}
          tabs={tabs}
        />
        <ModalDialog.Body>
          <TabContent>
            <TabPane eventKey="content">
              {/* Key Terms Section */}
              <ActionRow className="keypoints-studio-row">
                <h4 className="keypoints-studio-section-title">Key Terms</h4>
                <ActionRow.Spacer />
                <Button iconBefore={Add} onClick={addKeypoint}>
                  Add Key Term
                </Button>
              </ActionRow>

              {keypoints.length === 0 && (
                <p className="keypoints-studio-empty">
                  No key terms added yet. Click &quot;Add Key Term&quot; to get
                  started.
                </p>
              )}

              {keypoints.map((kp, idx) => (
                <div className="keypoint-entry" key={`keypoint-${idx}`}>
                  <ActionRow className="keypoints-studio-entry-header">
                    <span className="keypoints-studio-entry-title">
                      Term {idx + 1}
                    </span>
                    <ActionRow.Spacer />
                    <Button
                      size="sm"
                      variant="outline-danger"
                      iconBefore={DeleteOutline}
                      onClick={() => removeKeypoint(idx)}
                    >
                      Remove
                    </Button>
                  </ActionRow>
                  <Form.Group className="keypoints-studio-field">
                    <Form.Label>Label</Form.Label>
                    <Form.Control
                      value={kp.keypoint}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        updateKeypoint(idx, { keypoint: e.target.value })
                      }
                      placeholder="e.g. Fluid balance"
                    />
                  </Form.Group>
                  <Form.Group className="keypoints-studio-field keypoints-studio-field--last">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={kp.description}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                        updateKeypoint(idx, { description: e.target.value })
                      }
                      placeholder="e.g. The regulation of fluids within the body..."
                    />
                  </Form.Group>
                </div>
              ))}

              {/* Summary */}
              <Form.Group className="mt-3">
                <Form.Label className="h3">Summary</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  value={summary}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setSummary(e.target.value)
                  }
                  placeholder="e.g. These concepts form a connected sequence..."
                />
              </Form.Group>

              {/* Action Button Section */}
              <div>
                <h4 className="keypoints-studio-section-title">
                  Action Button
                </h4>
                <Form.Group className="keypoints-studio-field">
                  <Form.Label>Button Text</Form.Label>
                  <Form.Control
                    value={buttonText}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setButtonText(e.target.value)
                    }
                    placeholder="e.g. Glossary"
                  />
                </Form.Group>
                <Form.Group className="keypoints-studio-field">
                  <Form.Label>Button Link</Form.Label>
                  <Form.Control
                    value={buttonLink}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setButtonLink(e.target.value)
                    }
                    placeholder="e.g. https://example.com/glossary"
                  />
                </Form.Group>
              </div>
            </TabPane>

            <TabPane eventKey="settings">
              <Form.Group className="keypoints-studio-field">
                <Form.Label>Background Color</Form.Label>
                <ColorPicker
                  color={backgroundColor}
                  setColor={setBackgroundColor}
                />
              </Form.Group>
            </TabPane>

            {enableJsonEditing && (
              <TabPane eventKey="json">
                <JsonImporter
                  liveData={{
                    header,
                    keypoints,
                    summary,
                    button_text: buttonText,
                    button_link: buttonLink,
                    background_color: backgroundColor,
                  }}
                />
              </TabPane>
            )}
          </TabContent>
        </ModalDialog.Body>

        <ModalDialog.Footer className="border-top" style={{ zIndex: '3' }}>
          <Stack direction="horizontal" gap={4}>
            <Button
              variant="tertiary"
              onClick={() => runtime.notify('cancel', {})}
            >
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Save
            </Button>
          </Stack>
        </ModalDialog.Footer>
      </div>
    </TabContainer>
  );
}
