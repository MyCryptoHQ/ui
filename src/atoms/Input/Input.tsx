import { padding } from 'polished';
import styled from '../../styled-components';
import { borderRadius, scale, transitionDuration } from '../../Theme';
import Text from '../Text';

export const Input = styled(Text.withComponent('input'))`
  background: ${props => props.theme.controlBackground};
  border: 0.125em solid ${props => props.theme.controlBorder};
  border-radius: ${borderRadius};
  font-size: ${scale(0)};
  font-weight: bold;
  ${padding(scale(-1), scale(0))};
  transition: border ${transitionDuration};

  :focus {
    border-color: ${props => props.theme.primary};
    outline: none;
  }
`;

export default Input;
