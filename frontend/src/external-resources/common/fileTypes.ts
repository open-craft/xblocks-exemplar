import { FileType } from '@/external-resources/apiTypes';

export const FILE_TYPE_LABELS: Record<
  Exclude<FileType, FileType.CUSTOM>,
  string
> = {
  [FileType.ARTICLE]: 'Articles',
  [FileType.VIDEO]: 'Video',
  [FileType.PDF]: 'PDF',
  [FileType.TEXTBOOK]: 'Textbook / Book',
  [FileType.VIRTUAL_MACHINE]: 'Virtual machines',
  [FileType.INTERACTIVE_ACTIVITY]: 'Interactive activities',
  [FileType.LIBRARY]: 'Library',
};

export const FILE_TYPE_ICONS: Record<FileType, string> = {
  [FileType.ARTICLE]: 'article',
  [FileType.VIDEO]: 'smart_display',
  [FileType.PDF]: 'picture_as_pdf',
  [FileType.TEXTBOOK]: 'menu_book',
  [FileType.VIRTUAL_MACHINE]: 'laptop',
  [FileType.INTERACTIVE_ACTIVITY]: 'touch_app',
  [FileType.LIBRARY]: 'local_library',
  [FileType.CUSTOM]: 'description',
};
