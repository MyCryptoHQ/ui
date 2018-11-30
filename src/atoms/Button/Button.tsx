import { padding, transitions } from 'polished';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { StyledComponentClass } from 'styled-components';

import styled from 'src/styled-components';
import Theme, { borderRadius, scale, transitionDuration } from 'src/Theme';
import Typography from 'src/Typography';

interface Props {
  large?: boolean;
  secondary?: boolean;
}

export const Button = styled(Typography)<Props>`
  background: ${props => (props.secondary ? 'none' : props.theme.primary)};
  border: ${props =>
    props.secondary ? '.125em solid' + props.theme.primary : 'none'};
  border-radius: ${borderRadius};
  color: ${props => (props.secondary ? props.theme.primary : 'white')};
  font-size: ${scale(0)};
  ${padding(scale(-1), scale(2))};
  ${transitions(['opacity', 'background', 'color'], transitionDuration)};
  user-select: none;
  ${props =>
    props.large &&
    `
      font-size: ${scale(1)};
    `};

  &:focus,
  &:hover {
    background: ${props =>
      props.secondary ? props.theme.primary : props.theme.primaryDark};
    ${props =>
      props.secondary &&
      `
        color: white;
      `};
  }

  &:active {
    background: ${props =>
      props.secondary ? props.theme.primaryDark : props.theme.primaryDarker};
  }
` as StyledComponentClass<
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > &
    Props,
  Theme
>;

Button.defaultProps = { as: 'button', type: 'button' };

export default Button;
