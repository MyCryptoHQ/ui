import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { StyledComponentClass } from 'styled-components';
import Icon, { IconName } from '../../atoms/Icon';
import Typography from '../../atoms/Typography';
import styled from '../../styled-components';
import Theme from '../../Theme';
// import { IconName } from '@fortawesome/fontawesome-svg-core';

IconLink.defaultProps = { as: 'a' };

export const IconTypography = styled(Typography)`
  background: none;
  border: none;
  padding: 0;
  color: ${props => props.theme.text};

  :hover {
    color: ${props => props.theme.primaryDark};
    /* stylelint-disable-next-line max-nesting-depth */
  }
` as StyledComponentClass<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  Theme
>;

export function IconLink({
  href,
  target,
  icon,
  handleClick,
}: {
  href?: string;
  target?: string;
  icon: IconName;
  handleClick?(): void;
}) {
  return href ? (
    <a href={href} target={target}>
      <IconTypography onClick={handleClick}>
        <Icon icon={icon} />
      </IconTypography>
    </a>
  ) : (
    <IconTypography onClick={handleClick}>
      <Icon icon={icon} />
    </IconTypography>
  );
}

IconTypography.defaultProps = { as: 'button', type: 'button' };

export default IconLink;
