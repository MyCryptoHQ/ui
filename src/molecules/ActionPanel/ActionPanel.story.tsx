import { storiesOf } from '@storybook/react';
import faker from 'faker';
import React from 'react';

import Typography from '../../Typography';
import ActionPanel from './ActionPanel';

storiesOf('Molecules', module).add('ActionPanel', () =>
  [{}, { noPadding: true }].map((props, index) => (
    <ActionPanel key={index} action="View Example" {...props}>
      <Typography>{faker.lorem.paragraphs()}</Typography>
    </ActionPanel>
  )),
);
