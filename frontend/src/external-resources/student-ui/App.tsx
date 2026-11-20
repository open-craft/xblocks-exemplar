import { useState } from 'react';
import { Form } from '@openedx/paragon';
import { useHandlerUrl } from '@opencraft/xblock-react-utils';
import type { Data } from '../apiTypes';
import { ResourceCard } from '../common/ResourceCard';

export type StudentData = Data & {
  readResources: string[];
};

type AppProps = {
  data: StudentData;
};

export const App = ({ data }: AppProps) => {
  const setReadUrl = useHandlerUrl('set_read');
  const [readResources, setReadResources] = useState(data.readResources);

  const setRead = (resourceId: string, isRead: boolean) => {
    const previous = readResources;

    setReadResources(
      isRead
        ? [...previous, resourceId]
        : previous.filter((id) => id !== resourceId),
    );
    $.post(setReadUrl, JSON.stringify({ resourceId, read: isRead }))
      .done((response: { readResources: string[] }) => {
        setReadResources(response.readResources);
      })
      .fail(() => {
        setReadResources(previous);
      });
  };

  return (
    <div className="xblock-external-resources">
      <h4 className="external-resources-title">{data.displayName}</h4>
      <div className="external-resources-list">
        {data.resources.map((resource) => (
          <ResourceCard
            key={resource.id}
            resource={resource}
            actions={
              <div className="read-checkbox">
                <Form.Checkbox
                  checked={readResources.includes(resource.id)}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setRead(resource.id, e.target.checked)
                  }
                  aria-label={`Mark "${resource.title}" as read`}
                  controlClassName="rounded"
                />
                {/* Visual only: the checkbox's aria-label already says it. */}
                <span className="read-checkbox-tooltip" aria-hidden="true">
                  Mark as read
                </span>
              </div>
            }
            isClickable
          />
        ))}
      </div>
    </div>
  );
};
