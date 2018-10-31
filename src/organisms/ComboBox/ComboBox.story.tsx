import { storiesOf } from '@storybook/react';
import React from 'react';
import ComboBox from '.';

storiesOf('Organisms', module).add('ComboBox', () => (
  <ComboBox
    items={['apple', 'pear', 'orange', 'grape', 'banana']}
    label="Enter a fruit"
  />
));
