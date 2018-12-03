import { storiesOf } from '@storybook/react';
import React from 'react';

import Identicon from './Identicon';

storiesOf('Atoms', module).add('Identicon', () =>
  [{ address: 'ETH ADDRESS' }].map((props, index) => (
    <React.Fragment key={index}>
      <Identicon {...props} />
    </React.Fragment>
  )),
);
