import { padding } from 'polished';
import styled, { css } from '../../styled-components';
import { scale } from '../../Theme';

export const Panel = styled.section<{ basic?: boolean; noPadding?: boolean }>`
  ${props =>
    !props.basic &&
    css`
      background: ${props.theme.panelBackground};
      border-radius: 6px;
      box-shadow: 0 1px rgba(0, 0, 0, 0.1), 0 1px 4px rgba(0, 0, 0, 0.12);
      margin-bottom: ${scale(0)};
      ${!props.noPadding && padding(scale(1), scale(2))};
    `};
`;

export default Panel;
