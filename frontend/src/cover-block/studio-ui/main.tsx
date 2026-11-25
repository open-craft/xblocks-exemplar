import {
  createXBlockRoot,
  type XBlockRuntime,
} from '@opencraft/xblock-react-utils';
import type { XBlockConfig } from '@/types.ts';
import App from './App.tsx';
import styles from './style.scss?inline';
import type { CoverBlockFields } from '../apiTypes.ts';
import { XBlockConfigContext } from '@/lib/context.ts';

export const renderBlock = (
  runtime: XBlockRuntime,
  element: Element,
  context: { data: CoverBlockFields; config: XBlockConfig },
) => {
  createXBlockRoot({ runtime, element, config: context.config, styles })(
    <XBlockConfigContext.Provider value={context.config}>
      <App {...context.data} />
    </XBlockConfigContext.Provider>,
  );
};
