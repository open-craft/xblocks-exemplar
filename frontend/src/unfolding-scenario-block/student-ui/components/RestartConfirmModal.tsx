import { useWindowSize, breakpoints } from '@openedx/paragon';
import { Button } from '@openedx/paragon';
import { ModalBase } from './ModalBase';

interface RestartConfirmModalProps {
  onCancel: () => void;
  onConfirm: () => void;
}

export const RestartConfirmModal = ({
  onCancel,
  onConfirm,
}: RestartConfirmModalProps) => {
  const windowSize = useWindowSize();
  const width = windowSize.width || window.innerWidth;
  const isMobile = width < breakpoints.extraSmall.maxWidth!;

  return (
    <ModalBase onCancel={onCancel} title="Restart interactive?">
      <div className="m-3">
        <h5 className="text-interact-headings">Restart interactive?</h5>
        <p className="text-sec-content">
          If you restart, your progress in this interactive will be lost.
        </p>
        <div className="text-center">
          <Button
            variant="outline-primary"
            className={`${isMobile ? 'w-100 mb-3' : ''}`}
            onClick={onConfirm}
            block={isMobile}
          >
            Restart
          </Button>
          <Button
            variant="primary"
            className={`${isMobile ? 'w-100' : 'ml-3'}`}
            onClick={onCancel}
            block={isMobile}
          >
            Stay
          </Button>
        </div>
      </div>
    </ModalBase>
  );
};
