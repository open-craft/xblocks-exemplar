import { describe, expect, it } from 'vitest';
import type { Scenario } from '../apiTypes';
import { mapMovedIndex, newScenario, reorderScenarios } from './utils';

const scenarios = (): Scenario[] => [
  { ...newScenario(), heading: 'One' },
  { ...newScenario(), heading: 'Two' },
  { ...newScenario(), heading: 'Three' },
];

const dragEnd = (
  from: number,
  to: number,
  overrides: { canceled?: boolean; withTarget?: boolean } = {},
) => ({
  operation: {
    source: { initialIndex: from, index: to },
    target: overrides.withTarget === false ? undefined : { id: to },
    canceled: overrides.canceled,
  },
});

const headings = (result: Scenario[]) => result.map((s) => s.heading);

describe('reorderScenarios', () => {
  it('moves a scenario down', () => {
    expect(headings(reorderScenarios(scenarios(), dragEnd(0, 2)))).toEqual([
      'Two',
      'Three',
      'One',
    ]);
  });

  it('moves a scenario up', () => {
    expect(headings(reorderScenarios(scenarios(), dragEnd(2, 0)))).toEqual([
      'Three',
      'One',
      'Two',
    ]);
  });

  it('returns the same array when dropped in place', () => {
    const original = scenarios();
    expect(reorderScenarios(original, dragEnd(1, 1))).toBe(original);
  });

  it('keeps the order when the drag is cancelled', () => {
    const original = scenarios();
    expect(reorderScenarios(original, dragEnd(0, 2, { canceled: true }))).toBe(
      original,
    );
  });

  it('ignores events without a target', () => {
    const original = scenarios();
    expect(
      reorderScenarios(original, dragEnd(0, 2, { withTarget: false })),
    ).toBe(original);
  });

  it.each([
    ['a negative source', { initialIndex: -1, index: 1 }],
    ['a source past the end', { initialIndex: 9, index: 0 }],
    ['a target past the end', { initialIndex: 0, index: 9 }],
    ['missing sortable indices', {}],
    ['non-numeric indices', { initialIndex: '0', index: '1' }],
  ])('ignores %s', (_label, source) => {
    const original = scenarios();
    expect(
      reorderScenarios(original, { operation: { source, target: { id: 1 } } }),
    ).toBe(original);
  });

  it('does not mutate the input array', () => {
    const original = scenarios();
    reorderScenarios(original, dragEnd(0, 2));
    expect(headings(original)).toEqual(['One', 'Two', 'Three']);
  });

  it('keeps scenario contents attached to their scenario', () => {
    const original = scenarios();
    const result = reorderScenarios(original, dragEnd(0, 2));
    expect(result[2]).toBe(original[0]);
  });
});

describe('mapMovedIndex', () => {
  it('moves the dragged index to its destination', () => {
    expect(mapMovedIndex(0, 0, 2)).toBe(2);
    expect(mapMovedIndex(2, 2, 0)).toBe(0);
  });

  it('shifts items that the drag moved over', () => {
    // 0 -> 2 : items 1 and 2 shift up by one.
    expect(mapMovedIndex(1, 0, 2)).toBe(0);
    expect(mapMovedIndex(2, 0, 2)).toBe(1);
    // 2 -> 0 : items 0 and 1 shift down by one.
    expect(mapMovedIndex(0, 2, 0)).toBe(1);
    expect(mapMovedIndex(1, 2, 0)).toBe(2);
  });

  it('leaves uninvolved items alone', () => {
    expect(mapMovedIndex(4, 0, 2)).toBe(4);
    expect(mapMovedIndex(0, 2, 4)).toBe(0);
    expect(mapMovedIndex(1, 1, 1)).toBe(1);
  });

  it('agrees with reorderScenarios for every index pair', () => {
    const items = scenarios();
    const drag = (from: number, to: number) => ({
      operation: {
        source: { initialIndex: from, index: to },
        target: { id: to },
      },
    });
    for (let from = 0; from < items.length; from += 1) {
      for (let to = 0; to < items.length; to += 1) {
        const moved = reorderScenarios(items, drag(from, to));
        // Place each original item where mapMovedIndex says it now sits.
        const followed: Scenario[] = [];
        items.forEach((item, index) => {
          followed[mapMovedIndex(index, from, to)] = item;
        });
        expect(followed).toEqual(moved);
      }
    }
  });
});
