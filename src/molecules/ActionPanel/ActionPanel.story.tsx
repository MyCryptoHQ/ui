import { storiesOf } from '@storybook/react';
import faker from 'faker';
import React from 'react';
import ActionPanel from '.';
import Typography from '../../atoms/Typography';

storiesOf('Molecules', module).add('ActionPanel', () =>
  [{}, { noPadding: true }].map((props, index) => (
    <ActionPanel
      key={index}
      action="View Example"
      href="https://example.com/"
      {...props}
    >
      <Typography>{faker.lorem.paragraphs()}</Typography>
    </ActionPanel>
  )),
);
