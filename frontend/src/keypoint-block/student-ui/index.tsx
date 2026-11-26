import {
  createXBlockRoot,
  type XBlockConfig,
  type XBlockRuntime,
} from '@opencraft/xblock-react-utils';
import StudentUi from './student-ui';
import { type XBlockData } from '../type';
import styles from './style.scss?inline';

export const renderBlock = (
  runtime: XBlockRuntime,
  element: Element,
  context: { data: XBlockData; config: XBlockConfig },
) => {
  const {
    header,
    keypoints,
    summary,
    button_text,
    button_link,
    background_color,
  } = context.data;
  createXBlockRoot({ runtime, element, config: context.config, styles })(
    <StudentUi
      header={header || ''}
      keypoints={keypoints || []}
      summary={summary || ''}
      buttonText={button_text || ''}
      buttonLink={button_link || ''}
      backgroundColor={background_color || ''}
    />,
  );
};
