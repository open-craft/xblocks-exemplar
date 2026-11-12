/** Plugins for the body-text editor; registered by `main.tsx`. */
export const BODY_PLUGINS = ['help', 'lists'];

/**
 * Toolbar for body text. Limited to what the unfolding-scenario sanitiser keeps
 * (`text-decoration`, `text-align`, `padding-left`, lists, bold/italic), so
 * authors cannot apply formatting that is silently stripped on save.
 */
export const BODY_TOOLBAR =
  'undo redo | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent';
