import { storiesOf } from '@storybook/react';
import React from 'react';

import OptionPreview from '../Option/Option.story';
import DataList from './DataList';

storiesOf('Atoms', module).add('DataList', () => (
  <DataList>
    <OptionPreview />
  </DataList>
));
