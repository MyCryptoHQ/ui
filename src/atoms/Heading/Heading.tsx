import styled from '../../styled-components';
import { scale } from '../../Theme';
import Typography from '../../Typography';

export const Heading = styled(Typography).attrs({ as: 'h1' })`
  color: ${(props: any) => props.as === 'h1' && props.theme.headline};
  font-size: ${(props: any) => scale(props.as === 'h1' ? 2 : 1)};
`;

export default Heading;
