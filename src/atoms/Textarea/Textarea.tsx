import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';
import { StyledComponentClass } from 'styled-components';

import styled from '../../styled-components';
import Theme from '../../Theme';
import Input from '../Input';

export const Textarea = styled(Input)`` as StyledComponentClass<
  DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >,
  Theme
>;

Textarea.defaultProps = { as: 'textarea' };

export default Textarea;
