import 'jest-dom/extend-expect';
import React from 'react';
import { render } from 'react-testing-library';

import { Tabs } from 'atoms';

test('Tabs', () => {
  const links = [
    <a key="wallets" href="https://mycrypto.com">
      Your Wallets
    </a>,
    <a key="addresses" href="https://mycrypto.com">
      Addresses
    </a>,
    <a key="general" href="https://mycrypto.com">
      General
    </a>,
  ];

  const { getByText } = render(<Tabs>{links}</Tabs>);

  const walletsLink = getByText('Your Wallets');
  expect(walletsLink).toHaveAttribute('href', 'https://mycrypto.com');
  const addressesLink = getByText('Addresses');
  expect(addressesLink).toHaveAttribute('href', 'https://mycrypto.com');
  const generalLink = getByText('General');
  expect(generalLink).toHaveAttribute('href', 'https://mycrypto.com');
});
