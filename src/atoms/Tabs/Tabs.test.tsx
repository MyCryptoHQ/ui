import 'jest-dom/extend-expect';
import React from 'react';
import { fireEvent, render } from 'react-testing-library';

import { Button, Tabs } from 'atoms';

test('Tabs', () => {
  const handleClick = jest.fn();

  const links = [
    <Button onClick={handleClick} key="wallets">
      Your Wallets
    </Button>,
    <a key="addresses" href="#addresses">
      Addresses
    </a>,
    <a key="general" href="https://mycrypto.com">
      General
    </a>,
  ];

  const { getByText } = render(<Tabs>{links}</Tabs>);

  const button = getByText('Your Wallets');
  expect(button).toHaveAttribute('type', 'button');
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalled();

  const addressesLink = getByText('Addresses');
  expect(addressesLink).toHaveAttribute('href', '#addresses');
  const generalLink = getByText('General');
  expect(generalLink).toHaveAttribute('href', 'https://mycrypto.com');
});
