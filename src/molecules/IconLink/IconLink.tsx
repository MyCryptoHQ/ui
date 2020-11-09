import React, { HTMLAttributes } from 'react';

import { Icon, icons } from '../../atoms';
import styled from '../../styled-components';
import Typography from '../../Typography';

export const IconTypography = styled(Typography).attrs({
  as: 'button',
  type: 'button',
})`
  background: none;
  border: none;
  padding: 0;
  color: ${props => props.theme.text};
  cursor: pointer;

  :hover {
    color: ${props => props.theme.primaryDark};
  }
`;

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
