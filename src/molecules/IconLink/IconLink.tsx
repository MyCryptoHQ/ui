import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  HTMLAttributes,
} from 'react';
import { StyledComponentClass } from 'styled-components';

import styled from '_styled-components';
import { Icon, icons } from 'atoms';
import Theme from 'Theme';
import Typography from 'Typography';

export const IconTypography = styled(Typography)`
  background: none;
  border: none;
  padding: 0;
  color: ${props => props.theme.text};
  cursor: pointer;

  :hover {
    color: ${props => props.theme.primaryDark};
  }
` as StyledComponentClass<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  Theme
>;

IconTypography.defaultProps = { as: 'button', type: 'button' };

export function IconLink({
  href,
  target,
  icon,
  handleClick,
  ...rest
}: {
  href?: string;
  target?: string;
  icon: keyof typeof icons;
  handleClick?(): void;
} & HTMLAttributes<HTMLElement>) {
  return href ? (
    <a href={href} target={target} {...rest}>
      <IconTypography onClick={handleClick}>
        <Icon icon={icon} />
      </IconTypography>
    </a>
  ) : (
    <IconTypography onClick={handleClick} {...rest}>
      <Icon icon={icon} />
    </IconTypography>
  );
}

export default IconLink;
