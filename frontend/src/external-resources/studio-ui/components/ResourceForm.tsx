import { useState, type ChangeEvent, type FormEvent } from 'react';
import { FileType, type Resource } from '@/external-resources/apiTypes';
import {
  ActionRow,
  Button,
  Card,
  Form,
  IconButton,
  Stack,
} from '@openedx/paragon';
import { DeleteOutline } from '@openedx/paragon/icons';
import { ContentTypeSelect } from './ContentTypeSelect';
import { ThumbnailSelect } from './ThumbnailSelect';
import { FILE_TYPE_ICONS } from '@/external-resources/common/fileTypes';
import { ResourceThumbnail } from '@/external-resources/common/ResourceThumbnail';
import type { ResourceDraft } from '../resourceDraft';

// Same rules as the backend: an absolute http(s) URL.
const isValidUrl = (value: string): boolean => {
  try {
    const url = new URL(value.trim());
    return ['http:', 'https:'].includes(url.protocol) && url.host !== '';
  } catch {
    return false;
  }
};

// Only limits the arrow keys: more minutes can be typed, and they count as hours.
const MAX_MINUTES_FIELD = 59;

// The text of a time field: empty (counts as 0) or a whole number.
const isWholeNumber = (value: string): boolean => /^\d*$/.test(value);

type ResourceErrors = Partial<
  Record<'url' | 'title' | 'publisher' | 'expectedMinutes' | 'fileType', string>
>;

const VALIDATION_ERRORS = {
  urlEmpty: 'Add the resource URL.',
  urlInvalid: 'Enter a full URL starting with http:// or https://.',
  titleEmpty: 'Add a title.',
  publisherEmpty: 'Add a publisher.',
  timeTooShort: 'The estimated time must be at least 1 minute.',
  timeNotWholeNumber: 'Enter the estimated time in whole hours and minutes.',
  typeEmpty: 'Choose a content type.',
} as const;

const validateResource = (
  resource: ResourceDraft,
  isTimeValid: boolean,
): ResourceErrors => {
  const errors: ResourceErrors = {};
  if (!resource.url.trim()) {
    errors.url = VALIDATION_ERRORS.urlEmpty;
  } else if (!isValidUrl(resource.url)) {
    errors.url = VALIDATION_ERRORS.urlInvalid;
  }
  if (!resource.title.trim()) {
    errors.title = VALIDATION_ERRORS.titleEmpty;
  }
  if (!resource.publisher.trim()) {
    errors.publisher = VALIDATION_ERRORS.publisherEmpty;
  }
  if (!isTimeValid) {
    errors.expectedMinutes = VALIDATION_ERRORS.timeNotWholeNumber;
  } else if (resource.expectedMinutes < 1) {
    errors.expectedMinutes = VALIDATION_ERRORS.timeTooShort;
  }
  if (!resource.fileType) {
    errors.fileType = VALIDATION_ERRORS.typeEmpty;
  }
  return errors;
};

export interface ResourceFormProps {
  initialResource: ResourceDraft;
  isNewResource?: boolean;
  onCancel: () => void;
  onSave: (resource: Resource) => void;
  onDelete?: () => void;
}

