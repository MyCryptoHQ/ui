import styled from 'styled-components';
import '../../colors.css';

const Button = styled.button.attrs({ type: 'button' })`
  background-color: var(--color-4);
  border-radius: 2px;
  color: #ffffff;
  font-family: Lato, sans-serif;
  font-size: 18px;
  height: 50px;
  width: 200px;
`;

export default Button;
