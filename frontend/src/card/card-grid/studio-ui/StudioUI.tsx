import { useContext } from 'react';
import { Formik } from 'formik';
import { type InitData } from '../types';
import {
  RuntimeContext,
  saveStudioBlock,
  useHandlerUrl,
} from '@opencraft/xblock-react-utils';
import StudioForm from '@/card/common/studio-ui/StudioForm';

import SettingsForm from './components/SettingsForm';
import ContentForm from './components/ContentForm.tsx';

interface StudioUIProps {
  initData: InitData;
}

function StudioUI({ initData }: StudioUIProps) {
  const { runtime } = useContext(RuntimeContext);
  const saveUrl = useHandlerUrl('studio_save');

  return (
    <Formik
      initialValues={initData}
      onSubmit={(values) => {
        saveStudioBlock<InitData>({
          saveUrl,
          data: values,
          runtime,
          errorMessage: 'Failed to save the card grid.',
        });
      }}
    >
      <StudioForm
        id="card-grid-studio-tabs"
        contentTab={<ContentForm />}
        settingsTab={<SettingsForm />}
      />
    </Formik>
  );
}

export default StudioUI;
