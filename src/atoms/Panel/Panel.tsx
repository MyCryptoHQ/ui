import { padding } from 'polished';
import styled, { css } from '../../styled-components';
import { borderRadiusLarge, scale } from '../../Theme';

export const Panel = styled.section<{ basic?: boolean; noPadding?: boolean }>`
  ${props =>
    !props.basic &&
    css`
      background: ${props.theme.panelBackground};
      border-radius: ${borderRadiusLarge};
      box-shadow: 0 0.1875em 0.375em 0 #00000012;
      margin-bottom: ${scale(0)};
      ${!props.noPadding && padding(scale(1), scale(2))};
    `};
`;

export default Panel;
