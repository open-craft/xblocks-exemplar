// Registered here (the bundle entry) rather than in the shared editor, so the
// lists plugin is only pulled into this block's bundle and never loaded in
// unit tests. TinyMCE core must be imported first: plugins reference the
// global `tinymce`, and side-effect imports evaluate in source order.
import 'tinymce/tinymce';
import 'tinymce/plugins/lists';
import type { XBlockConfig } from '../../types.ts';
import { App } from './App.tsx';
import {
  createXBlockRoot,
  getRoot,
  type XBlockRuntime,
} from '@opencraft/xblock-react-utils';

import type { Data } from '../apiTypes.ts';
import styles from './main.scss?inline';
import { XBlockConfigContext } from '../../lib/context.ts';
import { StudioSaveError, parseServerErrors } from './validation.ts';

interface ServerErrorResponse {
  responseJSON?: { error?: unknown };
  statusText?: string;
}

export const renderBlock = (
  runtime: XBlockRuntime,
  element: Element,
  context: { data: Data; config: XBlockConfig },
) => {
  const container = getRoot(element);

  const studioSaveUrl = runtime.handlerUrl(container, 'studio_save');

  // Unlike the shared `saveStudioBlock` helper this keeps the rejected payload,
  // so `studio_save` field errors can be shown inline like client errors.
  const save = (data: Data) =>
    new Promise<void>((resolve, reject) => {
      runtime.notify('save', { state: 'start' });
      $.post(studioSaveUrl, JSON.stringify(data))
        .done(() => {
          runtime.notify('save', { state: 'end' });
          resolve();
        })
        .fail((response: ServerErrorResponse) => {
          const result = parseServerErrors(response.responseJSON?.error);
          if (Object.keys(result.errors).length > 0) {
            reject(new StudioSaveError(result));
            return;
          }
          // Nothing maps to a field (network fault, unexpected payload): report
          // it through the standard Studio notification instead.
          runtime.notify('error', {
            title: 'Save Error',
            message: `Failed to save unfolding scenario block: ${
              result.unmapped.join(' ') ||
              response.responseJSON?.error ||
              response.statusText ||
              'unknown error'
            }`,
          });
          resolve();
        });
    });

  const cancel = () => runtime.notify('cancel', {});

  createXBlockRoot({ runtime, element, config: context.config, styles })(
    <XBlockConfigContext.Provider value={context.config}>
      <App initialData={context.data} onSave={save} onCancel={cancel} />
    </XBlockConfigContext.Provider>,
  );
};
