import { ActionRow, AlertModal, Button } from "@openedx/paragon";
import type { Resource } from "@/external-resources/apiTypes";

export interface DeleteResourceModalProps {
  resource?: Resource;
  onConfirm: (resource: Resource) => void;
  onClose: () => void;
}

/**
 * Asks the author to confirm before deleting a resource.
 */
export const DeleteResourceModal = ({
  resource,
  onConfirm,
  onClose,
}: DeleteResourceModalProps) => (
  <AlertModal
    title="Delete resource?"
    isOpen={resource !== undefined}
    onClose={onClose}
    footerNode={(
      <ActionRow>
        <Button variant="tertiary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={() => resource && onConfirm(resource)}>
          Delete resource
        </Button>
      </ActionRow>
    )}
  >
    <p>
      “{resource?.title}” will be permanently deleted. This action cannot be undone.
    </p>
  </AlertModal>
);
