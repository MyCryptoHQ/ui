import { padding, transitions } from 'polished';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { StyledComponentClass } from 'styled-components';

import styled from '_styled-components';
import { Typography } from 'atoms';
import Theme, { borderRadius, scale, transitionDuration } from 'Theme';

interface Props {
  large?: boolean;
}

export const Button = styled(Typography)<Props>`
  background: ${props => props.theme.primary};
  border: none;
  border-radius: ${borderRadius};
  color: white;
  font-size: ${scale(0)};
  ${padding(scale(-1), scale(2))};
  ${transitions(['opacity', 'background'], transitionDuration)};
  user-select: none;
  ${props =>
    props.large &&
    `
      font-size: ${scale(1)};
    `};

  &:focus,
  &:hover {
    background: ${props => props.theme.primaryDark};
  }

  &:active {
    background: ${props => props.theme.primaryDarker};
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
