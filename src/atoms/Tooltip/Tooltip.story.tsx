import { storiesOf } from '@storybook/react';
import React from 'react';

import Typography from 'Typography';
import Tooltip from './Tooltip';

storiesOf('Atoms', module).add('Tooltip', () => (
  <>
    <Typography>Before</Typography>
    <Tooltip tooltip={<Typography as="div">Hello world!</Typography>}>
      {props => <Typography {...props}>Hover here!</Typography>}
    </Tooltip>
    <Typography>After</Typography>
  </>
));
