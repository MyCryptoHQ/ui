import styled from '../../styled-components';

export const Panel = styled.section<{ basic?: boolean; noPadding?: boolean }>`
  ${props =>
    !props.basic &&
    `
      background: ${props.theme.panelBackground};
      border-radius: 6px;
      box-shadow: 0 1px rgba(0, 0, 0, 0.1), 0 1px 4px rgba(0, 0, 0, 0.12);
      margin: 0 auto 1em;
      padding: ${!props.noPadding && '1.5em 2em'};
    `};
`;

export default Panel;
