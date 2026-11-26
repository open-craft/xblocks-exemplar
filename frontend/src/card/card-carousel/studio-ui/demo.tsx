import { type XBlockRuntime } from '@opencraft/xblock-react-utils';
import { type XBlockConfig } from '@/types.ts';

import { renderBlock } from './main.tsx';

const mockRuntime: XBlockRuntime = {
  handlerUrl: () => 'save-data',
  notify: (action: string, data: object) => console.log(action, data),
};

const mockConfig: XBlockConfig = {
  mfe_config_api: '',
  file_picker_url: '',
  enable_json_editing: true,
};

renderBlock(document.getElementById('root')!, mockRuntime, {
  data: {
    backgroundColor: '#CCFFDD',
    cards: [],
    displayName: 'Demo Carousel',
  },
  config: mockConfig,
});
