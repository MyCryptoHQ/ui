import { storiesOf } from '@storybook/react';
import faker from 'faker';
import React from 'react';
import ActionPanel from '.';
import Text from '../../atoms/Text';

storiesOf('Molecules', module).add('ActionPanel', () => (
  <ActionPanel action="View Example" href="https://example.com/">
    <Text>{faker.lorem.paragraphs()}</Text>
  </ActionPanel>
));
