export const IconThumbnail = ({ iconName }: { iconName: string }) => (
  <div className="external-resource-icon-container">
    <div className="external-resource-icon rounded d-flex align-items-center justify-content-center">
      <span className="material-icons-outlined" aria-hidden="true">
        {iconName}
      </span>
    </div>
  </div>
);
