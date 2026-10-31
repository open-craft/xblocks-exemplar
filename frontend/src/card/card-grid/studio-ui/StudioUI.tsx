import { useState } from 'react';
import { Form, Formik } from 'formik';
import { type InitData } from '../types';
import {
  saveStudioBlock,
  type XBlockRuntime,
} from '@opencraft/xblock-react-utils';
import CreateCardGridForm from './components/CreateCardGridForm';
import CarouselEditor from '@/card/common/studio-ui/CardListEditor';
import ModalFooter from '@/card/common/studio-ui/ModalFooter';

interface StudioUIProps {
  saveUrl: string;
  runtime: XBlockRuntime;
  initData: InitData;
}

function StudioUI({ runtime, saveUrl, initData }: StudioUIProps) {
  const [showCardEditor, setShowCardEditor] = useState(false);

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
      <Form>
        <div className="studio-ui card-grid-studio">
          {showCardEditor ? <CarouselEditor /> : <CreateCardGridForm />}
          <ModalFooter
            showingEditor={showCardEditor}
            onContinue={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              setShowCardEditor(true);
            }}
          />
        </div>
      </Form>
    </Formik>
  );
}

export default StudioUI;
