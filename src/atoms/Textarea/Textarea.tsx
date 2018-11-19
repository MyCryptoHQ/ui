/* stylelint-disable block-no-empty */
import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';
import { StyledComponentClass } from 'styled-components';

import styled from '_styled-components';
import Input from 'atoms/Input';
import Theme from 'Theme';

export const Textarea = styled(Input)`` as StyledComponentClass<
  DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >,
  Theme
>;

Textarea.defaultProps = { as: 'textarea' };

export default Textarea;
