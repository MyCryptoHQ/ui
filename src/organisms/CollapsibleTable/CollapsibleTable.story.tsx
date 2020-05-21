import { storiesOf } from '@storybook/react';
import React from 'react';

import { Icon } from '../../atoms';
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
  body: [['Frank', '39']],
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
const iconData: CollapsibleTableData = {
  head: ['Favorite', 'Name', 'Age', 'Watching'],
  body: [
    [
      <Icon key={0} icon="star" />,
      'Connor',
      '26',
      <Icon key={4} icon="starO" />,
    ],
    [null, 'Frank', '39', null],
  ],
  config: {
    primaryColumn: 'Name',
    iconColumns: ['Favorite', 'Watching'],
  },
};

storiesOf('Organisms', module).add('CollapsibleTable', () =>
  [basicData, groupData, iconData].map((data, index) => (
    <div key={index} style={{ marginBottom: '10rem' }}>
      <CollapsibleTable breakpoint={450} {...data} />
    </div>
  )),
);
