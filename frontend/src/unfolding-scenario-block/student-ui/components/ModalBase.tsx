import {
  ModalBackdrop,
  ModalContentContainer,
} from '@openedx/paragon/dist/Modal/ModalLayer';
import type { ReactNode } from 'react';
import { FocusOn } from 'react-focus-on';

interface ModalBaseProps {
  title: string;
  onCancel: () => void;
  children: ReactNode;
}

// NOTE: we cannot use high level Paragon modals here,
// because they are attached to a root object outside of the xblock tree,
// so the custom styles aren't applied.
// This base modal is a simplified and opinionated implementation of the Paragon modal, without the createPortal.
export const ModalBase = ({ onCancel, title, children }: ModalBaseProps) => {
  return (
    <FocusOn
      allowPinchZoom
      scrollLock
      enabled={true}
      onEscapeKey={onCancel}
      // Disable clickoutside because it doesn't interact well when on top of the activity fullscreen modal (clicking on the modal buttons just triggers clickoutside).
      onClickOutside={() => {}}
      className="pgn__modal-layer"
    >
      <ModalContentContainer>
        <ModalBackdrop onClick={onCancel} />
        <div
          role="dialog"
          aria-label={title}
          className="pgn__modal pgn__modal-md pgn__modal-default p-3"
        >
          {children}
        </div>
      </ModalContentContainer>
    </FocusOn>
  );
};
