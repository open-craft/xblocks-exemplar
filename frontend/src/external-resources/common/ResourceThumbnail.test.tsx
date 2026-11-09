import { render, screen } from '@opencraft/xblock-react-utils/testing';
import { describe, expect, it } from 'vitest';

import { ResourceThumbnail } from './ResourceThumbnail';

describe('ResourceThumbnail', () => {
  it('renders the icon hidden from assistive technology', () => {
    render(<ResourceThumbnail variant="icon" item="science" />);

    const icon = screen.getByText('science');
    expect(icon).toHaveClass('material-icons-outlined');
    expect(icon).toHaveAttribute('aria-hidden', 'true');
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('renders the image with its alt text', () => {
    render(
      <ResourceThumbnail
        variant="image"
        item="https://example.com/thumb.png"
        itemAlt="Diagram of an artery"
      />,
    );

    expect(
      screen.getByRole('img', { name: 'Diagram of an artery' }),
    ).toHaveAttribute('src', 'https://example.com/thumb.png');
  });

  it('renders an image with empty alt text as decorative', () => {
    render(
      <ResourceThumbnail
        variant="image"
        item="https://example.com/thumb.png"
        itemAlt=""
      />,
    );

    expect(screen.queryByRole('img')).not.toBeInTheDocument();
    expect(document.querySelector('img')).toHaveAttribute('alt', '');
  });
});
