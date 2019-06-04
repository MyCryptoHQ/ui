import { storiesOf } from '@storybook/react';
import React from 'react';

import Typography from '../../Typography';
import Panel from '../Panel';
import Dropdown from './Dropdown';

storiesOf('Atoms', module).add('Dropdown', () => (
  <Panel>
    <Typography as="label">
      Network
      <br />
      <Dropdown items={new Set(['Ethereum', 'Ropsten'])} />
    </Typography>
  </Panel>
));
