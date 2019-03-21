import { storiesOf } from '@storybook/react';
import React from 'react';

import AddressLabelProps from './EditableTitle';

storiesOf('Atoms', module).add('EditableTitle', () => (
  <>
    <AddressLabel editable={true} onSubmit={console.log} />
    <AddressLabel editable={false} />
  </>
));
