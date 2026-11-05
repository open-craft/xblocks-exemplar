import type { ReactElement } from "react";
import { Card, Stack } from "@openedx/paragon";

import { FileType, type Resource } from "@/external-resources/apiTypes";
import { IconThumbnail } from "./IconThumbnail";
import { FILE_TYPE_ICONS, FILE_TYPE_LABELS } from "./fileTypes";

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
        ) : ( <IconThumbnail iconName={iconName} /> )
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
