import type { ReactNode } from "react";
import { useSortable } from "@dnd-kit/react/sortable";

export type DragHandleRef = (element: Element | null) => void;

export interface SortableResourceProps {
  id: string;
  index: number;
  disabled?: boolean;
  children: (dragHandleRef: DragHandleRef) => ReactNode;
}

/**
 * Makes a resource draggable to reorder the list. Only the drag handle starts a drag,
 * so the other actions of the card can still be clicked.
 */
export const SortableResource = ({ id, index, disabled = false, children }: SortableResourceProps) => {
  const { ref, handleRef } = useSortable({ id, index, disabled });

  return <div ref={ref}>{children(handleRef)}</div>;
};
