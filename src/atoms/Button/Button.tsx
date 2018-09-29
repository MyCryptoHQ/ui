import styled, { css } from '../../styled-components';

const largeMixin = css`
  font-size: 1.15rem;
  line-height: 1.2;
  padding: 1rem 2rem;
`;

export const Button = styled.button<{ large?: boolean }>`
  background-color: ${props => props.theme.primary};
  border-color: ${props => props.theme.primary};
  border-radius: 2px;
  border: 1px solid transparent;
  color: #ffffff;
  font-family: Lato, sans-serif;
  font-size: 18px;
  line-height: 1.4;
  padding: 0.75rem 2rem;
  transition: opacity 0.12s ease, color 0.12s ease, background-color 0.12s ease,
    border-color 0.12s ease;
  user-select: none;

  ${props => props.large && largeMixin};

  &:focus,
  &:hover {
    background-color: ${props => props.theme.primaryDark};
    border-color: ${props => props.theme.primaryDark};
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  }

  &:active {
    background-color: ${props => props.theme.primaryDarker};
    border-color: ${props => props.theme.primaryDarker};
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  }
`;

Button.defaultProps = { type: 'button' };

export default Button;
