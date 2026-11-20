import {
  beforeEach,
  beforeAll,
  describe,
  expect,
  it,
  type MockInstance,
  vi,
  afterAll,
} from 'vitest';
import { deriveColor, deriveStyles } from './utils.ts';
import { initDataFactory } from './specHelpers.tsx';

describe('deriveColor', () => {
  let mockError: MockInstance;
  beforeAll(() => {
    // Somehow still spits out to console, not sure why.
    mockError = vi.spyOn(console, 'error').mockImplementation(() => {});
  });
  beforeEach(() => {
    mockError.mockReset();
  });
  afterAll(() => {
    mockError.mockRestore();
  });
  it('Returns an empty object when there is no value', () => {
    expect(deriveColor('test', '')).toEqual({});
    expect(mockError).not.toHaveBeenCalled();
  });
  it.each`
    value
    ${'1234'}
    ${'#111'}
    ${'#enfc12'}
    ${'abcdef'}
    ${'fff'}
  `(
    "Logs an error and returns empty if there's an invalid color",
    ({ value }) => {
      expect(deriveColor('test', value)).toEqual({});
      expect(mockError).toHaveBeenCalledWith(
        expect.stringContaining(`Bogus color found for test: ${value}`),
      );
    },
  );
  it.each`
    value
    ${'#ababab'}
    ${'#cccccc'}
    ${'#123456'}
    ${'#a1b2c3'}
    ${'#ABABAB'}
    ${'#A1B2C3'}
  `('Returns a color style', ({ value }) => {
    expect(deriveColor('test', value)).toEqual({
      color: value,
    });
  });
});

describe('deriveStyles', () => {
  let mockError: MockInstance;
  beforeAll(() => {
    mockError = vi.spyOn(console, 'error').mockImplementation(() => {});
  });
  beforeEach(() => {
    mockError.mockReset();
  });
  afterAll(() => {
    mockError.mockRestore();
  });
  it('Derives all styles from colors', () => {
    expect(deriveStyles(initDataFactory())).toEqual({
      top_header: { color: '#dddddd' },
      subheader: { color: '#cccccc' },
      description: { color: '#ffffff' },
      main_header: { color: '#ababab' },
    });
    expect(mockError).not.toHaveBeenCalled();
  });
  it('Handles missing values', () => {
    expect(deriveStyles(initDataFactory({ top_header_color: '' }))).toEqual({
      top_header: {},
      subheader: { color: '#cccccc' },
      description: { color: '#ffffff' },
      main_header: { color: '#ababab' },
    });
    expect(mockError).not.toHaveBeenCalled();
  });
  it('Handles invalid values', () => {
    expect(deriveStyles(initDataFactory({ subheader_color: 'boop' }))).toEqual({
      top_header: { color: '#dddddd' },
      subheader: {},
      description: { color: '#ffffff' },
      main_header: { color: '#ababab' },
    });
    expect(mockError).toHaveBeenCalledWith(
      'Bogus color found for subheader: boop',
    );
  });
});
