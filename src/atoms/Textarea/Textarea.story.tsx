import { storiesOf } from '@storybook/react';
import React from 'react';
import Textarea from '.';
import Typography from '../Typography';

storiesOf('Atoms', module).add('Textarea', () => (
  <Typography as="label">
    To Address
    <br />
    <Textarea placeholder="0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520" />
  </Typography>
));
