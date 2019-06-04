import { storiesOf } from '@storybook/react';
import React from 'react';

import Option from '../Option';
import DataList from './DataList';

storiesOf('Atoms', module).add('DataList', () => (
  <DataList>
    <Option>Click Here for Option 01</Option>
    <Option>Click Here for Option 02</Option>
    <Option>Click Here for Option 03</Option>
  </DataList>
));
