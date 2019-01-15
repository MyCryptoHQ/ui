import { storiesOf } from '@storybook/react';
import React from 'react';

import Identicon from './Identicon';

storiesOf('Atoms', module).add('Identicon', () =>
  [{ address: 'ETH ADDRESS' }].map((props, index) => (
    <React.StrictMode key={index}>
      <Identicon {...props} />
    </React.StrictMode>
  )),
);
