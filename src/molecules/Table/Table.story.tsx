import { storiesOf } from '@storybook/react';
import React from 'react';

import Table from './Table';

const data = {
  head: ['Name', 'Age'],
  body: [['Connor', '26'], ['Dave', '30'], ['Steve', '32']],
  groups: [
    {
      title: 'Prospects',
      entries: [['Aaron', '18'], ['Craig', '20']],
    },
  ],
};

storiesOf('Molecules', module).add('Table', () => (
  <Table head={data.head} body={data.body} groups={data.groups} />
));
