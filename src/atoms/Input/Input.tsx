import styled from '../../styled-components';
import Text from '../Text';

export const Input = styled(Text.withComponent('input'))`
  background-color: ${props => props.theme.controlBackground};
  border: 1px solid ${props => props.theme.controlBorder};
  border-radius: 3px;
  box-shadow: inset 0 1px 1px 0 rgba(63, 63, 68, 0.05);
  font-size: 1em;
  font-weight: bold;
`;

export default Input;
