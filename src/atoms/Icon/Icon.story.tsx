import { storiesOf } from '@storybook/react';
import React from 'react';

import styled from '../../styled-components';
import { monospace } from '../../Theme';
import Typography from '../../Typography';
import Icon, { icons } from './Icon';

const Code = styled(Typography).attrs({ as: 'code' })`
  display: block;
  font-family: ${monospace};
`;

storiesOf('Atoms', module).add('Icon', () => (
  <Typography>
    {Object.keys(icons).map(icon => (
      <Code key={icon}>
        <Icon icon={icon as keyof typeof icons} /> {icon}
      </Code>
    ))}
  </Typography>
));
