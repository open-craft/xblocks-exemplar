import { mockRuntime, stubJquery } from '@opencraft/xblock-react-utils/testing';
import {
  RuntimeContext,
  type XBlockRuntime,
} from '@opencraft/xblock-react-utils';
import { fireEvent, render, waitFor } from '@testing-library/react';
import type { RenderResult } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import { describe, expect, it, vi } from 'vitest';
import JsonImporter from './JsonImporter';

function renderImporter({
  runtime = {
    ...mockRuntime(),
    handlerUrl: vi.fn(
      (_element: Element | null, handler: string) => `/handler/${handler}`,
    ),
  },
}: { runtime?: XBlockRuntime } = {}): RenderResult & {
  runtime: XBlockRuntime;
} {
  const result = render(
    <RuntimeContext.Provider
      value={{ runtime, element: document.createElement('div') }}
    >
      <IntlProvider locale="en">
        <JsonImporter liveData={{ title: 'Hello' }} />
      </IntlProvider>
    </RuntimeContext.Provider>,
  );
  return { ...result, runtime };
}

function getFileInput(container: HTMLElement): HTMLInputElement {
  const input = container.querySelector<HTMLInputElement>('input[type="file"]');
  expect(input).not.toBeNull();
  return input as HTMLInputElement;
}

function jsonFile(contents: string, name = 'component.json'): File {
  const file = new File([contents], name, { type: 'application/json' });
  // jsdom's Blob/File does not implement `.text()`, which the component relies
  // on. Provide it so the upload path can read the file contents.
  Object.defineProperty(file, 'text', {
    value: () => Promise.resolve(contents),
  });
  return file;
}

async function uploadJson(container: HTMLElement, file: File) {
  fireEvent.change(getFileInput(container), { target: { files: [file] } });
}

describe('JsonImporter', () => {
  const { getLastDeferred, mockPost } = stubJquery();

  it('notifies save start and posts the file contents to the save url', async () => {
    const { container, runtime } = renderImporter();
    const data = JSON.stringify({ title: 'Hello' });

    await uploadJson(container, jsonFile(data));

    await waitFor(() => {
      expect(runtime.notify).toHaveBeenCalledWith('save', { state: 'start' });
    });
    expect(mockPost).toHaveBeenCalledWith('/handler/studio_save', data);
  });

  it('notifies save end when the request succeeds', async () => {
    const { container, runtime } = renderImporter();

    await uploadJson(container, jsonFile('{"title":"Hello"}'));
    await waitFor(() => expect(getLastDeferred()).toBeDefined());

    getLastDeferred()!._resolveDone();

    await waitFor(() => {
      expect(runtime.notify).toHaveBeenCalledWith('save', { state: 'end' });
    });
  });

  it('shows the invalid JSON message and does not post', async () => {
    const { container, findByText } = renderImporter();

    await uploadJson(container, jsonFile('{ not valid json'));

    expect(await findByText('Invalid JSON.')).toBeInTheDocument();
    expect(mockPost).not.toHaveBeenCalled();
  });
});
