import { render, screen } from '@opencraft/xblock-react-utils/testing';
import userEvent, { type UserEvent } from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { FileType, type Resource } from '@/external-resources/apiTypes';
import { createEmptyResource } from '../resourceDraft';
import { ResourceForm, type ResourceFormProps } from './ResourceForm';

const savedResource: Resource = {
  id: 'resource-1',
  url: 'https://example.com/article',
  title: 'Understanding vascular disease',
  publisher: 'American Heart Association',
  expectedMinutes: 90,
  fileType: FileType.PDF,
};

const renderForm = (props: Partial<ResourceFormProps> = {}) => {
  const onSave = vi.fn();
  const onCancel = vi.fn();
  render(
    <ResourceForm
      initialResource={createEmptyResource()}
      isNewResource
      onSave={onSave}
      onCancel={onCancel}
      {...props}
    />,
  );
  return { onSave, onCancel, user: userEvent.setup() };
};

const field = (label: RegExp) => screen.getByLabelText(label);
// Both time fields share the "Estimated time" label, so they are found by placeholder.
const timeFields = () => {
  const [hours, minutes] = screen.getAllByPlaceholderText('0');
  return { hours, minutes };
};
const save = (user: UserEvent) =>
  user.click(screen.getByRole('button', { name: 'Save' }));

const fillRequiredFields = async (user: UserEvent) => {
  await user.type(field(/resource link/i), 'https://example.com/new');
  await user.type(field(/title/i), 'New article');
  await user.type(field(/publisher/i), 'Open edX');
};

describe('ResourceForm', () => {
  it('saves the new resource, with the time in minutes', async () => {
    const { onSave, user } = renderForm();

    await fillRequiredFields(user);
    await user.type(timeFields().hours, '1');
    await user.type(timeFields().minutes, '30');
    await save(user);

    expect(onSave).toHaveBeenCalledWith(
      expect.objectContaining({
        url: 'https://example.com/new',
        title: 'New article',
        publisher: 'Open edX',
        expectedMinutes: 90,
      }),
    );
  });

  it('shows the errors of the required fields instead of saving', async () => {
    const { onSave, user } = renderForm();

    await save(user);

    expect(screen.getByText('Add the resource URL.')).toBeInTheDocument();
    expect(screen.getByText('Add a title.')).toBeInTheDocument();
    expect(screen.getByText('Add a publisher.')).toBeInTheDocument();
    expect(
      screen.getByText('The estimated time must be at least 1 minute.'),
    ).toBeInTheDocument();
    expect(onSave).not.toHaveBeenCalled();
  });

  it('rejects a URL without http(s)', async () => {
    const { onSave, user } = renderForm();

    await fillRequiredFields(user);
    await user.clear(field(/resource link/i));
    await user.type(field(/resource link/i), 'www.example.com');
    await user.type(timeFields().minutes, '5');
    await save(user);

    expect(
      screen.getByText('Enter a full URL starting with http:// or https://.'),
    ).toBeInTheDocument();
    expect(onSave).not.toHaveBeenCalled();
  });

  it('removes an error once the field is fixed', async () => {
    const { user } = renderForm();

    await save(user);
    await user.type(field(/title/i), 'New article');

    expect(screen.queryByText('Add a title.')).not.toBeInTheDocument();
    expect(screen.getByText('Add a publisher.')).toBeInTheDocument();
  });

  it('keeps only digits in the time fields, and at most 59 minutes', async () => {
    const { user } = renderForm();

    await user.type(timeFields().hours, '2h');
    await user.type(timeFields().minutes, '75');

    expect(timeFields().hours).toHaveValue('2');
    expect(timeFields().minutes).toHaveValue('59');
  });

  it('edits an existing resource, keeping its id', async () => {
    const { onSave, user } = renderForm({
      initialResource: savedResource,
      isNewResource: false,
    });

    expect(screen.getByText('Edit resource')).toBeInTheDocument();
    expect(timeFields().hours).toHaveValue('1');
    expect(timeFields().minutes).toHaveValue('30');

    await user.clear(field(/title/i));
    await user.type(field(/title/i), 'Updated title');
    await save(user);

    expect(onSave).toHaveBeenCalledWith({
      ...savedResource,
      title: 'Updated title',
    });
  });

  it('replaces the thumbnail image with the chosen icon', async () => {
    // Choosing an icon clears the image and sets the icon in the same click,
    // and the second change must not bring the old image back.
    const { onSave, user } = renderForm({
      initialResource: {
        ...savedResource,
        thumbnailUrl: 'https://example.com/thumb.png',
      },
      isNewResource: false,
    });

    await user.click(screen.getByRole('button', { name: 'Choose thumbnail' }));
    await user.click(screen.getByRole('button', { name: 'menu_book' }));
    await save(user);

    expect(onSave).toHaveBeenCalledWith({
      ...savedResource,
      thumbnailUrl: undefined,
      thumbnailIcon: 'menu_book',
    });
  });

  it('deletes an existing resource from its delete button', async () => {
    const onDelete = vi.fn();
    const { user } = renderForm({
      initialResource: savedResource,
      isNewResource: false,
      onDelete,
    });

    await user.click(screen.getByRole('button', { name: 'Delete' }));

    expect(onDelete).toHaveBeenCalled();
  });

  it('has no delete button for a new resource', () => {
    renderForm();

    expect(screen.getByText('Add resource')).toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: 'Delete' }),
    ).not.toBeInTheDocument();
  });

  it('cancels without saving', async () => {
    const { onSave, onCancel, user } = renderForm();

    await user.click(screen.getByRole('button', { name: 'Cancel' }));

    expect(onCancel).toHaveBeenCalled();
    expect(onSave).not.toHaveBeenCalled();
  });
});
