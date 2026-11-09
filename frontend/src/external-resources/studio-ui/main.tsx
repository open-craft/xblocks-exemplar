import type { XBlockConfig } from '../../types.ts';
import { App } from './App.tsx';
import {
  createXBlockRoot,
  getRoot,
  saveStudioBlock,
  type XBlockRuntime,
} from '@opencraft/xblock-react-utils';

import type { Data } from '../apiTypes.ts';
import styles from './main.scss?inline';
import { XBlockConfigContext } from '../../lib/context.ts';

export const renderBlock = (
  runtime: XBlockRuntime,
  element: Element,
  context: { data: Data; config: XBlockConfig },
) => {
  const container = getRoot(element);

  const modalBody = container.parentElement?.parentElement;
  if (modalBody) {
    modalBody.style.minHeight = '635px';
    modalBody.style.maxHeight = 'calc(100vh - 51px)';
    modalBody.style.overflowY = 'scroll';
  }

  const studioSaveUrl = runtime.handlerUrl(container, 'studio_save');
  const save = (data: Data) => {
    saveStudioBlock<Data>({
      saveUrl: studioSaveUrl,
      data,
      runtime,
      errorMessage: (response) =>
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        `Failed to save external resources block: ${(response as any).responseJSON.error}`,
    });
  };

  const cancel = () => runtime.notify('cancel', {});

  createXBlockRoot({ runtime, element, config: context.config, styles })(
    <XBlockConfigContext.Provider value={context.config}>
      <App initialData={context.data} onSave={save} onCancel={cancel} />
    </XBlockConfigContext.Provider>,
  );
};
