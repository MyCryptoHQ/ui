import styled from '../../styled-components';
import { scale } from '../../Theme';
import Typography from '../../Typography';

export const Heading = styled(Typography)`
  color: ${(props: any) => props.as === 'h1' && props.theme.headline};
  font-size: ${(props: any) => scale(props.as === 'h1' ? 2 : 1)};
`;

Heading.defaultProps = { as: 'h1' };

export default Heading;
