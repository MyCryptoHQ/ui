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

  a {
    color: ${props => props.theme.text};
  }
  :hover {
    /* stylelint-disable-next-line max-nesting-depth */
    a {
      color: ${props => props.theme.primaryDark};
    }
  }
` as StyledComponentClass<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  Theme
>;

export function IconLink({ href, icon }: { href: string; icon: IconName }) {
  return (
    <IconTypography>
      <a href={href}>
        <Icon icon={icon} />
      </a>
    </IconTypography>
  );
}

IconTypography.defaultProps = { as: 'button', type: 'button' };

export default IconLink;
