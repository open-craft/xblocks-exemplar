import { useContext } from 'react';
import { Button, ModalDialog, Stack } from '@openedx/paragon';
import { RuntimeContext } from '@opencraft/xblock-react-utils';

interface ModalFooterProps {
  showingEditor: boolean;
  onContinue: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ModalFooter({
  showingEditor,
  onContinue,
}: ModalFooterProps) {
  const { runtime } = useContext(RuntimeContext);
  return (
    <ModalDialog.Footer className="border-top">
      <Stack direction="horizontal" gap={4}>
        <Button
          variant="light"
          className="action-button"
          onClick={() => runtime.notify('cancel', {})}
          type="button"
        >
          Cancel
        </Button>
        {showingEditor ? (
          <Button variant="primary" type="submit" className="save-button">
            Save
          </Button>
        ) : (
          <Button
            type="button"
            variant="primary"
            className="save-button"
            onClick={onContinue}
          >
            Continue
          </Button>
        )}
      </Stack>
    </ModalDialog.Footer>
  );
}
