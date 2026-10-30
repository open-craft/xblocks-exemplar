import { createPortal } from 'react-dom';
import { useEffect, useState, type ReactElement } from 'react';

interface RenderInWindowProps {
  children: ReactElement;
  cssContent: string; // css content specific to this xblock, in addition to the theming css
  className: string;
  themeUrls: string[];
  title: string;
  onClose: () => void; // called when the window itself is closed by the user
}

// Source: https://stackoverflow.com/a/64391469
export const RenderInWindow = ({
  children,
  className,
  cssContent,
  themeUrls,
  title,
  onClose,
}: RenderInWindowProps) => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);

  if (container === null) {
    // Create container element on client-side
    const div = document.createElement('div');
    div.className = className;
    setContainer(div);
  }

  useEffect(() => {
    // When container is ready
    if (container) {
      // Create window
      const newWindow = window.open();
      if (newWindow == null) {
        alert(
          'Activity failed to open in a popup window or new tab. Please enable popups and try again.',
        );
        onClose();
        return;
      }

      // if the user closes the window manually
      newWindow.addEventListener('beforeunload', () => {
        onClose();
      });

      // set the viewport config, especially so it scales properly on mobile
      const metaViewport = newWindow.document.createElement('meta');
      metaViewport.name = 'viewport';
      metaViewport.content = 'width=device-width,initial-scale=1';
      newWindow.document.head.appendChild(metaViewport);

      // set a proper title for the new window
      const titleEl = newWindow.document.createElement('title');
      titleEl.textContent = title;
      newWindow.document.head.appendChild(titleEl);

      // Inject the container and styles into the new window
      newWindow.document.body.appendChild(container);

      themeUrls.forEach((url) => {
        const link = newWindow.document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        newWindow.document.head.appendChild(link.cloneNode());
      });

      const styleEl = newWindow.document.createElement('style');
      styleEl.textContent = cssContent;
      newWindow.document.head.appendChild(styleEl);

      // Return cleanup function - close the window when this element is removed from the DOM
      return () => newWindow.close();
    }
  }, [container]); // eslint-disable-line react-hooks/exhaustive-deps

  return container && createPortal(children, container);
};
