import {
  createXBlockRoot,
  type XBlockConfig,
  type XBlockRuntime,
} from '@opencraft/xblock-react-utils';
import { App, type StudentData } from './App.tsx';
import styles from './main.scss?inline';

export const renderBlock = (
  runtime: XBlockRuntime,
  element: Element,
  context: { data: StudentData; config: XBlockConfig },
) => {
  createXBlockRoot({ runtime, element, config: context.config, styles })(
    <App data={context.data} />,
  );
};
