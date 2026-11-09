import { render, screen, within } from '@opencraft/xblock-react-utils/testing';
import userEvent, { type UserEvent } from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { FileType, type Data, type Resource } from '../apiTypes';
import { App } from './App';

const makeResource = (id: string, title: string): Resource => ({
  id,
  url: `https://example.com/${id}`,
  title,
  publisher: 'Open edX',
  expectedMinutes: 5,
  fileType: FileType.ARTICLE,
});

const first = makeResource('r1', 'First article');
const second = makeResource('r2', 'Second article');

const makeData = (overrides: Partial<Data> = {}): Data => ({
  displayName: 'Essential Reading',
  resources: [first, second],
  ...overrides,
});

const renderApp = (data: Data = makeData()) => {
  const onSave = vi.fn();
  const onCancel = vi.fn();
  render(<App initialData={data} onSave={onSave} onCancel={onCancel} />);
  return { onSave, onCancel, user: userEvent.setup() };
};

/** The card that shows the given resource title. */
const card = (title: string) =>
  within(
    screen.getByText(title).closest('.external-resource-card') as HTMLElement,
  );

/** The Save and Cancel buttons of the whole editor, not the ones of a resource form. */
const editorActions = () =>
  within(document.querySelector('.xblock-actions') as HTMLElement);

const saveEditor = (user: UserEvent) =>
  user.click(editorActions().getByRole('button', { name: 'Save' }));

/** The open resource form, found by its heading ("Add resource" or "Edit resource"). */
const resourceForm = (heading: string) =>
  within(screen.getByText(heading).closest('.pgn__card') as HTMLElement);

const deleteModal = () =>
  screen.getByRole('dialog', { name: 'Delete resource?' });

