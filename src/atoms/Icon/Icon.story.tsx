import { storiesOf } from '@storybook/react';
import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import { StyledComponentClass } from 'styled-components';

import styled from '../../styled-components';
import Theme, { monospace } from '../../Theme';
import Typography from '../../Typography';
import Icon, { icons } from './Icon';

const Code = styled(Typography)`
  display: block;
  font-family: ${monospace};
` as StyledComponentClass<
  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
  Theme
>;

Code.defaultProps = { as: 'code' };

storiesOf('Atoms', module).add('Icon', () => (
  <Typography>
    {Object.keys(icons).map(icon => (
      <Code key={icon}>
        <Icon icon={icon as keyof typeof icons} /> {icon}
      </Code>
    ))}
  </Typography>
));
