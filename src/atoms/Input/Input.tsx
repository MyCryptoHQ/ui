import { padding } from 'polished';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { StyledComponentClass } from 'styled-components';

import styled from '_styled-components';
import Theme, { borderRadius, scale, transitionDuration } from 'Theme';
import Typography from 'Typography';

export const Input = styled(Typography)`
  background: ${props => props.theme.controlBackground};
  border: 0.125em solid ${props => props.theme.controlBorder};
  border-radius: ${borderRadius};
  font-size: ${scale(0)};
  font-weight: bold;
  ${padding(scale(-1), scale(0))};
  transition: border ${transitionDuration}, box-shadow ${transitionDuration};

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px white, 0 0 0 4px ${props => props.theme.primary};
  }
` as StyledComponentClass<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  Theme
>;

Input.defaultProps = { as: 'input' };

export default Input;
