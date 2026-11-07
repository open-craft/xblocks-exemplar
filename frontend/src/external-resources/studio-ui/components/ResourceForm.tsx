import { useState, type ChangeEvent } from 'react';
import type { Resource } from '@/external-resources/apiTypes';
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

// Same rules as the backend: an absolute http(s) URL.
const isValidUrl = (value: string): boolean => {
  try {
    const url = new URL(value.trim());
    return ['http:', 'https:'].includes(url.protocol) && url.host !== '';
  } catch {
    return false;
  }
};

const MAX_MINUTES_FIELD = 59;

type ResourceErrors = Partial<
  Record<'url' | 'title' | 'publisher' | 'expectedMinutes', string>
>;

const validateResource = (resource: Resource): ResourceErrors => {
  const errors: ResourceErrors = {};
  if (!resource.url.trim()) {
    errors.url = 'Add the resource URL.';
  } else if (!isValidUrl(resource.url)) {
    errors.url = 'Enter a full URL starting with http:// or https://.';
  }
  if (!resource.title.trim()) {
    errors.title = 'Add a title.';
  }
  if (!resource.publisher.trim()) {
    errors.publisher = 'Add a publisher.';
  }
  if (resource.expectedMinutes < 1) {
    errors.expectedMinutes = 'The estimated time must be at least 1 minute.';
  }
  return errors;
};

export interface ResourceFormProps {
  initialResource: Resource;
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
  const [resource, setResource] = useState(initialResource);
  // Errors are shown after the first save attempt, and then update as the author types.
  const [showErrors, setShowErrors] = useState(false);
  const errors = showErrors ? validateResource(resource) : {};
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
  const iconName = resource.thumbnailIcon || FILE_TYPE_ICONS[resource.fileType];

  const setTime = (h: string, m: string) => {
    setHours(h);
    setMinutes(m);
    setResource({
      ...resource,
      expectedMinutes: (Number(h) || 0) * 60 + (Number(m) || 0),
    });
  };

  // Keeps digits only, and at most `max`.
  const toTimeValue = (value: string, max?: number): string => {
    const digits = value.replace(/\D/g, '');
    if (!digits) {
      return '';
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
    <Card>
      <Card.Body>
        <Card.Section>
          <div className="d-flex w-100 justify-content-between">
            <span className="h5 text-primary-500">
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
                inputMode="numeric"
                placeholder="0"
                value={hours}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setTime(toTimeValue(e.target.value), minutes);
                }}
              />
              <small>hr</small>
              <Form.Control
                className="estimated-time-input"
                inputMode="numeric"
                placeholder="0"
                value={minutes}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  // The minutes field goes up to 59; more time goes in the hours field.
                  setTime(
                    hours,
                    toTimeValue(e.target.value, MAX_MINUTES_FIELD),
                  );
                }}
              />
              <small>min</small>
            </Stack>
            {errors.expectedMinutes && (
              <Form.Control.Feedback type="invalid">
                {errors.expectedMinutes}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <Form.Group>
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
