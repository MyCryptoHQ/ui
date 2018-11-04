import { storiesOf } from '@storybook/react';
import React from 'react';
import List from '.';

storiesOf('Molecules', module).add('List', () =>
  [{}, { basic: true }, { ordered: true }, { group: true }].map(
    (props, index) => (
      <List key={index} {...props}>
        {['Foo', 'Bar', 'Baz']}
      </List>
    ),
  ),
);
