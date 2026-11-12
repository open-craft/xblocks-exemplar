import { describe, expect, it } from 'vitest';
import {
  COLOUR_CATEGORY_LABELS,
  COLOUR_VARIANTS,
  colourVariantStyle,
  findColourVariant,
} from './variants';

describe('colour variant registry', () => {
  it('ships exactly the three Primary variants from the design', () => {
    expect(COLOUR_VARIANTS.map((variant) => variant.id)).toEqual([
      'primary-navy',
      'primary-blue',
      'primary-lake',
    ]);
    expect(new Set(COLOUR_VARIANTS.map((variant) => variant.category))).toEqual(
      new Set(['primary']),
    );
  });

  it('labels every category so new groups can be added as data', () => {
    expect(Object.keys(COLOUR_CATEGORY_LABELS).sort()).toEqual([
      'feedback',
      'interactives',
      'primary',
      'secondary',
    ]);
    for (const variant of COLOUR_VARIANTS) {
      expect(COLOUR_CATEGORY_LABELS[variant.category]).toBeTruthy();
    }
  });

  it('maps each variant to the background, emphasis and text tokens', () => {
    for (const variant of COLOUR_VARIANTS) {
      expect(Object.keys(variant.tokens).sort()).toEqual([
        '--color-bg-emphasis',
        '--color-bg-main',
        '--color-txt-content',
      ]);
      for (const value of Object.values(variant.tokens)) {
        expect(value).toMatch(/^var\(--pgn-wgu-[a-z0-9-]+, #[0-9a-f]{6}\)$/);
      }
    }
  });

  it.each([null, undefined, '', 'primary-teal-not-shipped'])(
    'applies no overrides for an unset or unavailable id (%s)',
    (id) => {
      expect(colourVariantStyle(id)).toBeUndefined();
      expect(findColourVariant(id)).toBeUndefined();
    },
  );

  it('returns the variant tokens as inline custom properties', () => {
    expect(colourVariantStyle('primary-lake')).toEqual(
      findColourVariant('primary-lake')?.tokens,
    );
    expect(colourVariantStyle('primary-lake')).toMatchObject({
      '--color-bg-main': 'var(--pgn-wgu-color-background-main-lake, #46b1ef)',
    });
  });
});
