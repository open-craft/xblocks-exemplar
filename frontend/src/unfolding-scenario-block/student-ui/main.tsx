import {
  createXBlockRoot,
  type XBlockConfig,
  type XBlockRuntime,
} from '@opencraft/xblock-react-utils';
import type { Data } from '../apiTypes.ts';
import { App } from './App.tsx';
import styles from './main.scss?inline';

export const renderBlock = async (
  runtime: XBlockRuntime,
  element: HTMLDivElement,
  context: { data: Data; config: XBlockConfig },
) => {
  createXBlockRoot({ runtime, element, config: context.config, styles })(
    <App usageId={element.dataset.usageId || ''} data={context.data} />,
  );
};
