import { storiesOf } from '@storybook/react';
import React from 'react';

import Table from './Table';

storiesOf('Molecules', module).add('Table', () =>
  [{}].map((props, index) => <Table key={index} />),
);
