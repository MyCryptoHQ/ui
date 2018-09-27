import React, { ButtonHTMLAttributes } from 'react';
import styled from '../../styled-components';

function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button type="button" {...props} />;
}

export const StyledButton = styled(Button)`
  background-color: ${props => props.theme.primaryColor};
  border-radius: 2px;
  border: 0;
  color: #ffffff;
  font-family: Lato, sans-serif;
  font-size: 18px;
  height: 50px;
  width: 200px;
`;

export default StyledButton;
