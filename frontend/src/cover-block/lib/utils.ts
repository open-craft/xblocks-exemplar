import type { CoverStyleSet } from '../types.ts';
import type { CoverBlockFields } from '../apiTypes.ts';
import type { CSSProperties } from 'react';

/**
 * Converts a hex color value into a CSSProperties object.
 * Only accepts 6-digit hex colors (e.g. #a1b2c3); anything else is logged as an error and ignored.
 */
export const deriveColor = (name: string, value: string): CSSProperties => {
  if (!value) {
    return {};
  }
  // Yes, some values would work here that aren't supported (i.e. #fff, rgb(0, 10, 20))
  // We don't care. We're not using them.
  if (value.match(/^#([0-9]|[a-f]){6}$/i)) {
    return { color: value };
  }
  console.error(`Bogus color found for ${name}: ${value}`);
  return {};
};

export const deriveStyles = (data: CoverBlockFields): CoverStyleSet => {
  return {
    top_header: deriveColor('top_header', data.top_header_color),
    description: deriveColor('description', data.description_color),
    main_header: deriveColor('main_header', data.main_header_color),
    subheader: deriveColor('subheader', data.subheader_color),
  };
};
