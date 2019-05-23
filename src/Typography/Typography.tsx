import { fluidRange, transparentize } from 'polished';

import styled from '../styled-components';

export const Typography = styled.p<{ muted?: boolean; as?: string }>`
  color: ${props =>
    props.muted ? transparentize(0.25, props.theme.text) : props.theme.text};
  ${fluidRange(
    { prop: 'font-size', fromSize: '16px', toSize: '18px' },
    '400px',
    '1000px',
  )};
  font-family: Lato, sans-serif;
  line-height: 1.5;
  ${props =>
    props.as === 'h2' &&
    fluidRange(
      { prop: 'font-size', fromSize: '24px', toSize: '36px' },
      '400px',
      '1000px',
    )};
  ${props =>
    props.as === 'h1' &&
    fluidRange(
      { prop: 'font-size', fromSize: '36px', toSize: '48px' },
      '400px',
      '1000px',
    )};
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
