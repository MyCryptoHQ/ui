import { padding, transitions } from 'polished';
import styled from '../../styled-components';
import { scale } from '../../Theme';
import Text from '../Text';

export const Input = styled(Text.withComponent('input'))`
  background: ${props => props.theme.controlBackground};
  border: 1px solid ${props => props.theme.controlBorder};
  border-radius: 3px;
  box-shadow: inset 0 1px 1px 0 rgba(63, 63, 68, 0.05);
  font-size: ${scale(0)};
  font-weight: bold;
  ${padding(scale(-1), scale(0))};
  ${transitions(['border', 'box-shadow'], '0.12s')};

  :focus {
    border-color: ${props => props.theme.primary};
    box-shadow: inset 0 0 0 1px ${props => props.theme.primary};
    outline: none;
  }
`;

export default Input;
