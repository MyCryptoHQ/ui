import { storiesOf } from '@storybook/react';
import faker from 'faker';
import React from 'react';

import Typography from './Typography';

storiesOf('Atoms', module).add('Typography', () => (
  <React.StrictMode>
    <Typography>{faker.lorem.paragraphs()}</Typography>
    <Typography>
      <a href="https://example.com">Link Test</a>
    </Typography>
    <Typography muted={true}>Muted Test</Typography>
  </React.StrictMode>
));
