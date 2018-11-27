import { storiesOf } from '@storybook/react';
import React from 'react';

import Typography from 'Typography';
import Copyable from './Copyable';

function truncate(children: string) {
  return [
    children.substring(0, 6),
    '…',
    children.substring(children.length - 4),
  ].join('');
}

storiesOf('Molecules', module).add('Copyable', () => (
  <>
    <Typography>Before</Typography>
    <Typography>Before</Typography>
    <Copyable
      text="0x4bbeEB066D09B7AEd07bF39EE20460DFa261520"
      truncate={truncate}
    />
    <Typography>After</Typography>
    <Typography>After</Typography>
  </>
));
