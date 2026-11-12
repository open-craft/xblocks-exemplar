import { ActionRow, Button, ModalDialog } from '@openedx/paragon';

interface StudioFooterProps {
  onCancel: () => void;
  /** Disables Save while a request is in flight; validation never disables it. */
  saving?: boolean;
}

export default function StudioFooter({
  onCancel,
  saving = false,
}: StudioFooterProps) {
  return (
    <ModalDialog.Footer className="us-editor-footer">
      <ActionRow>
        <ActionRow.Spacer />
        <Button variant="tertiary" type="button" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="primary" type="submit" disabled={saving}>
          {saving ? 'Saving…' : 'Save'}
        </Button>
      </ActionRow>
    </ModalDialog.Footer>
  );
}
