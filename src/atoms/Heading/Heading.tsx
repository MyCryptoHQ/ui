import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { StyledComponentClass } from 'styled-components';

import styled from 'src/styled-components';
import Theme, { scale } from 'src/Theme';
import Typography from 'src/Typography';

export const Heading = styled(Typography)`
  color: ${(props: any) => props.as === 'h1' && props.theme.headline};
  font-size: ${(props: any) => scale(props.as === 'h1' ? 2 : 1)};
` as StyledComponentClass<
  DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
  Theme
>;

Heading.defaultProps = { as: 'h1' };

export default Heading;
