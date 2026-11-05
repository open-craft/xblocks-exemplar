import { useState } from "react";
import { ActionRow, Button, Stack, Sticky, useToggle } from "@openedx/paragon";

import type { Data } from "../apiTypes";
import { Plus } from "@openedx/paragon/icons";
import { createEmptyResource, ResourceForm } from "./components/ResourceForm";
import { ResourceCard } from "../common/ResourceCard";

type AppProps = {
  initialData: Data;
  onSave: (data: Data) => void;
  onCancel: () => void;
};

export const App = ({ initialData, onSave, onCancel }: AppProps) => {
  const [data, setData] = useState(initialData);
  const [isShowForm, showForm, hideForm] = useToggle(false);

  return (
    <div className="external-resources-xblock-editor editor-with-buttons bg-light-200">
      <div className="wrapper-comp-settings is-active external-resources-editor-body p-4">
        <div>
          <p className="h3 text-primary-500">
            Resources 
          </p>
          <p className="text-primary-500">
            Learners see resources in the order they're added and can mark each as read.
          </p>
        </div>
        <Stack gap={2}>
          {
            data.resources.map((resource) => (
              <ResourceCard
                key={resource.id}
                resource={resource}
              />
            ))
          }
        </Stack>
        {isShowForm ? (
          <ResourceForm
            initialResource={createEmptyResource()}
            onCancel={hideForm}
            onSave={((resource) => {
              setData((current) => ({
                ...current,
                resources: [...current.resources, resource],
              }));
              hideForm();
            })}
            isNewResource
          />   
        ) : (
          <Button variant="outline-primary" iconBefore={Plus} onClick={showForm}>
            Add resource link
          </Button>
        )}
      </div>
      <Sticky
        position="bottom"
        className="xblock-actions two-column-editor-actions"
      >
        <ActionRow>
          <Button variant="tertiary" onClick={() => onCancel()}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => onSave(data)}>
            Save
          </Button>
        </ActionRow>
      </Sticky>
    </div>
  );
}

