import { RuntimeContext } from '@opencraft/xblock-react-utils';
import {
  mockRuntime,
  render,
  screen,
  waitFor,
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

const SET_READ_URL = '/handler/set_read';

const mockSetRead = (settings: Partial<MockJaxSettings> = {}) =>
  $.mockjax({
    url: SET_READ_URL,
    type: 'POST',
    responseTime: 0,
    ...settings,
  });

// The body of the only request sent to the set_read handler.
const getSetReadRequestData = async () => {
  await waitFor(() => expect($.mockjax.mockedAjaxCalls()).toHaveLength(1));
  const [call] = $.mockjax.mockedAjaxCalls();
  expect(call.url).toBe(SET_READ_URL);
  return call.data;
};

describe('Student App', () => {
  it('renders the title and a card per resource, checked if already read', () => {
    renderApp();

    expect(
      screen.getByRole('heading', { level: 4, name: 'Essential Reading' }),
    ).toBeInTheDocument();
    expect(getCheckbox('First article')).toBeChecked();
    expect(getCheckbox('Second article')).not.toBeChecked();
  });

  it('marks a resource as read right away and sends it to the set_read handler', async () => {
    mockSetRead({ responseText: { readResources: ['r1', 'r2'] } });
    const { user } = renderApp();

    await user.click(getCheckbox('Second article'));

    expect(getCheckbox('Second article')).toBeChecked();
    expect(await getSetReadRequestData()).toBe(
      JSON.stringify({ resourceId: 'r2', read: true }),
    );
  });

  it('marks a resource as unread', async () => {
    mockSetRead({ responseText: { readResources: [] } });
    const { user } = renderApp();

    await user.click(getCheckbox('First article'));

    expect(getCheckbox('First article')).not.toBeChecked();
    expect(await getSetReadRequestData()).toBe(
      JSON.stringify({ resourceId: 'r1', read: false }),
    );
  });

  it('uses the read resources returned by the server', async () => {
    // The server is the source of truth, eg. if another tab changed them meanwhile.
    mockSetRead({ responseText: { readResources: ['r2'] } });
    const { user } = renderApp();

    await user.click(getCheckbox('Second article'));

    await waitFor(() =>
      expect(getCheckbox('First article')).not.toBeChecked(),
    );
    expect(getCheckbox('Second article')).toBeChecked();
  });

  it('reverts the change when the request fails', async () => {
    mockSetRead({ status: 500, responseText: { error: 'Server error' } });
    const { user } = renderApp();

    await user.click(getCheckbox('Second article'));

    await waitFor(() =>
      expect(getCheckbox('Second article')).not.toBeChecked(),
    );
    expect(getCheckbox('First article')).toBeChecked();
  });
});
