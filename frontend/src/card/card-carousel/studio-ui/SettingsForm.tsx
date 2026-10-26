import Form from '@openedx/paragon/dist/Form';
import ColorPicker from '@openedx/paragon/dist/ColorPicker';
import { useFormikContext } from 'formik';
import type { InitData } from '@/card/card-carousel/types';

export default function CreateCarouselForm() {
  const { values, setFieldValue, handleChange } = useFormikContext<InitData>();

  return (
    <div className="card-carousel-create-form">
      <Form.Group className="card-carousel-studio-field">
        <Form.Label>Display Name</Form.Label>
        <Form.Text muted>Name of the XBlock component in Studio.</Form.Text>
        <Form.Control
          type="text"
          name="displayName"
          value={values.displayName}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="card-carousel-studio-field">
        <Form.Checkbox
          name="disableNumbering"
          checked={!values.disableNumbering}
          onChange={(e: React.InputEvent<HTMLInputElement>) =>
            setFieldValue('disableNumbering', !e.currentTarget.checked)
          }
        >
          Add card numbers
        </Form.Checkbox>
        <Form.Text className="card-carousel-studio-help-text">
          Displays progress. For e.g., (2/4)
        </Form.Text>
      </Form.Group>

      <Form.Group className="card-carousel-studio-field card-carousel-studio-field--last">
        <Form.Label>Background Color</Form.Label>
        <ColorPicker
          color={values.backgroundColor}
          setColor={(color: string) => setFieldValue('backgroundColor', color)}
        />
      </Form.Group>
    </div>
  );
}
