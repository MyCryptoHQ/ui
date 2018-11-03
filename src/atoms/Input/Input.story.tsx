import { storiesOf } from '@storybook/react';
import React from 'react';
import Input from '.';
import Text from '../Text';

storiesOf('Atoms', module).add('Input', () => (
  <Text as="label">
    To Address
    <br />
    <Input placeholder="0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520" />
  </Text>
));
