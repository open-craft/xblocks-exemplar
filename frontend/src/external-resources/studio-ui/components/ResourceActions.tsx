import { ActionRow, IconButton } from "@openedx/paragon";
import { DeleteOutline, DragIndicator, EditOutline } from "@openedx/paragon/icons";
import type { DragHandleRef } from "./SortableResource";

export interface ResourceActionsProps {
  onDelete: () => void;
  onEdit: () => void;
  disableEdit: boolean;
  dragHandleRef?: DragHandleRef;
}

export const ResourceActions = ({
  onDelete,
  onEdit,
  disableEdit,
  dragHandleRef,
}: ResourceActionsProps) => {
  return (
    <ActionRow>
      <IconButton
        src={EditOutline}
        alt="Edit"
        onClick={onEdit}
        disabled={disableEdit}
      />
      <IconButton
        src={DeleteOutline}
        alt="Delete"
        onClick={onDelete}
      />
      {dragHandleRef && (
        <IconButton
          ref={dragHandleRef}
          src={DragIndicator}
          alt="Drag to reorder"
        />
      )}
    </ActionRow>
  );
};
