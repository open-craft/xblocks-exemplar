import type { ReactElement } from "react";
import { Card, Stack } from "@openedx/paragon";

import { FileType, type Resource } from "@/external-resources/apiTypes";

export const FILE_TYPE_LABELS: Record<Exclude<FileType, FileType.CUSTOM>, string> = {
  [FileType.ARTICLE]: 'Articles',
  [FileType.VIDEO]: 'Video',
  [FileType.PDF]: 'PDF',
  [FileType.TEXTBOOK]: 'Textbook / Book',
  [FileType.VIRTUAL_MACHINE]: 'Virtual machines',
  [FileType.INTERACTIVE_ACTIVITY]: 'Interactive activities',
  [FileType.WGU_LIBRARY]: 'WGU Library',
};

export const FILE_TYPE_ICONS: Record<FileType, string> = {
  [FileType.ARTICLE]: 'article',
  [FileType.VIDEO]: 'smart_display',
  [FileType.PDF]: 'picture_as_pdf',
  [FileType.TEXTBOOK]: 'menu_book',
  [FileType.VIRTUAL_MACHINE]: 'laptop',
  [FileType.INTERACTIVE_ACTIVITY]: 'touch_app',
  [FileType.WGU_LIBRARY]: 'local_library',
  [FileType.CUSTOM]: 'description',
};

export interface ResourceCardProps {
  resource: Resource;
  isClickable?: boolean;
  actions?: ReactElement;
  className?: string;
}

export const ResourceCard = ({
  resource,
  isClickable = false,
  actions,
  className,
}: ResourceCardProps) => {
  const fileType = resource.fileType === FileType.CUSTOM
                    ? resource.customFileType ?? ''
                    : FILE_TYPE_LABELS[resource.fileType];
  const iconName = resource.thumbnailIcon || FILE_TYPE_ICONS[resource.fileType];

  return (
    <Card
      orientation="horizontal"
      className={`external-resource-card ${isClickable ? "is-clickable" : ""} ${className ?? ''}`}
      onClick={() => isClickable ?  window.open(resource.url, '_blank', 'noopener,noreferrer') : null}
    >
      {resource.thumbnailUrl ?
        (
          <Card.ImageCap
            src={resource.thumbnailUrl}
            srcAlt={resource.thumbnailAltText}
          />
        ) :
        (
          <Card.Section className="card-icon-section">
            <div className="card-icon rounded h-100 d-flex align-items-center justify-content-center">
              <span className="material-icons-outlined" aria-hidden="true">
                {iconName}
              </span>
            </div>
          </Card.Section>
        )
      }
      <Card.Body>
        <Card.Section>
          <Stack direction="horizontal" gap={1} className="card-type text-uppercase">
            <span>{fileType}</span>
            <span>·</span>
            <span>{resource.expectedMinutes} min</span>
          </Stack>
          <Stack>
            <span className="card-title">{resource.title}</span>
            <span className="card-publisher">{resource.publisher}</span>
          </Stack>
        </Card.Section>
      </Card.Body>
      {actions && (
        <Card.Footer className='d-flex align-items-start justify-content-end'>
          {/* Clicks on the actions must not reach the card, which opens the resource. */}
          <div onClick={(e) => e.stopPropagation()}>
            {actions}
          </div>
        </Card.Footer>
      )}
    </Card>
  );
};
