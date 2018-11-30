import { storiesOf } from '@storybook/react';
import React from 'react';

import { Button, Tabs } from 'atoms';

const links = [
  <Button key="wallets">Your Wallets</Button>,
  <Button key="addresses">Addresses</Button>,
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
