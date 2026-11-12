import type { CSSProperties } from 'react';

/**
 * Colour variants available to the unfolding scenario block.
 *
 * v1 (decided): Primary-only — the only background tokens the theme ships.
 * The registry is the single source of truth: adding a category later means
 * adding entries here, not changing components.
 *
 * Theme tokens come from edx-simple-theme (`wgu-release/ulmo`), compiled by
 * `paragon build-tokens` into `--pgn-wgu-*` custom properties. Each value is
 * a `var(--pgn-wgu-…, #fallback)` reference so the design fallback applies
 * when the theme CSS isn't loaded (e.g. the xblock-sdk workbench).
 */

export type ColourCategory =
  | 'primary'
  | 'secondary'
  | 'interactives'
  | 'feedback';

export interface ColourVariant {
  /** Stored in `ScenarioData.colorVariant`; doubles as the theme token suffix. */
  id: string;
  category: ColourCategory;
  /** Human-readable name shown next to the swatch. */
  label: string;
  /**
   * Custom property overrides applied to the block wrapper
   * (`--color-*` local vars shared by the student and studio UI).
   */
  tokens: Record<string, string>;
  /** Background + foreground samples rendered in the studio swatch. */
  swatch: {
    background: string;
    foregrounds: [string, string];
  };
}

export const COLOUR_VARIANTS: ColourVariant[] = [
  {
    id: 'primary-navy',
    category: 'primary',
    label: 'Navy',
    tokens: {
      '--color-bg-main': 'var(--pgn-wgu-color-background-main-navy, #002855)',
      '--color-bg-emphasis': 'var(--pgn-wgu-color-navy-900, #001124)',
      '--color-txt-content': 'var(--pgn-wgu-color-text-pure-white, #ffffff)',
    },
    swatch: {
      background: 'var(--pgn-wgu-color-background-main-navy, #002855)',
      foregrounds: [
        'var(--pgn-wgu-color-text-pure-white, #ffffff)',
        'var(--pgn-wgu-color-navy-200, #8a9cb1)',
      ],
    },
  },
  {
    id: 'primary-blue',
    category: 'primary',
    label: 'Blue',
    tokens: {
      '--color-bg-main': 'var(--pgn-wgu-color-background-main-blue, #0070f0)',
      '--color-bg-emphasis': 'var(--pgn-wgu-color-blue-800, #003e84)',
      '--color-txt-content': 'var(--pgn-wgu-color-text-pure-white, #ffffff)',
    },
    swatch: {
      background: 'var(--pgn-wgu-color-background-main-blue, #0070f0)',
      foregrounds: [
        'var(--pgn-wgu-color-text-pure-white, #ffffff)',
        'var(--pgn-wgu-color-navy-200, #8a9cb1)',
      ],
    },
  },
  {
    id: 'primary-lake',
    category: 'primary',
    label: 'Lake',
    tokens: {
      '--color-bg-main': 'var(--pgn-wgu-color-background-main-lake, #46b1ef)',
      '--color-bg-emphasis': 'var(--pgn-wgu-color-lake-900, #1d4a64)',
      '--color-txt-content': 'var(--pgn-wgu-color-text-main-navy, #002855)',
    },
    swatch: {
      background: 'var(--pgn-wgu-color-background-main-lake, #46b1ef)',
      foregrounds: [
        'var(--pgn-wgu-color-text-main-navy, #002855)',
        'var(--pgn-wgu-color-text-pure-white, #ffffff)',
      ],
    },
  },
];

export const COLOUR_CATEGORY_LABELS: Record<ColourCategory, string> = {
  primary: 'Primary',
  secondary: 'Secondary',
  interactives: 'Interactives',
  feedback: 'Feedback',
};

export const findColourVariant = (id: string | null | undefined) =>
  COLOUR_VARIANTS.find((variant) => variant.id === id);

/**
 * Inline custom properties for a stored variant id.
 *
 * Returns `undefined` when the id is unset or no longer shipped, which leaves
 * the block's default appearance intact. Unavailable ids are never discarded;
 * the stored value stays in the data so it recovers if the theme returns.
 */
export const colourVariantStyle = (
  id: string | null | undefined,
): CSSProperties | undefined => {
  const variant = findColourVariant(id);
  return variant ? (variant.tokens as CSSProperties) : undefined;
};
