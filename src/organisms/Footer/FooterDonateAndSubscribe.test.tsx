import { fireEvent } from '@testing-library/react';

import { simpleRender } from '../../../.jest/test-utils';
import { FooterDonateAndSubscribe } from './FooterDonateAndSubscribe';

afterEach(() => {
  jest.useRealTimers();
});

describe('FooterDonateAndSubscribe', () => {
  it('renders correctly', () => {
    expect(() => simpleRender(<FooterDonateAndSubscribe listId="foo" tag="bar" />)).not.toThrow();
  });

  it('shows a message when copying address', async () => {
    jest.useFakeTimers();

    const { findByText, getByText } = simpleRender(
      <FooterDonateAndSubscribe listId="foo" tag="bar" />
    );
    const button = getByText('Ethereum');

    fireEvent.click(button);

    await expect(findByText('Address Copied to Clipboard!')).resolves.toBeDefined();

    jest.runAllTimers();

    await expect(findByText('Address Copied to Clipboard!')).rejects.toThrow();
  });
});
