import { useWindowSize, breakpoints } from '@openedx/paragon';
import { Button } from '@openedx/paragon';
import { ModalBase } from './ModalBase';

interface LeaveConfirmModalProps {
  onCancel: () => void;
  onConfirm: () => void;
}

export const LeaveConfirmModal = ({
  onCancel,
  onConfirm,
}: LeaveConfirmModalProps) => {
  const windowSize = useWindowSize();
  const width = windowSize.width || window.innerWidth;
  const isMobile = width < breakpoints.extraSmall.maxWidth!;

  return (
    <ModalBase onCancel={onCancel} title="Leave interactive?">
      <div className="m-3">
        <h5 className="text-interact-headings">Leave interactive?</h5>
        <p className="text-sec-content">
          If you leave now, your progress in this interactive will be lost.
        </p>
        <div className="text-center">
          <Button
            variant="outline-primary"
            className={`${isMobile ? 'w-100 mb-3' : ''}`}
            onClick={onConfirm}
            block={isMobile}
          >
            Leave
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
