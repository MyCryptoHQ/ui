import { storiesOf } from '@storybook/react';
import faker from 'faker';
import React, { Fragment } from 'react';

import Typography from './Typography';

storiesOf('Styles', module).add('Typography', () => (
  <Fragment>
    <Typography>{faker.lorem.paragraphs()}</Typography>
    <Typography>
      <a href="https://example.com">Link Test</a>
    </Typography>
    <Typography muted={true}>Muted Test</Typography>
  </Fragment>
));
