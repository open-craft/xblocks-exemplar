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

export const ResourceCard = ({ resource }: { resource: Resource }) => {
  const fileType = resource.fileType === FileType.CUSTOM
                    ? resource.customFileType ?? ''
                    : FILE_TYPE_LABELS[resource.fileType];

  return (
    <Card orientation="horizontal">
      <Card.ImageCap
        src={resource.thumbnailUrl}
        srcAlt={resource.thumbnailAltText}
      />
      <Card.Body>
        <Card.Section>
          <Stack direction="horizontal" gap={1} className="text-uppercase">
            <small>{fileType}</small>
            <small>·</small>
            <small>{resource.expectedMinutes} min</small>
          </Stack>
          <span>{resource.title}</span>
          <small>{resource.publisher}</small>
        </Card.Section>
      </Card.Body>
    </Card>
  );
};
