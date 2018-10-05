import styled from '../../styled-components';

export const Panel = styled.section`
  background: ${props => props.theme.panelBackground};
  border-radius: 2px;
  box-shadow: 0 1px rgba(0, 0, 0, 0.1), 0 1px 4px rgba(0, 0, 0, 0.12);
  margin: 0 auto 1rem;
  padding: 1.5rem 2rem;
`;

export default Panel;
