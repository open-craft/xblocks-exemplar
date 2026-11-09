import { RuntimeContext } from '@opencraft/xblock-react-utils';
import {
  act,
  mockRuntime,
  render,
  screen,
  stubJquery,
} from '@opencraft/xblock-react-utils/testing';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { FileType, type Resource } from '../apiTypes';
import { App, type StudentData } from './App';

const makeResource = (id: string, title: string): Resource => ({
  id,
  url: `https://example.com/${id}`,
  title,
  publisher: 'Open edX',
  expectedMinutes: 5,
  fileType: FileType.ARTICLE,
});

const makeData = (overrides: Partial<StudentData> = {}): StudentData => ({
  displayName: 'Essential Reading',
  resources: [
    makeResource('r1', 'First article'),
    makeResource('r2', 'Second article'),
  ],
  readResources: ['r1'],
  ...overrides,
});

const renderApp = (data: StudentData = makeData()) => {
  render(
    <RuntimeContext.Provider
      value={{ runtime: mockRuntime(), element: document.createElement('div') }}
    >
      <App data={data} />
    </RuntimeContext.Provider>,
  );
  return { user: userEvent.setup() };
};

const getCheckbox = (title: string) =>
  screen.getByRole('checkbox', { name: `Mark "${title}" as read` });

describe('Student App', () => {
  const { getLastDeferred, mockPost } = stubJquery();

  it('renders the title and a card per resource, checked if already read', () => {
    renderApp();

    expect(screen.getByText('Essential Reading')).toBeInTheDocument();
    expect(getCheckbox('First article')).toBeChecked();
    expect(getCheckbox('Second article')).not.toBeChecked();
  });

  it('marks a resource as read right away and sends it to the set_read handler', async () => {
    const { user } = renderApp();

    await user.click(getCheckbox('Second article'));

    expect(getCheckbox('Second article')).toBeChecked();
    expect(mockPost).toHaveBeenCalledWith(
      '/handler/set_read',
      JSON.stringify({ resourceId: 'r2', read: true }),
    );
  });

  it('marks a resource as unread', async () => {
    const { user } = renderApp();

    await user.click(getCheckbox('First article'));

    expect(getCheckbox('First article')).not.toBeChecked();
    expect(mockPost).toHaveBeenCalledWith(
      '/handler/set_read',
      JSON.stringify({ resourceId: 'r1', read: false }),
    );
  });

  it('uses the read resources returned by the server', async () => {
    // The server is the source of truth, eg. if another tab changed them meanwhile.
    mockPost.mockImplementationOnce(() => {
      const deferred = {
        done: (callback: (response: { readResources: string[] }) => void) => {
          callback({ readResources: ['r2'] });
          return deferred;
        },
        fail: () => deferred,
        _resolveDone: () => {},
        _resolveFail: () => {},
      };
      return deferred;
    });
    const { user } = renderApp();

    await user.click(getCheckbox('Second article'));

    expect(getCheckbox('First article')).not.toBeChecked();
    expect(getCheckbox('Second article')).toBeChecked();
  });

  it('reverts the change when the request fails', async () => {
    const { user } = renderApp();

    await user.click(getCheckbox('Second article'));
    act(() => getLastDeferred()!._resolveFail());

    expect(getCheckbox('Second article')).not.toBeChecked();
    expect(getCheckbox('First article')).toBeChecked();
  });
});
