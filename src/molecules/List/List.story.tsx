import { storiesOf } from '@storybook/react';
import React from 'react';

import List from './List';

const children = ['Foo', 'Bar', 'Baz'];
const listData = [
  {
    term: 'Address 1',
    definition: 'Some Address',
  },
  {
    term: 'Address 2',
    definition: 'Another Address',
  },
];

storiesOf('Molecules', module).add('List', () => (
  <>
    {[
      {},
      { basic: true },
      { ordered: true },
      { group: true },
      {
        descriptionData: listData,
      },
    ].map((props, index) => (
      <List key={index} {...props}>
        {children}
      </List>
    ))}

    <List group={true} inline={true}>
      {children}
    </List>
  </>
));
