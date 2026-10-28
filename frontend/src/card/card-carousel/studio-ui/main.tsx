import {
  createXBlockRoot,
  getRoot,
  type XBlockRuntime,
} from '@opencraft/xblock-react-utils';
import { XBlockConfigContext } from '@/lib/context.ts';
import type { XBlockConfig } from '@/types.ts';
import StudioUI from './StudioUI';
import type { InitData } from '@/card/card-carousel/types.ts';
import styles from './StudioUI.css?inline';

export const renderBlock = (
  element: Element,
  runtime: XBlockRuntime,
  context: { data: InitData; config: XBlockConfig },
) => {
  const container = getRoot(element);

  // The Modal Body has a hardcoded value of 435px in studio-main-v1.css
  // This effect updates that height to match make sure the full content is visible.
  const modalBody = container.parentElement?.parentElement;
  if (modalBody) {
    modalBody.style.minHeight = '635px';
    // This allows the contents to scroll when modal is made full screen
    modalBody.style.maxHeight = 'calc(100vh - 51px)'; // 43px header + 8px margin removed.
    modalBody.style.overflowY = 'scroll';
  }

  createXBlockRoot({
    runtime,
    element,
    config: context.config,
    styles,
  })(
    <XBlockConfigContext.Provider value={context.config}>
      <StudioUI initData={context.data} />
    </XBlockConfigContext.Provider>,
  );
};
