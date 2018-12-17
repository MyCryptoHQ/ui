import { lighten } from 'polished';
import React, { Component } from 'react';

import styled from '_styled-components';
import Typography from 'Typography';
import Input from '../Input';
/* stylelint-disable max-nesting-depth */
/* stylelint-disable unit-whitelist */
/* stylelint-disable no-descending-specificity */
const LabelText = styled(Typography)`
  color: #163150;
  margin-top: 0.75em;
  cursor: pointer;
`;
export const Checkbox = styled(Input)<{
  greyable?: boolean;
}>`
  :checked + span {
    background-color: ${props =>
      props.greyable && !props.checked ? lighten(0.3, 'grey') : '#b2d7e0'};
  }
  :checked + span::before {
    transform: translateX(30px);
  }
`;
const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
`;
const SliderBackground = styled.label`
  position: relative;
  display: inline-block;
  width: 44px;
  height: 16px;
  margin-left: 8px;
  margin-right: 8px;
  input {
    display: none;
  }
`;
const Slider = styled.span<{ greyable?: boolean; checked?: boolean }>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props =>
    props.greyable && !props.checked ? lighten(0.3, 'grey') : '#b2d7e0'};
  transition: 0.4s;
  border-radius: 17px;
  ::before {
    position: absolute;
    content: '';
    height: 22px;
    width: 22px;
    left: -4px;
    bottom: -3px;
    background-color: ${props =>
      props.greyable && !props.checked ? 'grey' : props.theme.primary};
    transition: 0.4s;
    border-radius: 17px;
  }
`;
interface Props {
  greyable?: boolean;
  labelLeft?: string;
  labelRight?: string;
  checked?: boolean;
  handleChange?(): void;
}
export class Switch extends Component<Props, {}> {
  public render() {
    const {
      greyable,
      handleChange,
      labelLeft,
      labelRight,
      checked,
    } = this.props;
    return (
      <SwitchContainer>
        <LabelText>
          <label htmlFor="toggle">{labelLeft}</label>
        </LabelText>
        <SliderBackground htmlFor="toggle">
          <Checkbox
            greyable={greyable}
            id="toggle"
            type="checkbox"
            onChange={handleChange}
            checked={checked}
          />
          <Slider checked={checked} greyable={greyable} />
        </SliderBackground>
        <LabelText>
          <label htmlFor="toggle">{labelRight}</label>
        </LabelText>
      </SwitchContainer>
    );
  }
}
export default Switch;
