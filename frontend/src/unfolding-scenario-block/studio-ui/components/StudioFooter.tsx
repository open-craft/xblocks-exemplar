import { ActionRow, Button, ModalDialog } from '@openedx/paragon';

interface StudioFooterProps {
  onCancel: () => void;
}

export default function StudioFooter({ onCancel }: StudioFooterProps) {
  return (
    <ModalDialog.Footer className="us-editor-footer">
      <ActionRow>
        <ActionRow.Spacer />
        <Button variant="tertiary" type="button" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </ActionRow>
    </ModalDialog.Footer>
  );
}
