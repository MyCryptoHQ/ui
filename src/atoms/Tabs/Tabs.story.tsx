import { storiesOf } from '@storybook/react';
import React from 'react';

import { Tabs } from './Tabs';

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

storiesOf('Atoms', module).add('Tabs', () =>
  [{}].map((props, index) => (
    <Tabs key={index} {...props}>
      {links}
    </Tabs>
  )),
);