export const ResourceForm = ({
  initialResource,
  isNewResource = false,
  onCancel,
  onSave,
  onDelete,
}: ResourceFormProps) => {
  const [resource, setResource] = useState<ResourceDraft>(initialResource);
  // Errors are shown after the first save attempt, and then update as the author types.
  const [showErrors, setShowErrors] = useState(false);
  // The time fields keep the text as typed, so they can be empty while editing.
  // Empty counts as 0.
  const [hours, setHours] = useState(() => {
    const h = Math.floor(initialResource.expectedMinutes / 60);
    return h ? String(h) : '';
  });
  const [minutes, setMinutes] = useState(() => {
    const m = initialResource.expectedMinutes % 60;
    return m ? String(m) : '';
  });
  // A number field gives an empty value when its text isn't a number (eg. "1e" or "-"),
  // so the browser's `badInput` flag is the only way to tell it apart from an empty field.
  const [badInput, setBadInput] = useState({ hours: false, minutes: false });
  const isTimeValid =
    !badInput.hours &&
    !badInput.minutes &&
    isWholeNumber(hours) &&
    isWholeNumber(minutes);
  const errors = showErrors ? validateResource(resource, isTimeValid) : {};
  // Without a content type yet, the preview shows the generic icon.
  const iconName =
    resource.thumbnailIcon ||
    FILE_TYPE_ICONS[resource.fileType ?? FileType.CUSTOM];

  const setTime = (h: string, m: string) => {
    setHours(h);
    setMinutes(m);
    setResource({
      ...resource,
      expectedMinutes: (Number(h) || 0) * 60 + (Number(m) || 0),
    });
  };

  // `input` fires on every keystroke, even when the value stays empty (eg. typing "-"
  // in an empty field), so the flag is always up to date. React's onChange doesn't.
  const updateBadInput =
    (field: 'hours' | 'minutes') => (e: FormEvent<HTMLInputElement>) => {
      const isBad = e.currentTarget.validity.badInput;
      setBadInput((current) =>
        current[field] === isBad ? current : { ...current, [field]: isBad },
      );
    };

  const handleSave = () => {
    const { fileType } = resource;
    if (
      Object.keys(validateResource(resource, isTimeValid)).length > 0 ||
      !fileType
    ) {
      setShowErrors(true);
      return;
    }
    onSave({ ...resource, fileType });
  };

  return (
    <Card>
      <Card.Body>
        <Card.Section>
          <div className="d-flex w-100 justify-content-between">
            <span className="h4 text-primary-500">
              {isNewResource ? 'Add resource' : 'Edit resource'}
            </span>
            {!isNewResource && (
              <IconButton
                variant="primary"
                src={DeleteOutline}
                alt={'Delete'}
                onClick={onDelete}
              />
            )}
          </div>
          <hr />
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
                setResource({ ...resource, url: e.target.value });
              }}
            />
            {errors.url && (
              <Form.Control.Feedback type="invalid">
                {errors.url}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <Form.Group isInvalid={!!errors.title}>
            <Form.Label>
              <span className="text-primary-500">Title</span>
            </Form.Label>
            <Form.Control
              value={resource.title}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setResource({ ...resource, title: e.target.value });
              }}
            />
            {errors.title && (
              <Form.Control.Feedback type="invalid">
                {errors.title}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <Form.Group isInvalid={!!errors.publisher}>
            <Form.Label>
              <span className="text-primary-500">Publisher</span>
            </Form.Label>
            <Form.Control
              value={resource.publisher}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setResource({ ...resource, publisher: e.target.value });
              }}
            />
            {errors.publisher && (
              <Form.Control.Feedback type="invalid">
                {errors.publisher}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <Form.Group isInvalid={!!errors.expectedMinutes}>
            <Form.Label>
              <span className="text-primary-500">Estimated time</span>
            </Form.Label>
            <Stack direction="horizontal" gap={2}>
              <Form.Control
                className="estimated-time-input"
                type="number"
                min={0}
                step={1}
                placeholder="0"
                value={hours}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setTime(e.target.value, minutes);
                }}
                onInput={updateBadInput('hours')}
              />
              <small>hr</small>
              <Form.Control
                className="estimated-time-input"
                type="number"
                min={0}
                max={MAX_MINUTES_FIELD}
                step={1}
                placeholder="0"
                value={minutes}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setTime(hours, e.target.value);
                }}
                onInput={updateBadInput('minutes')}
              />
              <small>min</small>
            </Stack>
            {errors.expectedMinutes && (
              <Form.Control.Feedback type="invalid">
                {errors.expectedMinutes}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <Form.Group isInvalid={!!errors.fileType}>
            <Form.Label>
              <span className="text-primary-500">Content type</span>
            </Form.Label>
            <ContentTypeSelect
              fileType={resource.fileType}
              customFileType={resource.customFileType ?? ''}
              onChange={(fileType, customFileType) =>
                setResource({ ...resource, fileType, customFileType })
              }
            />
            {errors.fileType && (
              <Form.Control.Feedback type="invalid">
                {errors.fileType}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <Stack gap={3} direction="horizontal">
            <ResourceThumbnail
              variant={resource.thumbnailUrl ? 'image' : 'icon'}
              item={resource.thumbnailUrl || iconName}
              itemAlt={resource.thumbnailAltText}
            />
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
        </Card.Section>
      </Card.Body>
      <Card.Footer>
        <ActionRow className="border-top pt-3">
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
          <Button variant="tertiary" onClick={() => onCancel()}>
            Cancel
          </Button>
          <ActionRow.Spacer />
        </ActionRow>
      </Card.Footer>
    </Card>
  );
};
