import styled from '../../styled-components';

export const StyledButton = styled.button`
  background-color: ${props => props.theme.primary};
  border-radius: 2px;
  border: 0;
  color: #ffffff;
  font-family: Lato, sans-serif;
  font-size: 18px;
  height: 50px;
  width: 200px;
`;

export default StyledButton;

StyledButton.defaultProps = { type: 'button' };
