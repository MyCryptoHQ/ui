import { padding, transitions } from 'polished';
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { StyledComponentClass } from 'styled-components';

import styled, { css } from '_styled-components';
import Icon, { IconName } from 'atoms/Icon';
import Theme, { borderRadius, scale, transitionDuration } from 'Theme';
import { ExtractProps, Omit } from 'types';
import Typography from 'Typography';

interface CustomProps {
  large?: boolean;
  secondary?: boolean;
}

type Props = CustomProps & { basic?: boolean };

const basic = css`
  background: none;
  border: none;
  padding: 0;
`;

const custom = css<CustomProps>`
  background: ${props => (props.secondary ? 'none' : props.theme.primary)};
  border: ${props =>
    props.secondary ? '.125em solid' + props.theme.primary : 'none'};
  border-radius: ${borderRadius};
  color: ${props => (props.secondary ? props.theme.primary : 'white')};
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
`;

export const ButtonBase = styled(Typography)<Props>`
  cursor: pointer;
  font-size: ${scale(0)};
  ${props => (props.basic ? basic : custom)};
` as StyledComponentClass<
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > &
    Props,
  Theme
>;

export function Button({
  children,
  icon,
  ...rest
}: { icon?: IconName } & Omit<ExtractProps<typeof ButtonBase>, 'ref'>) {
  return (
    <ButtonBase basic={Boolean(icon)} {...rest}>
      {icon ? <Icon icon={icon} /> : children}
    </ButtonBase>
  );
}

Button.defaultProps = { as: 'button', type: 'button' };

export default Button;
