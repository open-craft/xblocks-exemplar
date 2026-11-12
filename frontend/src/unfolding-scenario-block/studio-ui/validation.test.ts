import { describe, expect, it } from 'vitest';
import type { Data } from '../apiTypes';
import {
  StudioSaveError,
  firstErrorSection,
  isBlankHtml,
  parseServerErrors,
  validateData,
} from './validation';

const validData = (): Data => ({
  displayName: 'Exercise',
  scenarioData: {
    name: 'Exercise',
    introduction: {
      heading: 'Welcome',
      description: '<p>Context</p>',
      imageURL: '',
    },
    scenarios: [
      {
        heading: 'Scenario one',
        description: '<p>Situation</p>',
        instructionTitle: 'What you need to do',
        instructionDescription: '<p>Choose one</p>',
        prompt: 'Which one?',
        options: [
          { value: 'First', feedback: 'Fine', type: 'Correct' },
          { value: 'Second', feedback: 'No', type: 'Incorrect' },
        ],
      },
    ],
    outcome: {
      heading: 'Done',
      description: '<p>Summary</p>',
      displaySelectedOptions: false,
    },
    interactionType: 'Explore',
    colorVariant: null,
  },
});

describe('validateData', () => {
  it('accepts a complete exercise', () => {
    expect(validateData(validData())).toEqual({
      errors: {},
      unmapped: [],
      sections: [],
    });
  });

  it.each([
    [
      'introduction',
      (data: Data) => {
        data.scenarioData.introduction.heading = '   ';
      },
      'scenarioData.introduction.heading',
      'Add a heading for the introduction',
    ],
    [
      'introduction',
      (data: Data) => {
        data.scenarioData.introduction.description = '<p></p>';
      },
      'scenarioData.introduction.description',
      'Add some text for the introduction',
    ],
    [
      'scenario:0',
      (data: Data) => {
        data.scenarioData.scenarios[0].heading = '';
      },
      'scenarioData.scenarios[0].heading',
      'Add a heading for scenario 1',
    ],
    [
      'scenario:0',
      (data: Data) => {
        data.scenarioData.scenarios[0].description = '<p><br></p>';
      },
      'scenarioData.scenarios[0].description',
      'Add some text to introduce scenario 1',
    ],
    [
      'scenario:0',
      (data: Data) => {
        data.scenarioData.scenarios[0].instructionTitle = '';
      },
      'scenarioData.scenarios[0].instructionTitle',
      'Add a heading for the instructions in scenario 1',
    ],
    [
      'scenario:0',
      (data: Data) => {
        data.scenarioData.scenarios[0].instructionDescription = '    ';
      },
      'scenarioData.scenarios[0].instructionDescription',
      'Add some text for the instructions in scenario 1',
    ],
    [
      'scenario:0',
      (data: Data) => {
        data.scenarioData.scenarios[0].prompt = '';
      },
      'scenarioData.scenarios[0].prompt',
      'Add a prompt for scenario 1',
    ],
    [
      'scenario:0',
      (data: Data) => {
        data.scenarioData.scenarios[0].options[1].value = ' ';
      },
      'scenarioData.scenarios[0].options[1].value',
      'Add text for option B in scenario 1',
    ],
    [
      'outcome',
      (data: Data) => {
        data.scenarioData.outcome.heading = '';
      },
      'scenarioData.outcome.heading',
      'Add a heading for the outcome',
    ],
    [
      'outcome',
      (data: Data) => {
        data.scenarioData.outcome.description = '&nbsp;';
      },
      'scenarioData.outcome.description',
      'Add some text for the outcome',
    ],
  ])('rejects an empty %s field', (section, breakField, path, message) => {
    const data = validData();
    breakField(data);
    const result = validateData(data);
    expect(result.errors[path]).toBe(message);
    expect(result.sections).toEqual([section]);
  });

  it('requires at least one scenario', () => {
    const data = validData();
    data.scenarioData.scenarios = [];
    const result = validateData(data);
    expect(result.unmapped).toEqual(['Add at least one scenario']);
    expect(result.sections).toEqual([]);
    expect(firstErrorSection(result)).toBe('introduction');
  });

  it('caps the scenario count at five', () => {
    const data = validData();
    data.scenarioData.scenarios = Array.from({ length: 6 }, () =>
      structuredClone(data.scenarioData.scenarios[0]),
    );
    expect(validateData(data).unmapped).toEqual([
      'Remove scenarios until 5 remain',
    ]);
  });

  it('orders badges by section and reports every scenario error', () => {
    const data = validData();
    data.scenarioData.scenarios.push({
      ...structuredClone(data.scenarioData.scenarios[0]),
      heading: '',
    });
    data.scenarioData.outcome.heading = '';
    data.scenarioData.introduction.heading = '';
    const result = validateData(data);
    expect(result.sections).toEqual(['introduction', 'scenario:1', 'outcome']);
    expect(firstErrorSection(result)).toBe('introduction');
  });
});

describe('isBlankHtml', () => {
  it.each(['', '   ', '<p></p>', '<p><br></p>', '<p>&nbsp;</p>', '<p> </p>'])(
    'treats %s as empty',
    (value) => expect(isBlankHtml(value)).toBe(true),
  );

  it.each(['text', '<p>text</p>', '<p><strong>x</strong></p>'])(
    'treats %s as content',
    (value) => expect(isBlankHtml(value)).toBe(false),
  );
});

describe('parseServerErrors', () => {
  it('maps the structured studio_save payload to fields and sections', () => {
    const result = parseServerErrors({
      'String should have at least 1 character': [
        'scenarioData.introduction.heading',
        'scenarioData.scenarios[1].prompt',
      ],
    });
    expect(result.errors).toEqual({
      'scenarioData.introduction.heading':
        'String should have at least 1 character',
      'scenarioData.scenarios[1].prompt':
        'String should have at least 1 character',
    });
    expect(result.sections).toEqual(['introduction', 'scenario:1']);
    expect(result.unmapped).toEqual([]);
  });

  it('keeps messages it cannot attribute', () => {
    const result = parseServerErrors({
      'Input should be a valid string': ['scenarioData.unknownField'],
    });
    expect(result.errors).toEqual({});
    expect(result.unmapped).toEqual([
      'Input should be a valid string (scenarioData.unknownField)',
    ]);
  });

  it('accepts legacy string payloads', () => {
    expect(parseServerErrors('Field: x Error: y').unmapped).toEqual([
      'Field: x Error: y',
    ]);
  });

  it.each([null, undefined, 42, ['a']])(
    'returns no errors for an unexpected payload (%s)',
    (payload) => {
      expect(parseServerErrors(payload)).toEqual({
        errors: {},
        unmapped: [],
        sections: [],
      });
    },
  );
});

describe('StudioSaveError', () => {
  it('carries the parsed result for the editor', () => {
    const error = new StudioSaveError({
      errors: { 'scenarioData.outcome.heading': 'Required' },
      unmapped: [],
      sections: ['outcome'],
    });
    expect(error).toBeInstanceOf(Error);
    expect(error.name).toBe('StudioSaveError');
    expect(error.fieldErrors).toEqual({
      'scenarioData.outcome.heading': 'Required',
    });
    expect(error.sections).toEqual(['outcome']);
  });
});
