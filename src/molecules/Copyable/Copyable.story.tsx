import { storiesOf } from '@storybook/react';
import React from 'react';

import Typography from 'Typography';
import Copyable from './Copyable';

storiesOf('Molecules', module).add('Copyable', () => (
  <>
    <Typography>Before</Typography>
    <Copyable>0x4bbeEB066D09B7AEd07bF39EE20460DFa261520</Copyable>
    <Typography>After</Typography>
  </>
));
