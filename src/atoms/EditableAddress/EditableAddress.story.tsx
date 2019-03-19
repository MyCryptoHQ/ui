import { storiesOf } from '@storybook/react';
import React from 'react';

import EditableAddress from './EditableAddress';

storiesOf('Atoms', module).add('EditableAddress', () => (
  <>
    <EditableAddress editable={true} onSubmit={console.log} />
    <EditableAddress editable={false} />
  </>
));
