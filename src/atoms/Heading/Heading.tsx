import { modularScale } from 'polished';
import React, { HTMLAttributes } from 'react';
import { ThemedOuterStyledProps } from 'styled-components';
import styled from '../../styled-components';
import Theme from '../../Theme';
import Text from '../Text';

const scale = (level: number) => modularScale(level, undefined, 1.5);

const Heading1 = styled(Text.withComponent('h1'))`
  color: ${props => props.theme.headline};
  font-size: ${scale(2)};
  font-weight: bold;
`;

const Heading2 = styled(Text.withComponent('h2'))`
  color: ${props => props.theme.text};
  font-size: ${scale(1)};
  font-weight: bold;
`;

export function Heading({
  variant,
  ...rest
}: ThemedOuterStyledProps<
  HTMLAttributes<HTMLHeadingElement> & { variant?: 'h1' | 'h2' },
  Theme
>) {
  return variant === 'h2' ? <Heading2 {...rest} /> : <Heading1 {...rest} />;
}

export default Heading;
