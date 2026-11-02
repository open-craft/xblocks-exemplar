import { useState, type ChangeEvent } from "react";
import { FileType, type Resource } from "@/external-resources/apiTypes";
import { ActionRow, Button, Container, Form, IconButton, Stack } from "@openedx/paragon";
import { DeleteOutline } from "@openedx/paragon/icons";


const generateId = (): string =>
  `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;

export const createEmptyResource = (): Resource => ({
  id: generateId(),
  url: "",
  title: "",
  publisher: "",
  expectedMinutes: 0,
  fileType: FileType.ARTICLE,
});

export interface ResourceFormProps {
  initialResource: Resource;
  isNewResource: boolean;
  onCancel: () => void;
  onSave: (resource: Resource) => void;
}

export const ResourceForm = ({
  initialResource,
  isNewResource = false,
  onCancel,
  onSave,
}: ResourceFormProps) => {
  const [resource, setResource] = useState(initialResource);
  const hours = Math.floor(resource.expectedMinutes / 60);
  const minutes = resource.expectedMinutes % 60;

  const setTime = (h: number, m: number) => setResource({ ...resource, expectedMinutes: h * 60 + m });

  return (
    <Container>
      <div className="d-flex w-100 justify-content-between">
        <span className="h3 text-primary-500">Add resource1</span>
        <IconButton
          variant="primary"
          src={DeleteOutline}
          alt={isNewResource ? "Cancel" : "Delete"}
          onClick={onCancel}
        />
      </div>
      
      <Form.Group>
        <Form.Label>
          <Stack>
            <span className="text-primary-500">Resource link</span>
            <small>Add the resource URL</small>
          </Stack>
        </Form.Label>
        <Form.Control
          value={resource.url}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setResource({ ...resource, url: e.target.value })
          }}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>
          <span className="text-primary-500">Title</span>
        </Form.Label>
        <Form.Control
          value={resource.title}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setResource({ ...resource, title: e.target.value })
          }}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>
          <span className="text-primary-500">Publisher</span>
        </Form.Label>
        <Form.Control
          value={resource.publisher}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setResource({ ...resource, publisher: e.target.value })
          }}
        />
      </Form.Group>
      <Stack direction="horizontal">
        <Form.Group>
          <Form.Label>
            <span className="text-primary-500">Estimated time</span>
          </Form.Label>
          <Stack direction="horizontal">
            <Form.Control
              value={hours}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                 setTime(Number(e.target.value) || 0, minutes)
              }}
            />
            <small>hr</small>
            <Form.Control
              value={minutes}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setTime(hours, Number(e.target.value) || 0)
              }}
            />
            <small>min</small>
          </Stack>
        </Form.Group>
      </Stack>
      <ActionRow>
        <Button variant="primary" onClick={() => onSave(resource)}>
          Save
        </Button>
        <Button variant="tertiary" onClick={() => onCancel()}>
          Cancel
        </Button>
        <ActionRow.Spacer />
      </ActionRow>
    </Container>
  )
};
