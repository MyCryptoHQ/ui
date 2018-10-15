import React, { HTMLAttributes } from 'react';
import { ThemedOuterStyledProps } from 'styled-components';
import styled from '../../styled-components';
import Theme, { scale } from '../../Theme';
import Text from '../Text';

const Heading1 = styled(Text.withComponent('h1'))`
  color: ${props => props.theme.headline};
  font-size: ${scale(2)};
`;

const Heading2 = styled(Text.withComponent('h2'))`
  font-size: ${scale(1)};
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
