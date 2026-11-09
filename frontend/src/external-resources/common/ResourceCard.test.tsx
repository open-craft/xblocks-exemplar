import { render, screen } from '@opencraft/xblock-react-utils/testing';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { FileType, type Resource } from '@/external-resources/apiTypes';
import { ResourceCard } from './ResourceCard';

const makeResource = (overrides: Partial<Resource> = {}): Resource => ({
  id: 'resource-1',
  url: 'https://example.com/article',
  title: 'Understanding vascular disease',
  publisher: 'American Heart Association',
  expectedMinutes: 12,
  fileType: FileType.PDF,
  thumbnailUrl: '',
  thumbnailAltText: '',
  thumbnailIcon: '',
  ...overrides,
});

const getIcon = () => document.querySelector('.material-icons-outlined');

describe('ResourceCard', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('shows the type label, time, title and publisher', () => {
    render(<ResourceCard resource={makeResource()} />);

    expect(screen.getByText('PDF')).toBeInTheDocument();
    expect(screen.getByText('12 min')).toBeInTheDocument();
    expect(
      screen.getByText('Understanding vascular disease'),
    ).toBeInTheDocument();
    expect(screen.getByText('American Heart Association')).toBeInTheDocument();
  });

  it('shows the custom type for CUSTOM resources', () => {
    render(
      <ResourceCard
        resource={makeResource({
          fileType: FileType.CUSTOM,
          customFileType: 'Podcast',
        })}
      />,
    );

    expect(screen.getByText('Podcast')).toBeInTheDocument();
  });

  it('shows the file type icon when there is no thumbnail or chosen icon', () => {
    render(<ResourceCard resource={makeResource()} />);

    expect(getIcon()).toHaveTextContent('picture_as_pdf');
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('shows the chosen icon instead of the file type icon', () => {
    render(
      <ResourceCard resource={makeResource({ thumbnailIcon: 'science' })} />,
    );

    expect(getIcon()).toHaveTextContent('science');
  });

  it('shows the thumbnail image with its alt text over any icon', () => {
    render(
      <ResourceCard
        resource={makeResource({
          thumbnailUrl: 'https://example.com/thumb.png',
          thumbnailAltText: 'Diagram of an artery',
          thumbnailIcon: 'science',
        })}
      />,
    );

    expect(
      screen.getByRole('img', { name: 'Diagram of an artery' }),
    ).toHaveAttribute('src', 'https://example.com/thumb.png');
    expect(getIcon()).not.toBeInTheDocument();
  });

  it('opens the resource in a new tab when clickable', async () => {
    const user = userEvent.setup();
    const open = vi.spyOn(window, 'open').mockImplementation(() => null);
    render(<ResourceCard resource={makeResource()} isClickable />);

    await user.click(screen.getByText('Understanding vascular disease'));

    expect(open).toHaveBeenCalledWith(
      'https://example.com/article',
      '_blank',
      'noopener,noreferrer',
    );
  });

  it('does not open the resource when not clickable', async () => {
    const user = userEvent.setup();
    const open = vi.spyOn(window, 'open').mockImplementation(() => null);
    render(<ResourceCard resource={makeResource()} />);

    await user.click(screen.getByText('Understanding vascular disease'));

    expect(open).not.toHaveBeenCalled();
  });

  it('does not open the resource when clicking its actions', async () => {
    const user = userEvent.setup();
    const open = vi.spyOn(window, 'open').mockImplementation(() => null);
    const onAction = vi.fn();
    render(
      <ResourceCard
        resource={makeResource()}
        isClickable
        actions={
          <button type="button" onClick={onAction}>
            Edit
          </button>
        }
      />,
    );

    await user.click(screen.getByRole('button', { name: 'Edit' }));

    expect(onAction).toHaveBeenCalled();
    expect(open).not.toHaveBeenCalled();
  });
});
