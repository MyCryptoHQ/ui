import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
import { StyledComponentClass } from 'styled-components';
import Typography from '../../atoms/Typography';
import styled from '../../styled-components';
import Theme from '../../Theme';

interface Props {
  href?: string;
  target?: string;
}

export const Link = styled(Typography)<Props>`
  color: ${props => props.theme.link};
  text-decoration: none;

  :hover {
    color: ${props => props.theme.linkHover};
  }
` as StyledComponentClass<
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
  Theme,
  Props
>;

Link.defaultProps = { as: 'a' };

export default Link;
