import { FileType, type Resource } from '@/external-resources/apiTypes';

const generateId = (): string =>
  `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;

/** New resource for the "Add resource" form, with a unique id and empty fields. */
export const createEmptyResource = (): Resource => ({
  id: generateId(),
  url: '',
  title: '',
  publisher: '',
  expectedMinutes: 0,
  fileType: FileType.ARTICLE,
});
