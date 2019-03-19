import { storiesOf } from '@storybook/react';
import React from 'react';
import Typography from 'src/Typography';
import Copyable from './Copyable';

storiesOf('Molecules', module).add('Copyable', () => (
  <>
    <Typography>Before</Typography>
    <Copyable
      truncate={true}
      text="0x4bbeEB066D09B7AEd07bF39EE20460DFa261520"
    />
    <Copyable text="foo.eth" />
    <Copyable
      copyable={false}
      text="0x4bbeEB066D09B7AEd07bF39EE20460DFa261520"
    />
    <Typography>After</Typography>
  </>
));
