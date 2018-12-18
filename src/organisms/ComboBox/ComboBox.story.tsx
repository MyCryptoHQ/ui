import { storiesOf } from '@storybook/react';
import React from 'react';

import Typography from 'src/Typography';
import ComboBox from './ComboBox';

storiesOf('Organisms', module).add('ComboBox', () => (
  <Typography as="label">
    Enter a fruit
    <br />
    <ComboBox items={new Set(['apple', 'pear', 'orange', 'grape', 'banana'])} />
  </Typography>
));
