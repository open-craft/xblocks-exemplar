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

  const setRead = (resourceId: string, read: boolean) => {
    const previous = readResources;

    setReadResources(
      read
        ? [...previous, resourceId]
        : previous.filter((id) => id !== resourceId),
    );
    $.post(setReadUrl, JSON.stringify({ resourceId, read }))
      .done((response: { readResources: string[] }) => {
        setReadResources(response.readResources);
      })
      .fail(() => {
        setReadResources(previous);
      });
  };

  return (
    <div className="xblock-external-resources">
      <div className="external-resources-title">
        <span className="h4">{data.displayName}</span>
      </div>
      {data.resources.map((resource, index) => {
        let className: string | undefined = undefined;
        if (data.resources.length > 1) {
          if (index == 0) {
            className = 'first-card';
          } else if (index == data.resources.length - 1) {
            className = 'last-card';
          } else {
            className = 'middle-card';
          }
        }

        return (
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
            className={className}
            isClickable
          />
        );
      })}
    </div>
  );
};
