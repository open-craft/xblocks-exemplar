import type { XBlockConfig } from '../../types.ts';
import StudioUi from './studio-ui';
import { type XBlockData } from '../type';
import {
  createXBlockRoot,
  type XBlockRuntime,
} from '@opencraft/xblock-react-utils';
import styles from './style.scss?inline';
import { XBlockConfigContext } from '@/lib/context.ts';

export const renderBlock = (
  runtime: XBlockRuntime,
  element: Element | null,
  context: { data: XBlockData; config: XBlockConfig },
) => {
  createXBlockRoot({ runtime, element, config: context.config, styles })(
    <XBlockConfigContext.Provider value={context.config}>
      <StudioUi data={context.data} />
    </XBlockConfigContext.Provider>,
  );
};
