import 'typeface-lato';

import styled from '_styled-components';

export const Typography = styled.p`
  color: ${props => props.theme.text};
  font-family: Lato, sans-serif;
  line-height: 1.5;

  a {
    color: ${props => props.theme.link};
    text-decoration: none;
    font-weight: bold;

    /* stylelint-disable-next-line max-nesting-depth */
    :hover {
      color: ${props => props.theme.linkHover};
    }
  }
`;

export default Typography;
