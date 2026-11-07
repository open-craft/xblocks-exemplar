import { Image } from '@openedx/paragon';

export interface ResourceThumbnailProps {
  variant: 'image' | 'icon';
  item: string;
  itemAlt?: string;
}

export const ResourceThumbnail = ({
  item,
  itemAlt,
  variant,
}: ResourceThumbnailProps) => (
  <div className="external-resource-thumbnail">
    {variant === 'icon' ? (
      <div className="external-resource-icon-container">
        <div className="external-resource-icon rounded d-flex align-items-center justify-content-center">
          <span className="material-icons-outlined" aria-hidden="true">
            {item}
          </span>
        </div>
      </div>
    ) : (
      <Image
        className="external-resource-image"
        src={item}
        alt={itemAlt}
        rounded
      />
    )}
  </div>
);
