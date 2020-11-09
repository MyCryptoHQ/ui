import { storiesOf } from '@storybook/react';
import faker from 'faker';
import React from 'react';

import { Drawer } from '..';
import { List } from '../../molecules';
import Typography from '../../Typography';

storiesOf('Organisms', module).add('Drawer', () => (
  <>
    {[
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
    ))}
  </>
));
