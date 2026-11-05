import { useEffect, useId, useRef, useState, type ChangeEvent, type KeyboardEvent } from "react";
import { Button, Form, Nav, TabContainer, TabContent, TabPane } from "@openedx/paragon";
import IconPicker from "@/shared/components/IconPicker";
import { URLFilePickerWrapper } from "@/shared/components/URLFilePickerWrapper";
import type { XBlockConfig } from "@/types";
import { FileType } from "@/external-resources/apiTypes";
import { FILE_TYPE_ICONS } from "@/external-resources/common/fileTypes";

type ThumbnailTab = "icon" | "image";

// Icons shown before searching: one per predefined content type,
// followed by other icons common in learning resources.
const DEFAULT_ICONS = [
  ...Object.entries(FILE_TYPE_ICONS)
    .filter(([fileType]) => fileType !== FileType.CUSTOM)
    .map(([, icon]) => icon),
  "description",
  "link",
  "school",
  "slideshow",
  "headphones",
  "podcasts",
  "quiz",
  "assignment",
  "science",
  "code",
  "lightbulb",
];

export interface ThumbnailSelectProps {
  /** Icon chosen by the author, if any. */
  thumbnailIcon?: string;
  onIconChange: (icon?: string) => void;
  /** URL of the image chosen by the author, if any. */
  thumbnailUrl?: string;
  onImageChange: (url?: string) => void;
}

/**
 * "Choose thumbnail" button that opens a popover with the Icon and Image tabs.
 */
export const ThumbnailSelect = ({
  thumbnailIcon,
  onIconChange,
  thumbnailUrl,
  onImageChange,
}: ThumbnailSelectProps) => {
  const popoverId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<ThumbnailTab>("icon");

  const closeTimeout = useRef<number>();

  const close = () => setIsOpen(false);

  // Focus moving outside the component (click elsewhere or Tab) closes the popover.
  // The close waits for the next focus event: if the focus lands in the component
  // again, it's cancelled. React events bubble through portals, so this also keeps the
  // popover open while the file picker modal (rendered in document.body) has the focus.
  const handleBlur = () => {
    closeTimeout.current = window.setTimeout(close, 0);
  };

  const handleFocus = () => {
    window.clearTimeout(closeTimeout.current);
  };

  useEffect(() => () => window.clearTimeout(closeTimeout.current), []);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    // Escape inside the file picker modal only closes the modal.
    if (!e.currentTarget.contains(e.target as Node)) {
      return;
    }
    if (e.key === "Escape" && isOpen) {
      e.preventDefault();
      close();
      buttonRef.current?.focus();
    }
  };

  return (
    <div
      className="thumbnail-select"
      onBlur={handleBlur}
      onFocus={handleFocus}
      onKeyDown={handleKeyDown}
    >
      <Button
        ref={buttonRef}
        variant="tertiary"
        aria-expanded={isOpen}
        aria-controls={popoverId}
        onClick={() => setIsOpen(!isOpen)}
      >
        Choose thumbnail
      </Button>
      {isOpen && (
        <div
          id={popoverId}
          className="thumbnail-select-popover"
          role="dialog"
          aria-label="Choose thumbnail"
          tabIndex={-1}
        >
          {/*
            Built from TabContainer + Nav instead of Paragon's Tabs: Tabs measures the tab widths
            to move the ones that don't fit into a "More..." menu, and with full-width tabs it
            decides none fit.
          */}
          <TabContainer
            id={`${popoverId}-tabs`}
            activeKey={activeTab}
            onSelect={(key: string | null) => setActiveTab((key as ThumbnailTab) ?? "icon")}
          >
            <Nav variant="tabs" fill>
              <Nav.Item>
                <Nav.Link eventKey="icon">Icon</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="image">Image</Nav.Link>
              </Nav.Item>
            </Nav>
            <TabContent>
              <TabPane eventKey="icon">
                <IconPicker
                  autoFocus
                  defaultIcons={DEFAULT_ICONS}
                  selectedIcon={thumbnailIcon}
                  onSelect={(icon) => {
                    onImageChange(undefined);
                    onIconChange(icon);
                    close();
                    buttonRef.current?.focus();
                  }}
                />
              </TabPane>
              <TabPane eventKey="image">
                <Form.Group className="thumbnail-select-image">
                  <Form.Label>Image URL</Form.Label>
                  {/* The "Select File" button only shows when the file picker is enabled. */}
                  <URLFilePickerWrapper<XBlockConfig>
                    setValue={async (url) => onImageChange(url)}
                    fileTypes={["image"]}
                  >
                    <Form.Control
                      value={thumbnailUrl ?? ""}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => onImageChange(e.target.value)}
                    />
                  </URLFilePickerWrapper>
                </Form.Group>
              </TabPane>
            </TabContent>
          </TabContainer>
        </div>
      )}
    </div>
  );
};
