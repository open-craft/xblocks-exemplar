import {
  render,
  screen,
  waitFor,
  within,
} from '@opencraft/xblock-react-utils/testing';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { ThumbnailSelect, type ThumbnailSelectProps } from './ThumbnailSelect';

const renderSelect = (props: Partial<ThumbnailSelectProps> = {}) => {
  const onIconChange = vi.fn();
  const onImageChange = vi.fn();
  render(
    <>
      <ThumbnailSelect
        onIconChange={onIconChange}
        onImageChange={onImageChange}
        {...props}
      />
      <button type="button">Outside</button>
    </>,
  );
  return { onIconChange, onImageChange, user: userEvent.setup() };
};

const toggleButton = () =>
  screen.getByRole('button', { name: 'Choose thumbnail' });
const popover = () => screen.getByRole('dialog', { name: 'Choose thumbnail' });
const queryPopover = () =>
  screen.queryByRole('dialog', { name: 'Choose thumbnail' });

describe('ThumbnailSelect', () => {
  it('opens on the Icon tab, with the content type icons first', async () => {
    const { user } = renderSelect();
    expect(queryPopover()).not.toBeInTheDocument();

    await user.click(toggleButton());

    expect(toggleButton()).toHaveAttribute('aria-expanded', 'true');
    expect(
      within(popover()).getByRole('tab', { name: 'Icon' }),
    ).toHaveAttribute('aria-selected', 'true');
    const icons = within(popover())
      .getAllByRole('button')
      .map((button) => button.getAttribute('aria-label'));
    expect(icons.slice(0, 7)).toEqual([
      'article',
      'smart_display',
      'picture_as_pdf',
      'menu_book',
      'laptop',
      'touch_app',
      'local_library',
    ]);
  });

  it('marks the chosen icon', async () => {
    const { user } = renderSelect({ thumbnailIcon: 'laptop' });

    await user.click(toggleButton());

    expect(
      within(popover()).getByRole('button', { name: 'laptop' }),
    ).toHaveAttribute('aria-pressed', 'true');
  });

  it('picking an icon removes the image and closes the popover', async () => {
    const { onIconChange, onImageChange, user } = renderSelect({
      thumbnailUrl: 'https://example.com/thumb.png',
    });

    await user.click(toggleButton());
    await user.click(
      within(popover()).getByRole('button', { name: 'menu_book' }),
    );

    expect(onImageChange).toHaveBeenCalledWith(undefined);
    expect(onIconChange).toHaveBeenCalledWith('menu_book');
    expect(queryPopover()).not.toBeInTheDocument();
    expect(toggleButton()).toHaveFocus();
  });

  it('edits the image URL in the Image tab', async () => {
    const { onImageChange, user } = renderSelect({
      thumbnailUrl: 'https://example.com/old.png',
    });

    await user.click(toggleButton());
    await user.click(within(popover()).getByRole('tab', { name: 'Image' }));
    const urlField = within(popover()).getByLabelText('Image URL');
    expect(urlField).toHaveValue('https://example.com/old.png');

    await user.type(urlField, 'x');

    expect(onImageChange).toHaveBeenLastCalledWith(
      'https://example.com/old.pngx',
    );
    // Typing in the popover doesn't close it.
    expect(popover()).toBeInTheDocument();
  });

  it('closes with the toggle button', async () => {
    const { user } = renderSelect();

    await user.click(toggleButton());
    await user.click(toggleButton());

    expect(queryPopover()).not.toBeInTheDocument();
  });

  it('closes on Escape and gives the focus back to the toggle button', async () => {
    const { user } = renderSelect();

    await user.click(toggleButton());
    await user.keyboard('{Escape}');

    expect(queryPopover()).not.toBeInTheDocument();
    expect(toggleButton()).toHaveFocus();
  });

  it('closes when the focus moves outside', async () => {
    const { user } = renderSelect();

    await user.click(toggleButton());
    await user.click(screen.getByRole('button', { name: 'Outside' }));

    await waitFor(() => expect(queryPopover()).not.toBeInTheDocument());
  });
});
