import { useState, type ChangeEvent } from "react";
import { FileType, type Resource } from "@/external-resources/apiTypes";
import { ActionRow, Button, Container, Form, IconButton, Image, Stack } from "@openedx/paragon";
import { DeleteOutline } from "@openedx/paragon/icons";
import { ContentTypeSelect } from "./ContentTypeSelect";
import { ThumbnailSelect } from "./ThumbnailSelect";
import { IconThumbnail } from "@/external-resources/common/IconThumbnail";
import { FILE_TYPE_ICONS } from "@/external-resources/common/fileTypes";

const generateId = (): string =>
  `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;

export const createEmptyResource = (): Resource => ({
  id: generateId(),
  url: "",
  title: "",
  publisher: "",
  expectedMinutes: 0,
  fileType: FileType.ARTICLE,
});

// Same rules as the backend: an absolute http(s) URL.
const isValidUrl = (value: string): boolean => {
  try {
    const url = new URL(value.trim());
    return ["http:", "https:"].includes(url.protocol) && url.host !== "";
  } catch {
    return false;
  }
};

const MAX_MINUTES_FIELD = 59;

type ResourceErrors = Partial<Record<"url" | "title" | "publisher" | "expectedMinutes", string>>;

const validateResource = (resource: Resource): ResourceErrors => {
  const errors: ResourceErrors = {};
  if (!resource.url.trim()) {
    errors.url = "Add the resource URL.";
  } else if (!isValidUrl(resource.url)) {
    errors.url = "Enter a full URL starting with http:// or https://.";
  }
  if (!resource.title.trim()) {
    errors.title = "Add a title.";
  }
  if (!resource.publisher.trim()) {
    errors.publisher = "Add a publisher.";
  }
  if (resource.expectedMinutes < 1) {
    errors.expectedMinutes = "The estimated time must be at least 1 minute.";
  }
  return errors;
};

export interface ResourceFormProps {
  initialResource: Resource;
  isNewResource: boolean;
  onCancel: () => void;
  onSave: (resource: Resource) => void;
}

export const ResourceForm = ({
  initialResource,
  isNewResource = false,
  onCancel,
  onSave,
}: ResourceFormProps) => {
  const [resource, setResource] = useState(initialResource);
  // Errors are shown after the first save attempt, and then update as the author types.
  const [showErrors, setShowErrors] = useState(false);
  const errors = showErrors ? validateResource(resource) : {};
  // The time fields keep the text as typed, so they can be empty while editing.
  // Empty counts as 0.
  const [hours, setHours] = useState(() => {
    const h = Math.floor(initialResource.expectedMinutes / 60);
    return h ? String(h) : "";
  });
  const [minutes, setMinutes] = useState(() => {
    const m = initialResource.expectedMinutes % 60;
    return m ? String(m) : "";
  });
  const iconName = resource.thumbnailIcon || FILE_TYPE_ICONS[resource.fileType];

  const setTime = (h: string, m: string) => {
    setHours(h);
    setMinutes(m);
    setResource({ ...resource, expectedMinutes: (Number(h) || 0) * 60 + (Number(m) || 0) });
  };

  // Keeps digits only, and at most `max`.
  const toTimeValue = (value: string, max?: number): string => {
    const digits = value.replace(/\D/g, "");
    if (!digits) {
      return "";
    }
    const n = Number(digits);
    return String(max === undefined ? n : Math.min(n, max));
  };

  const handleSave = () => {
    if (Object.keys(validateResource(resource)).length > 0) {
      setShowErrors(true);
      return;
    }
    onSave(resource);
  };

  return (
    <Container>
      <div className="d-flex w-100 justify-content-between">
        <span className="h3 text-primary-500">Add resource1</span>
        {!isNewResource && (
          <IconButton
            variant="primary"
            src={DeleteOutline}
            alt={isNewResource ? "Cancel" : "Delete"}
            onClick={onCancel}
          />
        )}
      </div>
      
      <Form.Group isInvalid={!!errors.url}>
        <Form.Label>
          <Stack>
            <span className="text-primary-500">Resource link</span>
            <small>Add the resource URL</small>
          </Stack>
        </Form.Label>
        <Form.Control
          value={resource.url}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setResource({ ...resource, url: e.target.value })
          }}
        />
        {errors.url && <Form.Control.Feedback type="invalid">{errors.url}</Form.Control.Feedback>}
      </Form.Group>
      <Form.Group isInvalid={!!errors.title}>
        <Form.Label>
          <span className="text-primary-500">Title</span>
        </Form.Label>
        <Form.Control
          value={resource.title}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setResource({ ...resource, title: e.target.value })
          }}
        />
        {errors.title && <Form.Control.Feedback type="invalid">{errors.title}</Form.Control.Feedback>}
      </Form.Group>
      <Form.Group isInvalid={!!errors.publisher}>
        <Form.Label>
          <span className="text-primary-500">Publisher</span>
        </Form.Label>
        <Form.Control
          value={resource.publisher}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setResource({ ...resource, publisher: e.target.value })
          }}
        />
        {errors.publisher && (
          <Form.Control.Feedback type="invalid">{errors.publisher}</Form.Control.Feedback>
        )}
      </Form.Group>
      <Form.Group isInvalid={!!errors.expectedMinutes}>
        <Form.Label>
          <span className="text-primary-500">Estimated time</span>
        </Form.Label>
        <Stack direction="horizontal">
          <Form.Control
            type="number"
            min={0}
            placeholder="0"
            value={hours}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setTime(toTimeValue(e.target.value), minutes)
            }}
          />
          <small>hr</small>
          <Form.Control
            type="number"
            min={0}
            max={MAX_MINUTES_FIELD}
            placeholder="0"
            value={minutes}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              // The minutes field goes up to 59; more time goes in the hours field.
              setTime(hours, toTimeValue(e.target.value, MAX_MINUTES_FIELD))
            }}
          />
          <small>min</small>
        </Stack>
        {errors.expectedMinutes && (
          <Form.Control.Feedback type="invalid">{errors.expectedMinutes}</Form.Control.Feedback>
        )}
      </Form.Group>
      <Form.Group>
        <Form.Label>
          <span className="text-primary-500">Content type</span>
        </Form.Label>
        <ContentTypeSelect
          fileType={resource.fileType}
          customFileType={resource.customFileType ?? ""}
          onChange={(fileType, customFileType) =>
            setResource({ ...resource, fileType, customFileType })
          }
        />
      </Form.Group>
      <Stack gap={2} direction="horizontal">
        {resource.thumbnailUrl ? (
          <Image
            src={resource.thumbnailUrl}
            alt=""
            rounded
          />
        ) : (
          <IconThumbnail iconName={iconName} />
        )}
        <ThumbnailSelect
          thumbnailIcon={resource.thumbnailIcon}
          onIconChange={(thumbnailIcon) =>
            setResource((current) => ({ ...current, thumbnailIcon }))
          }
          thumbnailUrl={resource.thumbnailUrl}
          onImageChange={(thumbnailUrl) =>
            setResource((current) => ({ ...current, thumbnailUrl }))
          }
        />
      </Stack>
      <ActionRow>
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
        <Button variant="tertiary" onClick={() => onCancel()}>
          Cancel
        </Button>
        <ActionRow.Spacer />
      </ActionRow>
    </Container>
  )
};
