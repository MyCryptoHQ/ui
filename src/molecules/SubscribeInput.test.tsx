import { fireEvent } from '@testing-library/react';
import nock from 'nock';

import { simpleRender } from '../../.jest/test-utils';
import { API_ENDPOINT } from '../hooks';
import { SubscribeInput } from './SubscribeInput';

describe('SubscribeInput', () => {
  it('subscribes to the newsletter', async () => {
    nock(`${API_ENDPOINT}`).post('/foo').reply(200);

    const { findByText, getByText, getByPlaceholderText } = simpleRender(
      <SubscribeInput listId="foo" tag="bar" />
    );

    const input = getByPlaceholderText('Email Address');
    const button = getByText('Subscribe');

    fireEvent.change(input, { target: { value: 'foo@example.com' } });
    fireEvent.click(button);

    await expect(findByText('Your email was added to our mailing list!')).resolves.toBeDefined();
  });

  it('shows an error', async () => {
    nock(`${API_ENDPOINT}`).post('/foo').reply(400);

    const { findByText, getByText, getByPlaceholderText } = simpleRender(
      <SubscribeInput listId="foo" tag="bar" />
    );

    const input = getByPlaceholderText('Email Address');
    const button = getByText('Subscribe');

    fireEvent.change(input, { target: { value: 'foo@example.com' } });
    fireEvent.click(button);

    await expect(
      findByText(
        'Your email could not be added to the mailing list. You may be subscribed already.'
      )
    ).resolves.toBeDefined();
  });
});
