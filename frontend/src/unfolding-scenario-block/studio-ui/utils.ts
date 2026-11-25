import type { Option, Scenario } from '../apiTypes';
import { arrayMove } from '@dnd-kit/helpers';

export const MAX_SCENARIOS = 5;

/** Minimum number of options every new scenario is seeded with (design p44). */
export const DEFAULT_OPTION_COUNT = 3;

/** Subset of @dnd-kit's drag-end event that reordering needs. */
export interface DragEndLike {
  operation: {
    source?: unknown;
    target?: unknown;
    canceled?: boolean;
  };
}

/**
 * Scenarios carry no ids in the data model (`extra="forbid"` on the backend),
 * so the sortable uses index ids and the position comes from the dragged
 * sortable itself. `initialIndex`/`index` are the fields @dnd-kit's own
 * `move()` helper falls back to when items cannot be matched by id; the type
 * is not exported by the library, hence the local narrowing.
 */
export const draggedIndices = (
  event: DragEndLike,
): { from: number; to: number } | null => {
  const { source, target, canceled } = event.operation;
  if (!source || !target || canceled) {
    return null;
  }
  const { initialIndex, index } = source as {
    initialIndex?: unknown;
    index?: unknown;
  };
  if (typeof initialIndex !== 'number' || typeof index !== 'number') {
    return null;
  }
  return { from: initialIndex, to: index };
};

/**
 * Where an item index ends up after `arrayMove(from, to)` — used to keep the
 * edited scenario selected when rows are reordered.
 */
export const mapMovedIndex = (index: number, from: number, to: number) => {
  if (index === from) {
    return to;
  }
  if (from < to && index > from && index <= to) {
    return index - 1;
  }
  if (from > to && index >= to && index < from) {
    return index + 1;
  }
  return index;
};

/**
 * New scenario order for a finished drag, or the original array when the drag
 * was cancelled, dropped in place, or cannot be resolved to indices.
 */
export function reorderScenarios(
  scenarios: Scenario[],
  event: DragEndLike,
): Scenario[] {
  const indices = draggedIndices(event);
  if (!indices) {
    return scenarios;
  }
  const { from, to } = indices;
  if (
    from === to ||
    from < 0 ||
    from >= scenarios.length ||
    to < 0 ||
    to >= scenarios.length
  ) {
    return scenarios;
  }
  return arrayMove(scenarios, from, to);
}

export const emptyOption = (): Option => ({
  value: '',
  feedback: '',
  type: 'Incorrect',
});

export const newScenario = (): Scenario => ({
  heading: '',
  description: '',
  instructionTitle: 'What you need to do',
  instructionDescription: '',
  prompt: '',
  options: Array.from({ length: DEFAULT_OPTION_COUNT }, emptyOption),
});
