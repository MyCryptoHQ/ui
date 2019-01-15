import { storiesOf } from '@storybook/react';
import React from 'react';

import Typography from 'src/Typography';
import Textarea from './Textarea';

storiesOf('Atoms', module).add('Textarea', () => (
  <React.StrictMode>
    <Typography as="label">
      To Address
      <br />
      <Textarea placeholder="0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520" />
    </Typography>
  </React.StrictMode>
));
