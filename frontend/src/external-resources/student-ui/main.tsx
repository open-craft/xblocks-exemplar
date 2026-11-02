import {
  createXBlockRoot,
  type XBlockConfig,
  type XBlockRuntime,
} from '@opencraft/xblock-react-utils';
import type { Data } from '../apiTypes.ts';

export const renderBlock = (
  runtime: XBlockRuntime,
  element: Element,
  context: { data: Data & { readResources: string[] }; config: XBlockConfig },
) => {
  createXBlockRoot({ runtime, element, config: context.config })(
    <h2>{context.data.displayName}</h2>,
  );
};
