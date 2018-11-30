import { storiesOf } from '@storybook/react';
import React from 'react';

import Address from './Address';

function truncate(children: string) {
  return [
    children.substring(0, 6),
    '…',
    children.substring(children.length - 4),
  ].join('');
}

storiesOf('Molecules', module).add('Address', () => (
  <Address
    address="0x4bbeEB066D09B7AEd07bF39EE20460DFa261520"
    title="John Doe"
    truncate={truncate}
  />
));
