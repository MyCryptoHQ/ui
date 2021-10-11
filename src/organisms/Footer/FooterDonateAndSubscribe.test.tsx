import { fireEvent, waitFor } from '@testing-library/react';
import copy from 'copy-to-clipboard';
import nock from 'nock';

import { simpleRender } from '../../../.jest/test-utils';
import { API_ENDPOINT } from '../../hooks';
import { DonateButton, FooterDonateAndSubscribe, SubscribeInput } from './FooterDonateAndSubscribe';

jest.mock('copy-to-clipboard');

describe('DonateButton', () => {
  it('copies the address when clicking', async () => {
    const { getByText } = simpleRender(
      <DonateButton
        icon="ether"
        address="0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520"
        onCopy={jest.fn()}>
        foo
      </DonateButton>
    );
    const button = getByText('foo');

    fireEvent.click(button);

    expect(copy).toHaveBeenCalledWith('0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520', undefined);
  });
});

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

    await waitFor(() =>
      expect(findByText('Your email was added to our mailing list!')).toBeDefined()
    );
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

    await waitFor(() =>
      expect(
        findByText(
          'Your email could not be added to the mailing list. You may be subscribed already.'
        )
      ).resolves.toBeDefined()
    );
  });
});

describe('FooterDonateAndSubscribe', () => {
  it('renders correctly', () => {
    expect(() => simpleRender(<FooterDonateAndSubscribe listId="foo" tag="bar" />)).not.toThrow();
  });
});
