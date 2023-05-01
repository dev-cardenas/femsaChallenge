import {setupServer} from 'msw/node';

export const mockServer = setupServer();

beforeAll(() => {
  mockServer.listen();
});

afterEach(() => mockServer.resetHandlers());

afterAll(() => {
  mockServer.close();
});
