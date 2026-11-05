import { useId, useRef, useState, type FocusEvent, type KeyboardEvent } from "react";
import { Form, Icon, IconButton } from "@openedx/paragon";
import { Add, KeyboardArrowDown, KeyboardArrowUp } from "@openedx/paragon/icons";
import { FileType } from "@/external-resources/apiTypes";
import { FILE_TYPE_LABELS } from "../../common/fileTypes";

// [fileType, label] pairs for the predefined types, in display order.
const FILE_TYPE_OPTIONS = Object.entries(FILE_TYPE_LABELS) as [FileType, string][];

const findFileType = (text: string): FileType | undefined =>
  FILE_TYPE_OPTIONS.find(([, label]) => label.toLowerCase() === text.toLowerCase())?.[0];

type MenuItem =
  | { kind: "option"; fileType: FileType; label: string }
  | { kind: "create"; label: string };

export interface ContentTypeSelectProps {
  fileType: FileType;
  customFileType: string;
  onChange: (fileType: FileType, customFileType: string) => void;
}

/**
 * Combobox to pick a predefined content type or create a custom one.
 *
 */
export const ContentTypeSelect = ({
  fileType,
  customFileType,
  onChange,
}: ContentTypeSelectProps) => {
  const listId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  // Text the author is typing. null when not typing, so the current value is shown.
  const [draft, setDraft] = useState<string | null>(null);
  // Highlighted menu item, -1 for none.
  const [activeIndex, setActiveIndex] = useState(-1);

  const currentLabel = fileType === FileType.CUSTOM ? customFileType : FILE_TYPE_LABELS[fileType];
  const query = (draft ?? "").trim();

  const items: MenuItem[] = FILE_TYPE_OPTIONS
    .filter(([, label]) => label.toLowerCase().includes(query.toLowerCase()))
    .map(([optionFileType, label]) => ({ kind: "option", fileType: optionFileType, label }));

  if (query && items.length === 0) {
    items.push({ kind: "create", label: query });
  }

  const close = () => {
    setIsOpen(false);
    setDraft(null);
    setActiveIndex(-1);
  };

  const open = () => {
    setIsOpen(true);
    setActiveIndex(-1);
  };

  const select = (item: MenuItem) => {
    if (item.kind === "option") {
      onChange(item.fileType, "");
    } else {
      onChange(FileType.CUSTOM, item.label);
    }
    close();
  };

  // Keeps what the author typed: the matching type, or a custom type otherwise.
  // Empty text is discarded, so the previous value stays.
  const commitDraft = () => {
    if (query) {
      const matchingFileType = findFileType(query);
      if (matchingFileType) {
        onChange(matchingFileType, "");
      } else {
        onChange(FileType.CUSTOM, query);
      }
    }
    close();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        if (!isOpen) {
          open();
        }
        setActiveIndex((index) => Math.min(index + 1, items.length - 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        setActiveIndex((index) => Math.max(index - 1, -1));
        break;
      case "Enter":
        e.preventDefault();
        if (isOpen && activeIndex >= 0 && items[activeIndex]) {
          select(items[activeIndex]);
        } else {
          commitDraft();
        }
        break;
      case "Escape":
        if (isOpen) {
          e.preventDefault();
          close();
        }
        break;
      default:
        break;
    }
  };

  // Focus moving outside the component (click elsewhere or Tab) keeps the typed text.
  const handleBlur = (e: FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
      commitDraft();
    }
  };

  const toggle = () => {
    if (isOpen) {
      close();
    } else {
      open();
    }
    inputRef.current?.focus();
  };

  const itemId = (index: number) => `${listId}-item-${index}`;

  return (
    <div className="content-type-select" onBlur={handleBlur}>
      <Form.Control
        ref={inputRef}
        role="combobox"
        aria-expanded={isOpen}
        aria-controls={listId}
        aria-autocomplete="list"
        aria-activedescendant={isOpen && activeIndex >= 0 ? itemId(activeIndex) : undefined}
        autoComplete="off"
        placeholder="Select or add type"
        value={draft ?? currentLabel}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setDraft(e.target.value);
          setIsOpen(true);
          setActiveIndex(-1);
        }}
        onClick={() => !isOpen && open()}
        onKeyDown={handleKeyDown}
        trailingElement={(
          <IconButton
            src={isOpen ? KeyboardArrowUp : KeyboardArrowDown}
            iconAs={Icon}
            size="sm"
            variant="secondary"
            alt={isOpen ? "Close content types" : "Open content types"}
            tabIndex={-1}
            // Keep the focus in the input, so the click doesn't count as leaving.
            onMouseDown={(e: React.MouseEvent) => e.preventDefault()}
            onClick={toggle}
          />
        )}
      />
      {isOpen && items.length > 0 && (
        <ul
          id={listId}
          role="listbox"
          className="content-type-select-menu"
          // Keep the focus in the input while clicking an item.
          onMouseDown={(e) => e.preventDefault()}
        >
          {items.map((item, index) => (
            <li
              key={item.kind === "option" ? item.fileType : "create"}
              id={itemId(index)}
              role="option"
              aria-selected={index === activeIndex}
              className={`content-type-select-item ${index === activeIndex ? "is-active" : ""}`}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => select(item)}
            >
              {item.kind === "create" ? (
                <>
                  <Icon src={Add} size="sm" className="mr-2" />
                  Create "<strong>{item.label}</strong>"
                </>
              ) : item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
