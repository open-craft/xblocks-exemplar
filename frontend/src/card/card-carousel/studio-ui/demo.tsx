import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import StudioUI from './StudioUI';
import {
  RuntimeContext,
  type XBlockRuntime,
} from '@opencraft/xblock-react-utils';
import { type InitData } from '@/card/card-carousel/types.ts';
import { newCard } from '@/card/common/utils.ts';

const mockRuntime: XBlockRuntime = {
  handlerUrl: () => 'save-data',
  notify: (action: string, data: object) => console.log(action, data),
};
const initData: InitData = {
  displayName: 'Demo Carousel',
  cards: [newCard([], { orientation: 'HORIZONTAL' })],
  backgroundColor: '#ccc',
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <IntlProvider locale="en">
      <RuntimeContext.Provider
        value={{ runtime: mockRuntime, element: document.createElement('div') }}
      >
        <StudioUI initData={initData} />
      </RuntimeContext.Provider>
    </IntlProvider>
  </StrictMode>,
);
