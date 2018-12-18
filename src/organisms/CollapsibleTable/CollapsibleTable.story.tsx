import { storiesOf } from '@storybook/react';
import React from 'react';

import CollapsibleTable, { CollapsibleTableData } from './CollapsibleTable';

const basicData: CollapsibleTableData = {
  head: ['Name', 'Age'],
  body: [['Connor', '26'], ['David', '29']],
  config: {
    primaryColumn: 'Name',
  },
};
const groupData: CollapsibleTableData = {
  head: ['Name', 'Age'],
  body: [['Frank', '26']],
  groups: [
    {
      title: 'Employees',
      entries: [['Natalie', '22'], ['Andrea', '50']],
    },
  ],
  config: {
    primaryColumn: 'Name',
  },
};

storiesOf('Organisms', module).add('CollapsibleTable', () =>
  [basicData, groupData].map((data, index) => (
    <div key={index} style={{ marginBottom: '10rem' }}>
      <CollapsibleTable {...data} />
    </div>
  )),
);
