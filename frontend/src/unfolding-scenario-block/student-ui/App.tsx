import { type Data } from '../apiTypes';
import { useState } from 'react';
import { Intro } from './components/Intro';
import { Activity } from './components/Activity';
import { RenderInWindow } from './components/RenderInWindow';

interface AppProps {
  data: Data;
  cssContent: string;
  themeUrls: string[];
}

export const App = ({ data, themeUrls, cssContent }: AppProps) => {
  const [activityOpen, setActivityOpen] = useState(false);

  const rootClass = 'xblock-unfolding-scenario-wrapper';

  return (
    <div className={rootClass}>
      {activityOpen && (
        <RenderInWindow
          title={data.scenarioData.name}
          className={`${rootClass} min-vh-100`}
          themeUrls={themeUrls}
          cssContent={cssContent}
          onClose={() => setActivityOpen(false)}
        >
          <Activity
            data={data.scenarioData}
            onExit={() => setActivityOpen(false)}
          />
        </RenderInWindow>
      )}
      <Intro
        name={data.scenarioData.name}
        introduction={data.scenarioData.introduction}
        onLaunch={() => setActivityOpen(true)}
        activityOpen={activityOpen}
      />
    </div>
  );
};
