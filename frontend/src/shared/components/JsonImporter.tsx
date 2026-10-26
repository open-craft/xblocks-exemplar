import { useState } from 'react';
import Dropzone from '@openedx/paragon/dist/Dropzone';
import Form from '@openedx/paragon/dist/Form';
import { Alert } from '@openedx/paragon';
import type { XBlockRuntime } from '@opencraft/xblock-react-utils';

interface JsonIOTabContentProps {
  runtime: XBlockRuntime;
  saveUrl: string;
}

/**
 * Shape of the validation errors returned by the `studio_save` handler. The
 * backend groups Pydantic errors by their message and returns in the format:
 * {
 *   "Error Message": ["list of field loc"],
 * }
 */
type ValidationIssues = Record<string, Array<string | number>>;

/**
 * Upload error can be the Pydantic Validation error or something else.
 * "string" here covers such generic error message cases.
 */
type UploadError = string | ValidationIssues;

interface FileData {
  get(k: string): Blob;
}
interface ProcessUploadParam {
  fileData: FileData;
  handleError(e: Error): void;
}

function ValidationError({ error }: { error: ValidationIssues }) {
  return (
    <ul className="mb-0 pl-3">
      {Object.entries(error).map(([message, location]) => (
        <li key={message}>
          {message}
          <ul>
            {location.map((i) => (
              <li key={i}>
                <code>{i}</code>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default function JsonImporter({
  runtime,
  saveUrl,
}: JsonIOTabContentProps) {
  const [uploadError, setUploadError] = useState<UploadError | null>(null);
  async function validateJson(file: File): Promise<string | null> {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (evt: ProgressEvent<FileReader>) => {
        try {
          JSON.parse(evt.target?.result as string);
          resolve(null);
        } catch {
          resolve('Invalid JSON.');
        }
      };
      reader.readAsText(file);
    });
  }

  /**
   * A custom save function that's different from `savStudioBlock` that allows
   * parsing the errors raised by Pydantic validation and present them in the
   * modal instead of relying on the runtime's error presentation.
   */
  const saveJson = ({ fileData, handleError }: ProcessUploadParam) => {
    runtime.notify('save', { state: 'start' });
    setUploadError(null);
    const blob = fileData.get('file');
    blob.text().then((jsonData: string) => {
      $.post(saveUrl, jsonData)
        .done(() => {
          runtime.notify('save', { state: 'end' });
        })
        .fail((e) => {
          handleError(new Error('Upload rejected.'));
          setUploadError(e.responseJSON?.error ?? e.responseText);
        });
    });
  };

  return (
    <div className="p-3">
      <Form.Group>
        <Form.Label>Update Component using JSON file</Form.Label>
        <Dropzone
          onProcessUpload={saveJson}
          accept={{
            'application/json': ['.json'],
          }}
          validator={validateJson}
        />
      </Form.Group>
      {uploadError && (
        <Alert variant="danger" className="mt-3">
          <Alert.Heading>JSON validation failed!</Alert.Heading>
          {typeof uploadError === 'string' ? (
            <p className="mb-0">{uploadError}</p>
          ) : (
            <ValidationError error={uploadError} />
          )}
        </Alert>
      )}
      <div className="mt-3">
        <h4>JSON Templates</h4>
        <p>
          <a
            className="m-2 btn btn-secondary"
            href={saveUrl.replace('studio_save', 'json_data?type=data')}
          >
            Download component data
          </a>
          <br />
          <small>
            The component data files contain the data of the current component
            without any schema information.
          </small>
        </p>
        <p>
          <a
            className="m-2 btn btn-secondary"
            href={saveUrl.replace('studio_save', 'json_data?type=schema')}
          >
            Download Schema
          </a>
          <br />
          <small>
            Schema files are useful for validating the JSON using external
            systems.
          </small>
        </p>
      </div>
    </div>
  );
}
