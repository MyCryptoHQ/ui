import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import primaryColor from '../../colors';

function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button type="button" {...props} />;
}

export default styled(Button)`
  background-color: ${primaryColor};
  border-radius: 2px;
  color: #ffffff;
  font-family: Lato, sans-serif;
  font-size: 18px;
  height: 50px;
  width: 200px;
`;
