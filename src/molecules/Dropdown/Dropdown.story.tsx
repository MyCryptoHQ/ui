import { storiesOf } from '@storybook/react';
import React from 'react';

import Panel from '../../atoms/Panel';
import Typography from '../../Typography';
import Dropdown from './Dropdown';

storiesOf('Molecules', module).add('Dropdown', () => (
  <Panel>
    <Typography as="label">
      Network
      <br />
      <Dropdown items={new Set(['Ethereum', 'Ropsten'])} />
    </Typography>

    <Typography as="label">
      Custom Content
      <br />
      <Dropdown title="Hello, world!">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Dropdown>
    </Typography>
  </Panel>
));
