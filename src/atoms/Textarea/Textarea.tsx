import { padding } from 'polished';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { StyledComponentClass } from 'styled-components';
import styled from '../../styled-components';
import Theme, { borderRadius, scale, transitionDuration } from '../../Theme';
import Typography from '../Typography';

export const Textarea = styled(Typography)`
  background: ${props => props.theme.controlBackground};
  border: 0.125em solid ${props => props.theme.controlBorder};
  border-radius: ${borderRadius};
  font-size: ${scale(0)};
  font-weight: bold;
  ${padding(scale(-1), scale(0))};
  transition: border ${transitionDuration};

  :focus {
    border-color: ${props => props.theme.primary};
    outline: none;
  }
` as StyledComponentClass<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  Theme
>;

Textarea.defaultProps = { as: 'textarea' };

export default Textarea;
