import { storiesOf } from '@storybook/react';
import React from 'react';

import CollapsibleTable, { CollapsibleTableData } from './CollapsibleTable';

const data: CollapsibleTableData = {
  head: ['Name', 'Age'],
  body: [['Connor', '26'], ['David', '29']],
  config: {
    primaryColumn: 'Name',
  },
};

storiesOf('Organisms', module).add('CollapsibleTable', () => (
  <CollapsibleTable {...data} />
));
