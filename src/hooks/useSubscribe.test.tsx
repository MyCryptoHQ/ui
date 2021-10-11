import nock from 'nock';

import { API_ENDPOINT, useSubscribe } from './useSubscribe';

describe('useSubscribe', () => {
  it('calls the subscribe endpoint and returns the result', async () => {
    nock(`${API_ENDPOINT}`).post('/foo').reply(200);

    const fn = useSubscribe('foo', 'bar');
    await expect(fn('foo@example.com')).resolves.toBe(true);

    nock(`${API_ENDPOINT}`).post('/foo').reply(400);

    await expect(fn('foo@example.com')).rejects.toThrow();
  });
});
