import { storiesOf } from '@storybook/react';
import faker from 'faker';
import React from 'react';
import ActionPanel from '.';
import Text from '../../atoms/Text';

storiesOf('Molecules', module).add('ActionPanel', () =>
  [{}, { noPadding: true }].map((props, index) => (
    <ActionPanel
      key={index}
      action="View Example"
      href="https://example.com/"
      {...props}
    >
      <Text>{faker.lorem.paragraphs()}</Text>
    </ActionPanel>
  )),
);
