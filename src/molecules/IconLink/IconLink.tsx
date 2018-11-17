import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { StyledComponentClass } from 'styled-components';

import styled from '_styled-components';
import { Icon, IconName } from 'atoms';
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
  'aria-label': ariaLabel,
  handleClick,
}: {
  href?: string;
  target?: string;
  icon: IconName;
  'aria-label': string;
  handleClick?(): void;
}) {
  return href ? (
    <a href={href} target={target} aria-label={ariaLabel}>
      <IconTypography onClick={handleClick}>
        <Icon icon={icon} />
      </IconTypography>
    </a>
  ) : (
    <IconTypography onClick={handleClick} aria-label={ariaLabel}>
      <Icon icon={icon} />
    </IconTypography>
  );
}

export default IconLink;
