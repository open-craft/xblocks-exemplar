import type { Data } from '../apiTypes';
import type { SectionKey } from './components/EditorSidebar';

/** Field path → single message, keyed like the Formik field names. */
export type FieldErrors = Record<string, string>;

export interface ValidationResult {
  errors: FieldErrors;
  /** Error messages that cannot be attributed to a field (count rules, server faults). */
  unmapped: string[];
  /** Sections that should show a sidebar badge, in panel order. */
  sections: SectionKey[];
}

const SECTION_ORDER: SectionKey[] = ['setup', 'introduction', 'outcome'];

const OPTION_LABEL = (index: number) => {
  let label = '';
  for (
    let position = index + 1;
    position > 0;
    position = Math.floor((position - 1) / 26)
  ) {
    label = String.fromCharCode(65 + ((position - 1) % 26)) + label;
  }
  return label;
};

/**
 * Rich text is stored as HTML, so an "empty" editor can still contain markup
 * such as `<p></p>` or `<p><br></p>`. The backend only measures raw string
 * length, so the editor applies the stricter, learner-visible definition.
 */
export const isBlankHtml = (value: string | null | undefined): boolean =>
  !value ||
  value
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;|&#160;/gi, ' ')
    .trim().length === 0;

const MAX_SCENARIOS = 5;

/** Which sidebar section owns a field path. */
export const sectionForPath = (path: string): SectionKey | null => {
  if (path.startsWith('scenarioData.introduction')) {
    return 'introduction';
  }
  if (path.startsWith('scenarioData.outcome')) {
    return 'outcome';
  }
  if (
    path.startsWith('scenarioData.interactionType') ||
    path.startsWith('scenarioData.colorVariant')
  ) {
    return 'setup';
  }
  return null;
};

export const orderSections = (sections: Iterable<SectionKey>): SectionKey[] =>
  [...sections].sort((a, b) => {
    // Sidebar order: Setup, Introduction, Scenario 1…N, then Outcome.
    const indexOf = (section: SectionKey) => {
      if (section.startsWith('scenario:')) {
        return 2 + Number(section.slice('scenario:'.length));
      }
      if (section === 'outcome') {
        return Number.MAX_SAFE_INTEGER;
      }
      return SECTION_ORDER.indexOf(section);
    };
    return indexOf(a) - indexOf(b);
  });

/**
 * Client-side validation. Mirrors the server's required fields and adds the
 * scenario count rule, which is intentionally client-only.
 */
export const validateData = (data: Data): ValidationResult => {
  const errors: FieldErrors = {};
  const unmapped: string[] = [];
  const sections = new Set<SectionKey>();
  const { scenarioData } = data;

  const requireText = (
    path: string,
    value: string | null | undefined,
    message: string,
    section: SectionKey,
    { html = false }: { html?: boolean } = {},
  ) => {
    const empty = html ? isBlankHtml(value) : !(value ?? '').trim();
    if (empty) {
      errors[path] = message;
      sections.add(section);
    }
  };

  requireText(
    'scenarioData.introduction.heading',
    scenarioData.introduction.heading,
    'Add a heading for the introduction',
    'introduction',
  );
  requireText(
    'scenarioData.introduction.description',
    scenarioData.introduction.description,
    'Add some text for the introduction',
    'introduction',
    { html: true },
  );

  if (scenarioData.scenarios.length === 0) {
    unmapped.push('Add at least one scenario');
  } else if (scenarioData.scenarios.length > MAX_SCENARIOS) {
    unmapped.push(`Remove scenarios until ${MAX_SCENARIOS} remain`);
  }

  scenarioData.scenarios.forEach((scenario, index) => {
    const section: SectionKey = `scenario:${index}`;
    const position = index + 1;
    const base = `scenarioData.scenarios[${index}]`;
    requireText(
      `${base}.heading`,
      scenario.heading,
      `Add a heading for scenario ${position}`,
      section,
    );
    requireText(
      `${base}.description`,
      scenario.description,
      `Add some text to introduce scenario ${position}`,
      section,
      { html: true },
    );
    requireText(
      `${base}.instructionTitle`,
      scenario.instructionTitle,
      `Add a heading for the instructions in scenario ${position}`,
      section,
    );
    requireText(
      `${base}.instructionDescription`,
      scenario.instructionDescription,
      `Add some text for the instructions in scenario ${position}`,
      section,
      { html: true },
    );
    requireText(
      `${base}.prompt`,
      scenario.prompt,
      `Add a prompt for scenario ${position}`,
      section,
    );
    scenario.options.forEach((option, optionIndex) => {
      requireText(
        `${base}.options[${optionIndex}].value`,
        option.value,
        `Add text for option ${OPTION_LABEL(optionIndex)} in scenario ${position}`,
        section,
      );
    });
  });

  requireText(
    'scenarioData.outcome.heading',
    scenarioData.outcome.heading,
    'Add a heading for the outcome',
    'outcome',
  );
  requireText(
    'scenarioData.outcome.description',
    scenarioData.outcome.description,
    'Add some text for the outcome',
    'outcome',
    { html: true },
  );

  return { errors, unmapped, sections: orderSections(sections) };
};

/** The section to open after a failed save: the first one with an error. */
export const firstErrorSection = (
  result: Pick<ValidationResult, 'sections'>,
  fallback: SectionKey = 'introduction',
): SectionKey => result.sections[0] ?? fallback;

/**
 * Errors returned by `studio_save` look like
 * `{ "String should have at least 1 character": ["scenarioData.introduction.heading"] }`.
 * Legacy/plain payloads fall through to `unmapped` so they can be shown verbatim.
 */
export const parseServerErrors = (payload: unknown): ValidationResult => {
  const errors: FieldErrors = {};
  const unmapped: string[] = [];
  const sections = new Set<SectionKey>();

  if (typeof payload === 'string') {
    unmapped.push(payload);
    return { errors, unmapped, sections: [] };
  }
  if (Array.isArray(payload) || !payload || typeof payload !== 'object') {
    return { errors, unmapped, sections: [] };
  }

  Object.entries(payload as Record<string, unknown>).forEach(
    ([message, locations]) => {
      const paths = Array.isArray(locations)
        ? locations
        : [locations as unknown];
      paths.forEach((path) => {
        if (typeof path !== 'string') {
          unmapped.push(message);
          return;
        }
        const scenarioMatch = path.match(/^scenarioData\.scenarios\[(\d+)\]/);
        if (scenarioMatch) {
          const section: SectionKey = `scenario:${Number(scenarioMatch[1])}`;
          errors[path] = message;
          sections.add(section);
          return;
        }
        const section = sectionForPath(path);
        if (section) {
          errors[path] = message;
          sections.add(section);
          return;
        }
        unmapped.push(`${message} (${path})`);
      });
    },
  );

  return { errors, unmapped, sections: orderSections(sections) };
};

/** Thrown by the studio save handler when the server rejects a save. */
export class StudioSaveError extends Error {
  readonly fieldErrors: FieldErrors;

  readonly unmapped: string[];

  readonly sections: SectionKey[];

  constructor(result: ValidationResult) {
    super('The exercise could not be saved');
    this.name = 'StudioSaveError';
    this.fieldErrors = result.errors;
    this.unmapped = result.unmapped;
    this.sections = result.sections;
  }
}
