import * as React from 'react';
import {
  render,
  screen,
  mockRuntime,
  stubJquery,
} from '@opencraft/xblock-react-utils/testing';
import userEvent from '@testing-library/user-event';
import { within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import StudioUi from './studio-ui';
import { type KeyPoint, type XBlockData } from '../type';
import { RuntimeContext } from '@opencraft/xblock-react-utils';
import { XBlockConfigContext } from '@/lib/context';
import type { XBlockConfig } from '@/types';

// ── helpers ──────────────────────────────────────────────────────────────────

const sampleKeypoints: KeyPoint[] = [
  { keypoint: 'Fluid balance', description: 'Regulation of fluids.' },
  { keypoint: 'Neural signaling', description: 'How neurons communicate.' },
];

const defaultConfig = { enable_json_editing: true } as XBlockConfig;

function renderStudio(
  overrides: Partial<XBlockData> = {},
  config: XBlockConfig | null = defaultConfig,
) {
  const data: XBlockData = {
    header: 'Key Concepts',
    keypoints: sampleKeypoints,
    summary: 'These concepts form a connected sequence.',
    button_text: 'Glossary',
    button_link: 'https://example.com/glossary',
    background_color: '#CCCCCC',
    ...overrides,
  };
  const runtime = mockRuntime();
  const result = render(
    <XBlockConfigContext.Provider value={config}>
      <RuntimeContext.Provider
        value={{ runtime, element: document.createElement('div') }}
      >
        <StudioUi data={data} />
      </RuntimeContext.Provider>
    </XBlockConfigContext.Provider>,
  );
  return { ...result, runtime };
}

async function renameHeader(
  user: ReturnType<typeof userEvent.setup>,
  value: string,
) {
  await user.click(screen.getByRole('button', { name: 'Edit display name' }));
  const input = screen.getByRole('textbox', { name: 'Display name' });
  await user.clear(input);
  await user.type(input, `${value}{Enter}`);
}

// ── tests ────────────────────────────────────────────────────────────────────

describe('StudioUi', () => {
  // ─── initial rendering ───────────────────────────────────────────────────
  const { getLastDeferred, mockPost } = stubJquery();
  describe('initial rendering', () => {
    it('renders the header as the editor title', () => {
      renderStudio();
      expect(
        screen.getByRole('heading', { name: 'Editing: Key Concepts' }),
      ).toBeInTheDocument();
    });

    it('shows a placeholder title when the header is empty', () => {
      renderStudio({ header: '' });
      expect(
        screen.getByRole('heading', { name: 'Editing: <Untitled>' }),
      ).toBeInTheDocument();
    });

    it('falls back to defaults when data fields are missing', () => {
      renderStudio({
        keypoints: undefined,
        summary: undefined as unknown as string,
      });
      expect(screen.getByText(/No key terms added yet/)).toBeInTheDocument();
      expect(
        screen.getByPlaceholderText(
          'e.g. These concepts form a connected sequence...',
        ),
      ).toHaveValue('');
    });

    it('renders Summary input with initial value', () => {
      renderStudio();
      const input = screen.getByPlaceholderText(
        'e.g. These concepts form a connected sequence...',
      );
      expect(input).toHaveValue('These concepts form a connected sequence.');
    });

    it('renders Button Text input with initial value', () => {
      renderStudio();
      const input = screen.getByPlaceholderText('e.g. Glossary');
      expect(input).toHaveValue('Glossary');
    });

    it('renders Button Link input with initial value', () => {
      renderStudio();
      const input = screen.getByPlaceholderText(
        'e.g. https://example.com/glossary',
      );
      expect(input).toHaveValue('https://example.com/glossary');
    });

    it('renders pre-populated keypoints with labels and descriptions', () => {
      renderStudio();
      expect(screen.getByDisplayValue('Fluid balance')).toBeInTheDocument();
      expect(
        screen.getByDisplayValue('Regulation of fluids.'),
      ).toBeInTheDocument();
      expect(screen.getByDisplayValue('Neural signaling')).toBeInTheDocument();
      expect(
        screen.getByDisplayValue('How neurons communicate.'),
      ).toBeInTheDocument();
    });

    it('renders term numbering', () => {
      renderStudio();
      expect(screen.getByText('Term 1')).toBeInTheDocument();
      expect(screen.getByText('Term 2')).toBeInTheDocument();
    });

    it('shows empty state message when no keypoints', () => {
      renderStudio({ keypoints: [] });
      expect(screen.getByText(/No key terms added yet/)).toBeInTheDocument();
    });

    it('does not show empty state message when keypoints exist', () => {
      renderStudio();
      expect(
        screen.queryByText(/No key terms added yet/),
      ).not.toBeInTheDocument();
    });

    it('renders Save and Cancel buttons', () => {
      renderStudio();
      expect(screen.getByText('Save')).toBeInTheDocument();
      expect(screen.getByText('Cancel')).toBeInTheDocument();
    });
  });

  // ─── adding key terms ────────────────────────────────────────────────────

  describe('adding key terms', () => {
    it('adds a new empty keypoint entry when clicking Add Key Term', async () => {
      const user = userEvent.setup();
      renderStudio({ keypoints: [] });

      await user.click(screen.getByText('Add Key Term'));

      expect(screen.getByText('Term 1')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('e.g. Fluid balance')).toHaveValue('');
      expect(
        screen.getByPlaceholderText(
          'e.g. The regulation of fluids within the body...',
        ),
      ).toHaveValue('');
    });

    it('empty state message disappears after adding a term', async () => {
      const user = userEvent.setup();
      renderStudio({ keypoints: [] });

      expect(screen.getByText(/No key terms added yet/)).toBeInTheDocument();
      await user.click(screen.getByText('Add Key Term'));
      expect(
        screen.queryByText(/No key terms added yet/),
      ).not.toBeInTheDocument();
    });

    it('appends to existing keypoints with correct numbering', async () => {
      const user = userEvent.setup();
      renderStudio();

      expect(screen.queryByText('Term 3')).not.toBeInTheDocument();
      await user.click(screen.getByText('Add Key Term'));
      expect(screen.getByText('Term 3')).toBeInTheDocument();
    });
  });

  // ─── editing key terms ───────────────────────────────────────────────────

  describe('editing key terms', () => {
    it('updates a keypoint label when typing', async () => {
      const user = userEvent.setup();
      renderStudio();

      const labelInput = screen.getByDisplayValue('Fluid balance');
      await user.clear(labelInput);
      await user.type(labelInput, 'Electrolyte balance');
      expect(labelInput).toHaveValue('Electrolyte balance');
    });

    it('updates a keypoint description when typing', async () => {
      const user = userEvent.setup();
      renderStudio();

      const descInput = screen.getByDisplayValue('Regulation of fluids.');
      await user.clear(descInput);
      await user.type(descInput, 'Updated description');
      expect(descInput).toHaveValue('Updated description');
    });

    it('editing one keypoint does not affect another', async () => {
      const user = userEvent.setup();
      renderStudio();

      const firstLabel = screen.getByDisplayValue('Fluid balance');
      await user.clear(firstLabel);
      await user.type(firstLabel, 'Changed');

      expect(screen.getByDisplayValue('Neural signaling')).toBeInTheDocument();
      expect(
        screen.getByDisplayValue('How neurons communicate.'),
      ).toBeInTheDocument();
    });
  });

  // ─── removing key terms ──────────────────────────────────────────────────

  describe('removing key terms', () => {
    it('removes a keypoint when clicking Remove', async () => {
      const user = userEvent.setup();
      renderStudio();

      const removeButtons = screen.getAllByText('Remove');
      await user.click(removeButtons[0]); // remove first keypoint

      expect(
        screen.queryByDisplayValue('Fluid balance'),
      ).not.toBeInTheDocument();
      expect(screen.getByDisplayValue('Neural signaling')).toBeInTheDocument();
    });

    it('re-numbers remaining keypoints after removal', async () => {
      const user = userEvent.setup();
      renderStudio();

      const removeButtons = screen.getAllByText('Remove');
      await user.click(removeButtons[0]);

      expect(screen.getByText('Term 1')).toBeInTheDocument();
      expect(screen.queryByText('Term 2')).not.toBeInTheDocument();
    });

    it('shows empty state message after removing all keypoints', async () => {
      const user = userEvent.setup();
      renderStudio({
        keypoints: [{ keypoint: 'Only term', description: 'Only desc' }],
      });

      await user.click(screen.getByText('Remove'));
      expect(screen.getByText(/No key terms added yet/)).toBeInTheDocument();
    });
  });

  // ─── editing header, summary, and action button fields ───────────────────

  describe('editing header, summary, and action button fields', () => {
    it('updates the header from the title editor', async () => {
      const user = userEvent.setup();
      renderStudio();

      await renameHeader(user, 'New Header');
      expect(
        screen.getByRole('heading', { name: 'Editing: New Header' }),
      ).toBeInTheDocument();
    });

    it('updates the Summary input when typing', async () => {
      const user = userEvent.setup();
      renderStudio();

      const input = screen.getByPlaceholderText(
        'e.g. These concepts form a connected sequence...',
      );
      await user.clear(input);
      await user.type(input, 'Updated summary');
      expect(input).toHaveValue('Updated summary');
    });

    it('updates the Button Text input when typing', async () => {
      const user = userEvent.setup();
      renderStudio();

      const input = screen.getByPlaceholderText('e.g. Glossary');
      await user.clear(input);
      await user.type(input, 'Resources');
      expect(input).toHaveValue('Resources');
    });

    it('updates the Button Link input when typing', async () => {
      const user = userEvent.setup();
      renderStudio();

      const input = screen.getByPlaceholderText(
        'e.g. https://example.com/glossary',
      );
      await user.clear(input);
      await user.type(input, 'https://new-link.com');
      expect(input).toHaveValue('https://new-link.com');
    });
  });

  // ─── save behaviour ──────────────────────────────────────────────────────

  describe('save behaviour', () => {
    it('calls runtime.notify with save start on click', async () => {
      const user = userEvent.setup();
      const { runtime } = renderStudio();

      await user.click(screen.getByText('Save'));

      expect(runtime.notify).toHaveBeenCalledWith('save', { state: 'start' });
    });

    it('posts the correct payload to the studioSaveUrl', async () => {
      const user = userEvent.setup();
      renderStudio();

      await user.click(screen.getByText('Save'));

      expect(mockPost).toHaveBeenCalledWith(
        '/handler/studio_save',
        JSON.stringify({
          header: 'Key Concepts',
          keypoints: sampleKeypoints,
          summary: 'These concepts form a connected sequence.',
          button_text: 'Glossary',
          button_link: 'https://example.com/glossary',
          background_color: '#CCCCCC',
        }),
      );
    });

    it('calls runtime.notify with save end on success', async () => {
      const user = userEvent.setup();
      const { runtime } = renderStudio();

      await user.click(screen.getByText('Save'));
      const lastDeferred = getLastDeferred();
      expect(lastDeferred).toBeTruthy();
      lastDeferred!._resolveDone();

      expect(runtime.notify).toHaveBeenCalledWith('save', { state: 'end' });
    });

    it('calls runtime.notify with error on failure', async () => {
      const user = userEvent.setup();
      const { runtime } = renderStudio();

      await user.click(screen.getByText('Save'));
      const lastDeferred = getLastDeferred();
      expect(lastDeferred).toBeTruthy();
      lastDeferred!._resolveFail();

      expect(runtime.notify).toHaveBeenCalledWith('error', {
        title: 'Save Error',
        message: 'Failed to save keypoint configuration',
      });
    });
  });

  // ─── cancel behaviour ────────────────────────────────────────────────────

  describe('cancel behaviour', () => {
    it('calls runtime.notify with cancel on click', async () => {
      const user = userEvent.setup();
      const { runtime } = renderStudio();

      await user.click(screen.getByText('Cancel'));

      expect(runtime.notify).toHaveBeenCalledWith('cancel', {});
    });
  });

  // ─── save reflects edits ─────────────────────────────────────────────────

  describe('save reflects edits', () => {
    it('includes newly added and edited keypoints in the save payload', async () => {
      const user = userEvent.setup();
      renderStudio({ keypoints: [] });

      // Add a keypoint and fill it in
      await user.click(screen.getByText('Add Key Term'));
      await user.type(
        screen.getByPlaceholderText('e.g. Fluid balance'),
        'New term',
      );
      await user.type(
        screen.getByPlaceholderText(
          'e.g. The regulation of fluids within the body...',
        ),
        'New description',
      );

      await user.click(screen.getByText('Save'));

      expect(mockPost).toHaveBeenCalledWith(
        '/handler/studio_save',
        JSON.stringify({
          header: 'Key Concepts',
          keypoints: [{ keypoint: 'New term', description: 'New description' }],
          summary: 'These concepts form a connected sequence.',
          button_text: 'Glossary',
          button_link: 'https://example.com/glossary',
          background_color: '#CCCCCC',
        }),
      );
    });

    it('excludes removed keypoints from the save payload', async () => {
      const user = userEvent.setup();
      renderStudio();

      // Remove first keypoint
      const removeButtons = screen.getAllByText('Remove');
      await user.click(removeButtons[0]);

      await user.click(screen.getByText('Save'));

      expect(mockPost).toHaveBeenCalledWith(
        '/handler/studio_save',
        JSON.stringify({
          header: 'Key Concepts',
          keypoints: [sampleKeypoints[1]],
          summary: 'These concepts form a connected sequence.',
          button_text: 'Glossary',
          button_link: 'https://example.com/glossary',
          background_color: '#CCCCCC',
        }),
      );
    });

    it('includes updated header, summary, and button fields in the save payload', async () => {
      const user = userEvent.setup();
      renderStudio({ keypoints: [] });

      await renameHeader(user, 'Updated Header');

      const summaryInput = screen.getByPlaceholderText(
        'e.g. These concepts form a connected sequence...',
      );
      await user.clear(summaryInput);
      await user.type(summaryInput, 'Updated Summary');

      const btnTextInput = screen.getByPlaceholderText('e.g. Glossary');
      await user.clear(btnTextInput);
      await user.type(btnTextInput, 'Resources');

      const btnLinkInput = screen.getByPlaceholderText(
        'e.g. https://example.com/glossary',
      );
      await user.clear(btnLinkInput);
      await user.type(btnLinkInput, 'https://new.com');

      await user.click(screen.getByText('Save'));

      expect(mockPost).toHaveBeenCalledWith(
        '/handler/studio_save',
        JSON.stringify({
          header: 'Updated Header',
          keypoints: [],
          summary: 'Updated Summary',
          button_text: 'Resources',
          button_link: 'https://new.com',
          background_color: '#CCCCCC',
        }),
      );
    });
  });

  // ─── tabs ────────────────────────────────────────────────────────────────

  describe('tabs', () => {
    it('shows the Content tab as selected by default', () => {
      renderStudio();
      expect(screen.getByRole('tab', { name: 'Content' })).toHaveAttribute(
        'aria-selected',
        'true',
      );
      expect(screen.getByRole('tab', { name: 'Settings' })).toHaveAttribute(
        'aria-selected',
        'false',
      );
      expect(screen.getByRole('tab', { name: 'JSON' })).toHaveAttribute(
        'aria-selected',
        'false',
      );
      const visiblePanel = screen.getByRole('tabpanel', { name: 'Content' });
      expect(
        within(visiblePanel).getByRole('button', { name: /Add Key Term/ }),
      ).toBeInTheDocument();
    });

    it('renders a labelled panel for every tab', () => {
      renderStudio();
      const panels = Array.from(
        document.querySelectorAll<HTMLElement>('[role="tabpanel"]'),
      );
      expect(panels).toHaveLength(3);
      panels.forEach((panel) => {
        expect(panel).not.toBeEmptyDOMElement();
        const tab = document.getElementById(
          panel.getAttribute('aria-labelledby') as string,
        );
        expect(tab).toHaveAttribute('aria-controls', panel.id);
      });
    });

    it('shows the background color picker in the Settings tab', async () => {
      const user = userEvent.setup();
      renderStudio();

      await user.click(screen.getByRole('tab', { name: 'Settings' }));

      const visiblePanel = screen.getByRole('tabpanel', { name: 'Settings' });
      expect(
        within(visiblePanel).getByText('Background Color'),
      ).toBeInTheDocument();
      expect(
        screen.queryByRole('button', { name: /Add Key Term/ }),
      ).not.toBeInTheDocument();
    });

    it('supports arrow-key navigation between tabs', async () => {
      const user = userEvent.setup();
      renderStudio();

      screen.getByRole('tab', { name: 'Content' }).focus();
      await user.keyboard('{ArrowRight}');

      const settingsTab = screen.getByRole('tab', { name: 'Settings' });
      expect(settingsTab).toHaveAttribute('aria-selected', 'true');
      expect(settingsTab).toHaveFocus();
    });

    it('preserves edits when switching tabs', async () => {
      const user = userEvent.setup();
      renderStudio();

      const summary = screen.getByPlaceholderText(
        'e.g. These concepts form a connected sequence...',
      );
      await user.clear(summary);
      await user.type(summary, 'Kept summary');

      await user.click(screen.getByRole('tab', { name: 'Settings' }));
      await user.click(screen.getByRole('tab', { name: 'Content' }));

      expect(
        screen.getByPlaceholderText(
          'e.g. These concepts form a connected sequence...',
        ),
      ).toHaveValue('Kept summary');
    });

    it('hides the JSON tab when JSON editing is disabled', () => {
      renderStudio({}, { enable_json_editing: false } as XBlockConfig);

      expect(screen.getByRole('tab', { name: 'Content' })).toBeInTheDocument();
      expect(screen.getByRole('tab', { name: 'Settings' })).toBeInTheDocument();
      expect(
        screen.queryByRole('tab', { name: 'JSON' }),
      ).not.toBeInTheDocument();
      expect(document.querySelectorAll('[role="tabpanel"]')).toHaveLength(2);
    });

    it('hides the JSON tab when no config is provided', () => {
      renderStudio({}, null);
      expect(
        screen.queryByRole('tab', { name: 'JSON' }),
      ).not.toBeInTheDocument();
    });
  });
});
