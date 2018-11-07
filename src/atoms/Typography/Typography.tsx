import 'typeface-lato';
import styled from '../../styled-components';

export const Typography = styled.p`
  color: ${props => props.theme.text};
  font-family: Lato, sans-serif;
  line-height: 1.5;
`;

export default Typography;
