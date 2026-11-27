import { type Data } from '../apiTypes';
import { Intro } from './components/Intro';
import { Activity } from './components/Activity';
import { useEffect } from 'react';

interface AppProps {
  data: Data;
  usageId: string;
}

const MODAL_MAGIC_STRING = 'unfolding-scenario-modal';

// This app is an entry point for two separate views:
// 1. the intro page loaded in the normal content iframe along with other course content,
// 2. the fullscreen activity view loaded in a separate iframe in the Learning MFE fullscreen modal
//    (triggered when the user clicks "Launch activity").
// The component loads in a course in an iframe, and the component itself cannot expand outside the boundaries of the iframe.
// So to get a fullscreen view, we request the parent Learning MFE to launch a fullscreen modal,
// loading this app in a separate iframe in that modal.
// This could also be done with two completely separate entry points instead of sharing the App,
// but for now this is quicker to sort out, since more code is shared and we can re-use the backend student_view as-is.
export const App = (props: AppProps) => {
  const isModal = new URLSearchParams(window.location.search).has(
    MODAL_MAGIC_STRING,
  );

  return isModal ? <ModalActivityApp {...props} /> : <MainApp {...props} />;
};

// This is loaded in a separate iframe in the fullscreen modal by the Learning MFE.
const ModalActivityApp = ({ data }: AppProps) => {
  // To close, we need to request the Learning MFE to close the fullscreen modal,
  // killing this copy of the app loaded in the modal.
  const closeActivity = () => {
    window.parent.postMessage(
      {
        type: 'plugin.modal-close',
      },
      '*',
    );
  };

  return (
    <div className="xblock-unfolding-scenario-wrapper">
      <Activity data={data.scenarioData} onExit={closeActivity} />
    </div>
  );
};

// This is loaded in the course content, in the shared content iframe, by the Learning MFE.
const MainApp = ({ data, usageId }: AppProps) => {
  const launchActivity = () => {
    // Currently, the content iframe height and scroll position are messed up when the Learning MFE opens the modal.
    // See https://github.com/openedx/frontend-app-learning/issues/2269.
    // As a workaround we need to request the Learning MFE to save the current scroll position before opening the modal,
    // then we can restore the scroll position and fix the height later when the Learning MFE notifies that the modal has been closed.
    // The videoFullScreen message can be used to save and restore the scroll position (`open: true` to save, `open: false` to restore).
    window.parent.postMessage(
      { type: 'plugin.videoFullScreen', payload: { open: true } },
      '*',
    );

    // Request the Learning MFE to launch the modal with the url to this xblock, loading this same entrypoint in a separate iframe.
    // Use the magic string so that app knows it's the copy loading in the modal.
    // Note that existing params must be retained,
    // because they can be important, such as `preview=1` for loading the preview version of the block.
    // These params come from the content iframe, not the top level, so you will not see these in the url bar.
    const params = new URLSearchParams(window.location.search);
    params.set(MODAL_MAGIC_STRING, '1');
    window.parent.postMessage(
      {
        type: 'plugin.modal',
        payload: {
          url: `${window.location.origin}/xblock/${usageId}?${params}`,
          title: data.displayName,
          isFullscreen: true,
          height: '100vh',
          // Must use utility classes; this modal is in the parent window to this app, and we cannot apply css to it from here.
          // Any custom css must be added using a custom theme.
          modalBodyClassName:
            'unfolding-scenario-fullscreen-modal p-0 overflow-hidden w-100 vh-100',
        },
      },
      '*',
    );
  };

  useEffect(() => {
    // Listen for the Learning MFE to inform when the fullscreen modal activity has been closed,
    // so we can restore the iframe height and scroll position.
    const handleMessages = (event: MessageEvent) => {
      if (
        event.source === window.parent &&
        event.data?.type === 'plugin.modal-close'
      ) {
        const content = document.getElementById('content') ?? document.body;
        window.parent.postMessage(
          {
            type: 'plugin.resize',
            payload: {
              width: content.offsetWidth,
              height: content.offsetHeight,
            },
          },
          '*',
        );

        // Restore the scroll position, waiting a little so the content has finished resizing first.
        window.setTimeout(() => {
          window.parent.postMessage(
            { type: 'plugin.videoFullScreen', payload: { open: false } },
            '*',
          );
        }, 150);
      }
    };
    window.addEventListener('message', handleMessages);
    return () => window.removeEventListener('message', handleMessages);
  }, []);

  return (
    <div className="xblock-unfolding-scenario-wrapper">
      <Intro
        name={data.scenarioData.name}
        introduction={data.scenarioData.introduction}
        onLaunch={launchActivity}
      />
    </div>
  );
};
