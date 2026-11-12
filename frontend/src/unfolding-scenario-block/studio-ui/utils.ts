import type { Option, Scenario } from '../apiTypes';

export const MAX_SCENARIOS = 5;

/** Minimum number of options every new scenario is seeded with (design p44). */
export const DEFAULT_OPTION_COUNT = 3;

/** Event shape (subset) consumed by scenario reordering, matching @dnd-kit's DragOverEvent. */
interface ReorderEvent {
  operation: {
    source?: unknown;
    target?: unknown;
    canceled?: boolean;
  };
}

/**
 * Reorder scenarios by drag position. Scenarios carry no ids in the data model
 * (`extra="forbid"` on the backend), so the sortable uses index-based ids and
 * the reorder reads the source's initial/current index — the same fallback
 * @dnd-kit/helpers applies when items don't match by id.
 */
export function reorderScenarios(
  scenarios: Scenario[],
  event: ReorderEvent,
): Scenario[] {
  const { source, target, canceled } = event.operation;
  if (!source || !target || canceled) {
    return scenarios;
  }
  const { initialIndex: from, index: to } = source as {
    initialIndex: number;
    index: number;
  };
  if (from === to || from < 0 || from >= scenarios.length) {
    return scenarios;
  }
  const next = [...scenarios];
  const [moved] = next.splice(from, 1);
  next.splice(to, 0, moved);
  return next;
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
