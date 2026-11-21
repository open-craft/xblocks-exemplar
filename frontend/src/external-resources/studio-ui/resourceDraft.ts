import type { FileType, Resource } from '@/external-resources/apiTypes';

/**
 * A resource while it's being edited in the form. The content type starts empty for a
 * new resource, so the author has to choose one.
 */
export type ResourceDraft = Omit<Resource, 'fileType'> & {
  fileType?: FileType;
};

const generateId = (): string =>
  `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;

/** New resource for the "Add resource" form, with a unique id and empty fields. */
export const createEmptyResource = (): ResourceDraft => ({
  id: generateId(),
  url: '',
  title: '',
  publisher: '',
  expectedMinutes: 0,
});
