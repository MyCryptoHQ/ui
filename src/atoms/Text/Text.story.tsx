import { storiesOf } from '@storybook/react';
import faker from 'faker';
import React from 'react';
import Text from '.';

storiesOf('Atoms', module).add('Text', () => (
  <Text>{faker.lorem.paragraphs()}</Text>
));
