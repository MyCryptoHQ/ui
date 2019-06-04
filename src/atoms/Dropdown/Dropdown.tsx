import { padding } from 'polished';
import React, { DetailedHTMLProps, SelectHTMLAttributes } from 'react';
import { StyledComponentClass } from 'styled-components';

import Omit from '../../Omit';
import styled from '../../styled-components';
import Theme, { borderRadius, scale, transitionDuration } from '../../Theme';
import Typography from '../../Typography';

export interface DropdownProps {
  items: Set<string | number>;
}

const Select = styled(Typography)`
  appearance: none;
  background: ${props => props.theme.controlBackground};
  border: 0.125em solid ${props => props.theme.controlBorder};
  border-radius: ${borderRadius};
  ${padding(scale(-1), scale(0))};
  transition: border ${transitionDuration}, box-shadow ${transitionDuration};
  width: 100%;
  :focus {
    outline: none;
    box-shadow: ${props => props.theme.outline};
  }
` as StyledComponentClass<
  DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>,
  Theme
>;

Select.defaultProps = { as: 'select' };

export function Dropdown({
  items,
  ...rest
}: DropdownProps &
  Omit<
    DetailedHTMLProps<
      SelectHTMLAttributes<HTMLSelectElement>,
      HTMLSelectElement
    >,
    'ref'
  >) {
  return (
    <Select {...rest}>
      {Array.from(items).map(item => (
        <option key={item}>{item}</option>
      ))}
    </Select>
  );
}

export default Dropdown;
