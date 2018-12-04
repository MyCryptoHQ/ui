import { padding, transitions } from 'polished';
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { StyledComponentClass } from 'styled-components';

import styled from '_styled-components';
import Icon, { IconName } from 'atoms/Icon';
import Theme, { borderRadius, scale, transitionDuration } from 'Theme';
import { ExtractProps, Omit } from 'types';
import Typography from 'Typography';

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

const StyledButton = styled(BasicButton)<{
  large?: boolean;
  secondary?: boolean;
}>`
  background: ${props => !props.secondary && props.theme.primary};
  border: ${props => props.secondary && '.125em solid' + props.theme.primary};
  border-radius: ${borderRadius};
  color: ${props => (props.secondary ? props.theme.primary : 'white')};
  font-size: ${props => props.large && scale(1)};
  ${padding(scale(-1), scale(2))};
  ${transitions(['opacity', 'background', 'color'], transitionDuration)};
  user-select: none;

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

export function Button({
  basic,
  children,
  icon,
  ...rest
}: { basic?: boolean; icon?: IconName } & Omit<
  ExtractProps<typeof StyledButton>,
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
