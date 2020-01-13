import { storiesOf } from '@storybook/react';
import React from 'react';

import styled from '../../styled-components';
import Typography from '../../Typography';
import Tooltip from './Tooltip';

const Wrapper = styled.div`
  display: inline-block;
`;

storiesOf('Atoms', module).add('Tooltip', () => (
  <>
    <Typography>Before</Typography>
    <Tooltip
      placement="top"
      tooltip={<Typography as="div">Hello world!</Typography>}
    >
      <Wrapper>
        <Typography>Hover here!</Typography>
      </Wrapper>
    </Tooltip>
    <Typography>After</Typography>
  </>
));
