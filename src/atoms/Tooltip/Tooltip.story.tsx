import { storiesOf } from '@storybook/react';
import React from 'react';

import Typography from 'src/Typography';
import Tooltip from './Tooltip';

storiesOf('Atoms', module).add('Tooltip', () => (
  <>
    <Typography>Before</Typography>
    <Tooltip tooltip="test">
      <span>test</span>
    </Tooltip>
    <Typography>After</Typography>
  </>
));
