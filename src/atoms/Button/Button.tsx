import { padding, transitions } from 'polished';
import styled from '../../styled-components';
import { scale } from '../../Theme';
import Text from '../Text';

export const Button = styled(Text.withComponent('button'))<{ large?: boolean }>`
  background: ${props => props.theme.primary};
  border: 1px solid ${props => props.theme.primary};
  border-radius: 2px;
  color: white;
  font-size: ${scale(0)};
  ${padding(scale(-1), scale(2))};
  ${transitions(['opacity', 'color', 'background', 'border'], '0.12s ease')};
  user-select: none;
  ${props =>
    props.disabled &&
    `
      opacity: 0.4;
      cursor: not-allowed;
    `};
  ${props =>
    props.large &&
    `
      font-size: ${scale(1)};
    `};

  &:focus,
  &:hover {
    background: ${props => props.theme.primaryDark};
    border-color: ${props => props.theme.primaryDark};
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  }

  &:active {
    background: ${props => props.theme.primaryDarker};
    border-color: ${props => props.theme.primaryDarker};
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  }
`;

Button.defaultProps = { type: 'button' };

export default Button;
