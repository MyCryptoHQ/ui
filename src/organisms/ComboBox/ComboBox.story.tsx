import { storiesOf } from '@storybook/react';
import React from 'react';
import ComboBox from '.';
import Text from '../../atoms/Text';

storiesOf('Organisms', module).add('ComboBox', () => (
  <Text as="label">
    Enter a fruit
    <br />
    <ComboBox items={new Set(['apple', 'pear', 'orange', 'grape', 'banana'])} />
  </Text>
));
