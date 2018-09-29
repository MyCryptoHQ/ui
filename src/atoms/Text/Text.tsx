import 'typeface-lato';
import styled from '../../styled-components';

export const Text = styled.p`
  color: ${props => props.theme.text};
  font-family: Lato, sans-serif;
`;

export default Text;
