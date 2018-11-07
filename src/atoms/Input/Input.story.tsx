import { storiesOf } from '@storybook/react';
import React from 'react';
import Input from '.';
import Typography from '../Typography';

storiesOf('Atoms', module).add('Input', () => (
  <Typography as="label">
    To Address
    <br />
    <Input placeholder="0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520" />
  </Typography>
));
