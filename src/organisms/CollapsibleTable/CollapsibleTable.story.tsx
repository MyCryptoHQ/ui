import { storiesOf } from '@storybook/react';
import React from 'react';

import CollapsibleTable from './CollapsibleTable';

const data = {
  head: ['Foo', 'Bar'],
  body: [['A', 'A'], ['B', 'C']],
};

storiesOf('Organisms', module).add('CollapsibleTable', () => (
  <CollapsibleTable {...data} />
));
