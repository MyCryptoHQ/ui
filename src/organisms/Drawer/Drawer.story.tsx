import { storiesOf } from '@storybook/react';
import faker from 'faker';
import React from 'react';

import { List } from 'molecules';
import { Drawer } from 'organisms';

import Typography from 'Typography';

// function Dummy() {
//   return <Typography>lol</Typography>;
// }

storiesOf('Organisms', module).add('Drawer', () =>
  [
    {
      headerTitle: 'Title',
      headerText:
        'MyCrypto allows you to interact with your funds on many different networks. Choose one below to get started!',
      footer: <List group={true}>{['Foo', 'Bar', 'Baz']}</List>,
    },
  ].map((props, index) => (
    <Drawer key={index} {...props}>
      <Typography>{faker.lorem.paragraphs()}</Typography>
    </Drawer>
  )),
);
