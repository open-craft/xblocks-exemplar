import { type Data } from '../apiTypes';
import { useState } from 'react';
import { Intro } from './components/Intro';
import { Activity } from './components/Activity';
import { RenderInWindow } from './components/RenderInWindow';
import { colourVariantStyle } from '../variants';

interface AppProps {
  data: Data;
  cssContent: string;
  themeUrls: string[];
}

export const App = ({ data, themeUrls, cssContent }: AppProps) => {
  const [activityOpen, setActivityOpen] = useState(false);

  const rootClass = 'xblock-unfolding-scenario-wrapper';
  // Both mounts need the tokens: the inline wrapper and the popup container,
  // which re-declares the same class in a separate document.
  const variantStyle = colourVariantStyle(data.scenarioData.colorVariant);

  return (
    <div className={rootClass} style={variantStyle}>
      {activityOpen && (
        <RenderInWindow
          title={data.scenarioData.name}
          className={`${rootClass} min-vh-100`}
          style={variantStyle}
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
