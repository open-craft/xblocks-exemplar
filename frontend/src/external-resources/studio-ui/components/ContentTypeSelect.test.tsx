import { useState } from 'react';
import { render, screen } from '@opencraft/xblock-react-utils/testing';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { FileType } from '@/external-resources/apiTypes';
import { ContentTypeSelect } from './ContentTypeSelect';

interface HarnessProps {
  initialFileType?: FileType;
  initialCustomFileType?: string;
}

/** Keeps the value like ResourceForm does, so the input shows what was chosen. */
const renderSelect = ({
  initialFileType = FileType.ARTICLE,
  initialCustomFileType = '',
}: HarnessProps = {}) => {
  const onChange = vi.fn();

  const Harness = () => {
    const [value, setValue] = useState({
      fileType: initialFileType,
      customFileType: initialCustomFileType,
    });
    return (
      <>
        <ContentTypeSelect
          fileType={value.fileType}
          customFileType={value.customFileType}
          onChange={(fileType, customFileType) => {
            onChange(fileType, customFileType);
            setValue({ fileType, customFileType });
          }}
        />
        <button type="button">Outside</button>
      </>
    );
  };

  render(<Harness />);
  return { onChange, user: userEvent.setup() };
};

const input = () => screen.getByRole('combobox');
const options = () =>
  screen.queryAllByRole('option').map((option) => option.textContent);

describe('ContentTypeSelect', () => {
  it('shows the label of the current type', () => {
    renderSelect({ initialFileType: FileType.TEXTBOOK });

    expect(input()).toHaveValue('Textbook / Book');
  });

  it('shows the custom type when the type is CUSTOM', () => {
    renderSelect({
      initialFileType: FileType.CUSTOM,
      initialCustomFileType: 'Podcast',
    });

    expect(input()).toHaveValue('Podcast');
  });

  it('lists every predefined type and picks the clicked one', async () => {
    const { onChange, user } = renderSelect();

    await user.click(input());
    expect(options()).toHaveLength(7);

    await user.click(screen.getByRole('option', { name: 'PDF' }));

    expect(onChange).toHaveBeenCalledWith(FileType.PDF, '');
    expect(input()).toHaveValue('PDF');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('opens and closes the list with the arrow button', async () => {
    const { user } = renderSelect();

    await user.click(
      screen.getByRole('button', { name: 'Open content types' }),
    );
    expect(screen.getByRole('listbox')).toBeInTheDocument();

    await user.click(
      screen.getByRole('button', { name: 'Close content types' }),
    );
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('filters the types while typing', async () => {
    const { user } = renderSelect();

    await user.clear(input());
    await user.type(input(), 'vi');

    // Matches anywhere in the label, not only at the start.
    expect(options()).toEqual([
      'Video',
      'Virtual machines',
      'Interactive activities',
    ]);
  });

  it('offers to create a custom type when nothing matches', async () => {
    const { onChange, user } = renderSelect();

    await user.clear(input());
    await user.type(input(), 'Podcast');
    const create = screen.getByRole('option');
    expect(create).toHaveTextContent('Create "Podcast"');
    await user.click(create);

    expect(onChange).toHaveBeenCalledWith(FileType.CUSTOM, 'Podcast');
    expect(input()).toHaveValue('Podcast');
  });

  it('keeps partial text as a custom type on Enter, even if a type contains it', async () => {
    const { onChange, user } = renderSelect();

    await user.clear(input());
    await user.type(input(), 'Virtual{Enter}');

    expect(onChange).toHaveBeenLastCalledWith(FileType.CUSTOM, 'Virtual');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('uses the predefined type when the typed text is its label', async () => {
    const { onChange, user } = renderSelect();

    await user.clear(input());
    await user.type(input(), 'pdf{Enter}');

    expect(onChange).toHaveBeenLastCalledWith(FileType.PDF, '');
    expect(input()).toHaveValue('PDF');
  });

  it('picks the highlighted type with the arrow keys and Enter', async () => {
    const { onChange, user } = renderSelect();

    await user.click(input());
    await user.keyboard('{ArrowDown}{ArrowDown}{Enter}');

    expect(onChange).toHaveBeenCalledWith(FileType.VIDEO, '');
  });

  it('keeps the typed text as a custom type when leaving the field', async () => {
    const { onChange, user } = renderSelect();

    await user.clear(input());
    await user.type(input(), 'Podcast');
    await user.click(screen.getByRole('button', { name: 'Outside' }));

    expect(onChange).toHaveBeenLastCalledWith(FileType.CUSTOM, 'Podcast');
  });

  it('discards the typed text on Escape', async () => {
    const { onChange, user } = renderSelect();

    await user.clear(input());
    await user.type(input(), 'Podcast{Escape}');

    expect(input()).toHaveValue('Articles');
    expect(onChange).not.toHaveBeenCalled();
  });

  it('keeps the previous type when the field is left empty', async () => {
    const { onChange, user } = renderSelect();

    await user.clear(input());
    await user.click(screen.getByRole('button', { name: 'Outside' }));

    expect(input()).toHaveValue('Articles');
    expect(onChange).not.toHaveBeenCalled();
  });
});
