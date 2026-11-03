import { useContext, useMemo } from 'react';
import { Formik } from 'formik';
import { type InitData } from '@/card/card-carousel/types';
import { newCard } from '@/card/common/utils';
import {
  RuntimeContext,
  saveStudioBlock,
  useHandlerUrl,
} from '@opencraft/xblock-react-utils';
import SettingsForm from '@/card/card-carousel/studio-ui/SettingsForm';
import CarouselEditor from '@/card/common/studio-ui/CardListEditor';
import StudioForm from '@/card/common/studio-ui/StudioForm';

interface StudioUIProps {
  initData: InitData;
}

function StudioUI({ initData }: StudioUIProps) {
  const { runtime } = useContext(RuntimeContext);
  const saveUrl = useHandlerUrl('studio_save');
  const initialData = useMemo(
    () =>
      initData.cards.length
        ? initData
        : {
            ...initData,
            cards: [newCard([], { orientation: 'HORIZONTAL' as const })],
          },
    [initData],
  );

  return (
    <Formik
      initialValues={initialData}
      onSubmit={(values) => {
        saveStudioBlock<InitData>({
          saveUrl,
          data: values,
          runtime,
          errorMessage: 'Failed to save the card carousel.',
        });
      }}
    >
      <StudioForm
        id="card-carousel-studio-tabs"
        contentTab={<CarouselEditor enableCardOrientation />}
        settingsTab={<SettingsForm />}
      />
    </Formik>
  );
}

export default StudioUI;
