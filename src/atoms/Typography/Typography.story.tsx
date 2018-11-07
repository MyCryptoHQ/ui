import { storiesOf } from '@storybook/react';
import faker from 'faker';
import React from 'react';
import Typography from '.';

storiesOf('Atoms', module).add('Typography', () => (
  <Typography>{faker.lorem.paragraphs()}</Typography>
));
