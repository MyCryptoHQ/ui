import { padding, transitions } from 'polished';
import React, {
  ButtonHTMLAttributes,
  ClassAttributes,
  DetailedHTMLProps,
} from 'react';
import {
  StyledComponentClass,
  ThemedOuterStyledProps,
} from 'styled-components';

import Omit from '../../Omit';
import styled from '../../styled-components';
import Theme, { borderRadius, scale, transitionDuration } from '../../Theme';
import Typography from '../../Typography';
import Icon, { icons } from '../Icon';

export const BasicButton = styled(Typography)`
  background: none;
  border: none;
  cursor: pointer;
  font-size: ${scale(0)};
  padding: 0;
` as StyledComponentClass<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  Theme
>;

BasicButton.defaultProps = { as: 'button', type: 'button' };

export interface StyledButtonProps {
  large?: boolean;
  secondary?: boolean;
}

const StyledButton = styled(BasicButton)<StyledButtonProps>`
  background: ${props => !props.secondary && props.theme.primary};
  border: ${props => props.secondary && '.125em solid' + props.theme.primary};
  border-radius: ${borderRadius};
  color: ${props => (props.secondary ? props.theme.primary : 'white')};
  font-size: ${props => props.large && scale(1)};
  ${padding(scale(-1), scale(2))};
  ${transitions(
    ['opacity', 'background', 'color', 'box-shadow'],
    transitionDuration,
  )};
  user-select: none;

  :focus {
    box-shadow: ${props => props.theme.outline};
    outline: none;
  }

  &:focus,
  &:hover {
    background: ${props =>
      props.secondary ? props.theme.primary : props.theme.primaryDark};
    color: ${props => props.secondary && 'white'};
  }

  &:active {
    background: ${props =>
      props.secondary ? props.theme.primaryDark : props.theme.primaryDarker};
  }
`;

export interface ButtonProps {
  basic?: boolean;
  icon?: keyof typeof icons;
}

export function Button({
  basic,
  children,
  icon,
  ...rest
}: ButtonProps &
  Omit<
    ThemedOuterStyledProps<
      DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
      > &
        ClassAttributes<HTMLButtonElement> &
        ButtonHTMLAttributes<HTMLButtonElement> &
        StyledButtonProps,
      Theme
    >,
    'ref'
  >) {
  const ButtonComponent = basic || icon ? BasicButton : StyledButton;

  return (
    <ButtonComponent {...rest}>
      {icon ? <Icon icon={icon} /> : children}
    </ButtonComponent>
  );
}

export default Button;
