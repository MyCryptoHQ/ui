import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { StyledComponentClass } from 'styled-components';
import styled from '../../styled-components';
import Theme, { scale } from '../../Theme';
import Text from '../Text';

export const Heading = styled(Text)`
  color: ${(props: any) => props.as === 'h1' && props.theme.headline};
  font-size: ${(props: any) => scale(props.as === 'h1' ? 2 : 1)};
` as StyledComponentClass<
  DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
  Theme
>;

Heading.defaultProps = { as: 'h1' };

export default Heading;
