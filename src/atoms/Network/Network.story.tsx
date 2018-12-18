import { storiesOf } from '@storybook/react';
import React from 'react';

import { Network } from 'src/atoms';

storiesOf('Atoms', module).add('Network', () => (
  <Network color="#a682ff">Ethereum</Network>
));
