import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';
import { StyledComponentClass } from 'styled-components';

import Input from 'src/atoms/Input';
import styled from 'src/styled-components';
import Theme from 'src/Theme';

export const Textarea = styled(Input)`` as StyledComponentClass<
  DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >,
  Theme
>;

Textarea.defaultProps = { as: 'textarea' };

export default Textarea;
