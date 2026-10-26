import { Button, ModalDialog, Stack } from '@openedx/paragon';
import type { XBlockRuntime } from '@opencraft/xblock-react-utils';

interface ModalFooterProps {
  runtime: XBlockRuntime;
  showingEditor: boolean;
  onContinue: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ModalFooter({
  runtime,
  showingEditor,
  onContinue,
}: ModalFooterProps) {
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
