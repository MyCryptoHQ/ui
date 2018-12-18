import { storiesOf } from '@storybook/react';
import faker from 'faker';
import React from 'react';

import Typography from 'src/Typography';
import ActionPanel from './ActionPanel';

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