describe('Studio App', () => {
  it('saves the block data from the editor Save button', async () => {
    const { onSave, user } = renderApp();

    await saveEditor(user);

    expect(onSave).toHaveBeenCalledWith(makeData());
  });

  it('cancels from the editor Cancel button', async () => {
    const { onSave, onCancel, user } = renderApp();

    await user.click(editorActions().getByRole('button', { name: 'Cancel' }));

    expect(onCancel).toHaveBeenCalled();
    expect(onSave).not.toHaveBeenCalled();
  });

  it('does not allow saving a block without resources', () => {
    renderApp(makeData({ resources: [] }));

    expect(
      editorActions().getByRole('button', { name: 'Save' }),
    ).toBeDisabled();
  });

  it('saves the display name edited in the header', async () => {
    const { onSave, user } = renderApp();

    await user.click(screen.getByRole('button', { name: 'Edit display name' }));
    const nameInput = screen.getByRole('textbox', { name: 'Display name' });
    await user.clear(nameInput);
    await user.type(nameInput, 'Further Reading{Enter}');
    await saveEditor(user);

    expect(onSave).toHaveBeenCalledWith(
      expect.objectContaining({ displayName: 'Further Reading' }),
    );
  });

  describe('adding a resource', () => {
    it('adds the resource at the end of the list', async () => {
      const { onSave, user } = renderApp();

      await user.click(
        screen.getByRole('button', { name: 'Add resource link' }),
      );
      expect(screen.getByText('Add resource')).toBeInTheDocument();

      await user.type(
        screen.getByLabelText(/resource link/i),
        'https://example.com/new',
      );
      await user.type(screen.getByLabelText(/title/i), 'New article');
      await user.type(screen.getByLabelText(/publisher/i), 'Open edX');
      await user.type(screen.getAllByPlaceholderText('0')[1], '10');
      await user.click(
        resourceForm('Add resource').getByRole('button', { name: 'Save' }),
      );

      expect(screen.queryByText('Add resource')).not.toBeInTheDocument();
      expect(screen.getByText('New article')).toBeInTheDocument();

      await saveEditor(user);
      const { resources } = onSave.mock.calls[0][0] as Data;
      expect(resources.map((r) => r.title)).toEqual([
        'First article',
        'Second article',
        'New article',
      ]);
    });

    it('closes the form without adding anything on Cancel', async () => {
      const { onSave, user } = renderApp();

      await user.click(
        screen.getByRole('button', { name: 'Add resource link' }),
      );
      await user.click(
        resourceForm('Add resource').getByRole('button', { name: 'Cancel' }),
      );

      expect(screen.queryByText('Add resource')).not.toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: 'Add resource link' }),
      ).toBeInTheDocument();
      await saveEditor(user);
      expect(onSave).toHaveBeenCalledWith(makeData());
    });
  });

  describe('editing a resource', () => {
    it('opens the edit form only for that card', async () => {
      const { user } = renderApp();

      await user.click(
        card('First article').getByRole('button', { name: 'Edit' }),
      );

      expect(screen.getByText('Edit resource')).toBeInTheDocument();
      expect(screen.getByLabelText(/title/i)).toHaveValue('First article');
      // The other card stays a card, and can't be edited at the same time.
      expect(
        card('Second article').getByRole('button', { name: 'Edit' }),
      ).toBeDisabled();
    });

    it('updates the resource in place on Save', async () => {
      const { onSave, user } = renderApp();

      await user.click(
        card('First article').getByRole('button', { name: 'Edit' }),
      );
      await user.clear(screen.getByLabelText(/title/i));
      await user.type(screen.getByLabelText(/title/i), 'Updated article');
      await user.click(
        resourceForm('Edit resource').getByRole('button', { name: 'Save' }),
      );

      expect(screen.queryByText('Edit resource')).not.toBeInTheDocument();
      await saveEditor(user);
      expect(onSave).toHaveBeenCalledWith(
        makeData({
          resources: [{ ...first, title: 'Updated article' }, second],
        }),
      );
    });

    it('discards the changes on Cancel', async () => {
      const { onSave, user } = renderApp();

      await user.click(
        card('First article').getByRole('button', { name: 'Edit' }),
      );
      await user.type(screen.getByLabelText(/title/i), ' changed');
      await user.click(
        resourceForm('Edit resource').getByRole('button', { name: 'Cancel' }),
      );

      expect(screen.getByText('First article')).toBeInTheDocument();
      await saveEditor(user);
      expect(onSave).toHaveBeenCalledWith(makeData());
    });
  });

  describe('deleting a resource', () => {
    it('asks for confirmation before deleting from the card', async () => {
      const { user } = renderApp();

      await user.click(
        card('First article').getByRole('button', { name: 'Delete' }),
      );

      expect(
        within(deleteModal()).getByText(
          /“First article” will be permanently deleted/,
        ),
      ).toBeInTheDocument();
    });

    it('deletes the resource when confirmed', async () => {
      const { onSave, user } = renderApp();

      await user.click(
        card('First article').getByRole('button', { name: 'Delete' }),
      );
      await user.click(
        within(deleteModal()).getByRole('button', { name: 'Delete resource' }),
      );

      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      expect(screen.queryByText('First article')).not.toBeInTheDocument();
      await saveEditor(user);
      expect(onSave).toHaveBeenCalledWith(makeData({ resources: [second] }));
    });

    it('keeps the resource when the deletion is cancelled', async () => {
      const { user } = renderApp();

      await user.click(
        card('First article').getByRole('button', { name: 'Delete' }),
      );
      await user.click(
        within(deleteModal()).getByRole('button', { name: 'Cancel' }),
      );

      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      expect(screen.getByText('First article')).toBeInTheDocument();
    });

    it('deletes the resource being edited and closes its form', async () => {
      const { user } = renderApp();

      await user.click(
        card('First article').getByRole('button', { name: 'Edit' }),
      );
      await user.click(
        resourceForm('Edit resource').getByRole('button', { name: 'Delete' }),
      );
      await user.click(
        within(deleteModal()).getByRole('button', { name: 'Delete resource' }),
      );

      expect(screen.queryByText('Edit resource')).not.toBeInTheDocument();
      expect(screen.queryByText('First article')).not.toBeInTheDocument();
      expect(
        card('Second article').getByRole('button', { name: 'Edit' }),
      ).toBeEnabled();
    });
  });
});
