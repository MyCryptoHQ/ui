import { storiesOf } from '@storybook/react';
import faker from 'faker';
import React from 'react';

import Drawer from './Drawer';

storiesOf('Organisms', module).add('Drawer', () =>
  [{}].map((props, index) => (
    <Drawer key={index} {...props}>
      {faker.lorem.paragraphs()}
    </Drawer>
  )),
);
