import { storiesOf } from '@storybook/react';
import React from 'react';
import Input from '.';
import Text from '../Text';

const Label = Text.withComponent('label');

storiesOf('Atoms', module).add('Input', () => (
  <Label htmlFor="to-address">
    To Address
    <br />
    <Input
      id="to-address"
      placeholder="0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520"
    />
  </Label>
));
