import { storiesOf } from '@storybook/react';
import React from 'react';

import Typography from 'src/Typography';
import Tooltip from './Tooltip';

storiesOf('Atoms', module).add('Tooltip', () => (
  <React.StrictMode>
    <Typography>Before</Typography>
    <Tooltip tooltip={<Typography as="div">Hello world!</Typography>}>
      {props => <Typography {...props}>Hover here!</Typography>}
    </Tooltip>
    <Typography>After</Typography>
  </React.StrictMode>
));
