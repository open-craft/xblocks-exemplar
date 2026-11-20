import {
  useHandlerUrl,
  RuntimeContext,
  saveStudioBlock,
} from '@opencraft/xblock-react-utils';
import { useContext } from 'react';
import { Formik } from 'formik';
import Editor from './components/Editor.tsx';
import type { CoverBlockFields } from '../apiTypes.ts';

const App = (data: CoverBlockFields) => {
  const { runtime } = useContext(RuntimeContext);
  const studioSaveUrl = useHandlerUrl('studio_save');
  const handleSave = (saveData: CoverBlockFields) => {
    return saveStudioBlock<CoverBlockFields>({
      saveUrl: studioSaveUrl,
      data: saveData,
      runtime,
      errorMessage: 'Failed to save cover block configuration',
    });
  };
  return (
    <Formik initialValues={data} onSubmit={handleSave}>
      <Editor />
    </Formik>
  );
};

export default App;
