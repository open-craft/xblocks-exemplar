import { useState } from "react";
import { ActionRow, Button, Stack, Sticky, useToggle } from "@openedx/paragon";

import type { Data, Resource } from "../apiTypes";
import { Plus } from "@openedx/paragon/icons";
import { createEmptyResource, ResourceForm } from "./components/ResourceForm";
import { ResourceCard } from "../common/ResourceCard";
import { ResourceActions } from "./components/ResourceActions";
import { DeleteResourceModal } from "./components/DeleteResourceModal";
import { SortableResource } from "./components/SortableResource";
import { DragDropProvider } from "@dnd-kit/react";
import { move } from "@dnd-kit/helpers";

type AppProps = {
  initialData: Data;
  onSave: (data: Data) => void;
  onCancel: () => void;
};

export const App = ({ initialData, onSave, onCancel }: AppProps) => {
  const [data, setData] = useState(initialData);
  const [addNewFormIsShow, showAddNewForm, hideAddNewForm] = useToggle(false);
  const [editFormIsShow, showEditForm, hideEditForm] = useToggle(false);
  const [editingResourceId, setEditingResourceId] = useState<string | undefined>();
  const [resourceToDelete, setResourceToDelete] = useState<Resource | undefined>();

  const deleteResource = (resource: Resource) => {
    setData((current) => ({
      ...current,
      resources: current.resources.filter((r) => r.id !== resource.id),
    }));
    setResourceToDelete(undefined);
    if (editingResourceId === resource.id) {
      hideEditForm();
    }
  };

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
        <DragDropProvider
          onDragOver={(event) =>
            setData((current) => ({
              ...current,
              resources: move(current.resources, event),
            }))
          }
        >
          <Stack gap={2}>
            {
              data.resources.map((resource, index) => (
                editFormIsShow && editingResourceId === resource.id ? (
                  <ResourceForm 
                    key={resource.id}
                    initialResource={resource}
                    onCancel={hideEditForm}
                    onSave={((resource) => {
                      setData((current) => ({
                        ...current,
                        resources: current.resources.map((r) =>
                          r.id === resource.id ? resource : r,
                        ),
                      }));
                      hideEditForm();
                    })}
                    onDelete={() => setResourceToDelete(resource)}
                  />
                ) : (
                  <SortableResource
                    key={resource.id}
                    id={resource.id}
                    index={index}
                    disabled={editFormIsShow}
                  >
                    {(dragHandleRef) => (
                      <ResourceCard
                        resource={resource}
                        actions={(
                          <ResourceActions
                            onDelete={() => setResourceToDelete(resource)}
                            onEdit={() => {
                              setEditingResourceId(resource.id);
                              showEditForm();
                            }}
                            disableEdit={editFormIsShow}
                            dragHandleRef={dragHandleRef}
                          />
                        )}
                      />
                    )}
                  </SortableResource>
                )
              ))
            }
          </Stack>
        </DragDropProvider>
        <DeleteResourceModal
          resource={resourceToDelete}
          onConfirm={deleteResource}
          onClose={() => setResourceToDelete(undefined)}
        />
        {addNewFormIsShow ? (
          <ResourceForm
            initialResource={createEmptyResource()}
            onCancel={hideAddNewForm}
            onSave={((resource) => {
              setData((current) => ({
                ...current,
                resources: [...current.resources, resource],
              }));
              hideAddNewForm();
            })}
            isNewResource
          />   
        ) : (
          <Button variant="outline-primary" iconBefore={Plus} onClick={showAddNewForm}>
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

