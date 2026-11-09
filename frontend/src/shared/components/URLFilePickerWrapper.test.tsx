import { mockRuntime } from '@opencraft/xblock-react-utils/testing';
import {
  act,
  render,
  type RenderResult,
  waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IntlProvider } from 'react-intl';
import {
  afterAll,
  beforeEach,
  describe,
  expect,
  type Mock,
  test,
  vi,
} from 'vitest';
import { XBlockConfigContext } from '../../lib/context.ts';
import type { FilePickerConfig } from './FilePickerModal.tsx';
import { URLFilePickerWrapper } from './URLFilePickerWrapper.tsx';
import { RuntimeContext } from '@opencraft/xblock-react-utils';

const renderComponent = (): RenderResult & { handleSetValue: Mock } => {
  const handleSetValue = vi.fn();
  handleSetValue.mockReturnValue(undefined);
  const element = document.createElement('div');
  element.setAttribute('data-usage-id', 'some-usage-id');
  const runtimeConfig: FilePickerConfig = {
    mfe_config_api: '',
    file_picker_url: 'http://file.picker.com/',
    enable_json_editing: false,
  };
  const renderResult = render(
    <IntlProvider locale={'en'}>
      <XBlockConfigContext.Provider value={runtimeConfig}>
        <RuntimeContext.Provider
          value={{
            runtime: mockRuntime(),
            element,
          }}
        >
          <URLFilePickerWrapper fileTypes={['image']} setValue={handleSetValue}>
            <div></div>
          </URLFilePickerWrapper>
        </RuntimeContext.Provider>
      </XBlockConfigContext.Provider>
    </IntlProvider>,
  );

  return { ...renderResult, handleSetValue };
};

describe('URLFilePickerWrapper', () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  test('renders the file select button', () => {
    const { getByRole } = renderComponent();

    expect(getByRole('button', { name: 'Select File' })).toBeInTheDocument();
  });

  test('clicking the select button opens a modal with iframe to the correct URL', async () => {
    const { getByRole, getByTitle } = renderComponent();
    const button = getByRole('button', { name: 'Select File' });
    await user.click(button);
    expect(getByRole('dialog', { name: /file picker/i })).toBeInTheDocument();
    expect(getByTitle('File Picker')).toHaveAttribute(
      'src',
      'http://file.picker.com/?multiSelect=false&embedded=true&fileTypes=image&usageKey=some-usage-id',
    );
  });

  test('selecting a file enables the use file button and clicking it sets the value', async () => {
    const { getByRole, handleSetValue, getByTitle } = renderComponent();
    const button = getByRole('button', { name: 'Select File' });
    const fileUrl = 'http://some.url/image.png';

    await user.click(button);
    const iframeWindow = (getByTitle(/File Picker/i) as HTMLIFrameElement)
      .contentWindow;
    await act(async () => {
      window.dispatchEvent(
        new MessageEvent('message', {
          source: iframeWindow,
          data: {
            type: 'org.openedx.assets.selected.v1',
            data: [{ externalUrl: fileUrl }],
          },
        }),
      );
    });
    const useFileButton = getByRole('button', { name: /Use Selected File/i });
    expect(useFileButton).toBeEnabled();
    await user.click(useFileButton);

    expect(handleSetValue).toHaveBeenCalledExactlyOnceWith(fileUrl);
  });

  test('selecting a file enables the use file button, deselecting it disables it again', async () => {
    const { getByRole, getByTitle } = renderComponent();
    const button = getByRole('button', { name: 'Select File' });
    const fileUrl = 'http://some.url/image.png';

    await user.click(button);
    const iframeWindow = (getByTitle(/File Picker/i) as HTMLIFrameElement)
      .contentWindow;
    await act(async () => {
      window.dispatchEvent(
        new MessageEvent('message', {
          source: iframeWindow,
          data: {
            type: 'org.openedx.assets.selected.v1',
            data: [{ externalUrl: fileUrl }],
          },
        }),
      );
    });
    const useFileButton = getByRole('button', { name: /Use Selected File/i });
    expect(useFileButton).toBeEnabled();
    await act(async () => {
      window.dispatchEvent(
        new MessageEvent('message', {
          source: iframeWindow,
          data: {
            type: 'org.openedx.assets.selected.v1',
            data: [],
          },
        }),
      );
    });
    expect(useFileButton).not.toBeEnabled();
  });

  test('ignore messages from incorrect sources', async () => {
    const { getByRole } = renderComponent();
    const button = getByRole('button', { name: 'Select File' });
    const fileUrl = 'http://some.url/image.png';

    await user.click(button);

    await act(async () => {
      window.dispatchEvent(
        new MessageEvent('message', {
          source: {} as unknown as MessageEventSource,
          data: {
            type: 'org.openedx.assets.selected.v1',
            data: [{ externalUrl: fileUrl }],
          },
        }),
      );
    });
    const useFileButton = getByRole('button', { name: /Use Selected File/i });
    expect(useFileButton).not.toBeEnabled();
  });

  test('error when setting a value', async () => {
    const { getByRole, handleSetValue, getByTitle, getByText } =
      renderComponent();
    const button = getByRole('button', { name: 'Select File' });
    const fileUrl = 'http://some.url/image.png';

    await user.click(button);
    const iframeWindow = (getByTitle(/File Picker/i) as HTMLIFrameElement)
      .contentWindow;
    await act(async () => {
      window.dispatchEvent(
        new MessageEvent('message', {
          source: iframeWindow,
          data: {
            type: 'org.openedx.assets.selected.v1',
            data: [{ externalUrl: fileUrl }],
          },
        }),
      );
    });
    const useFileButton = getByRole('button', { name: /Use Selected File/i });
    expect(useFileButton).toBeEnabled();
    handleSetValue.mockRejectedValueOnce(new Error('some error'));
    await user.click(useFileButton);

    expect(handleSetValue).toHaveBeenCalledExactlyOnceWith(fileUrl);
    await waitFor(() => expect(getByText('some error')).toBeInTheDocument());
  });

  test('error in server response data', async () => {
    const { getByRole, getByTitle, getByText } = renderComponent();
    const button = getByRole('button', { name: 'Select File' });

    await user.click(button);
    const iframeWindow = (getByTitle(/File Picker/i) as HTMLIFrameElement)
      .contentWindow;
    await act(async () => {
      window.dispatchEvent(
        new MessageEvent('message', {
          source: iframeWindow,
          data: {
            type: 'org.openedx.assets.selected.v1',
            data: null,
          },
        }),
      );
    });

    await waitFor(() =>
      expect(getByText(/invalid response/i)).toBeInTheDocument(),
    );
  });

  test('close modal', async () => {
    const { getByRole, queryByRole } = renderComponent();
    const selectFileButton = getByRole('button', { name: 'Select File' });
    await user.click(selectFileButton);
    expect(getByRole('dialog', { name: /file picker/i })).toBeInTheDocument();
    const closeButton = getByRole('button', { name: /cancel/i });
    await user.click(closeButton);
    expect(
      queryByRole('dialog', { name: /file picker/i }),
    ).not.toBeInTheDocument();
  });

  afterAll(() => {
    vi.unstubAllGlobals();
  });
});
