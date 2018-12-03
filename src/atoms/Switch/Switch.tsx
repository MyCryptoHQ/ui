import React, { Component } from 'react';

import styled from '_styled-components';
import { Input } from 'atoms';
import Typography from 'Typography';
/* stylelint-disable max-nesting-depth */
/* stylelint-disable unit-whitelist */
/* stylelint-disable no-descending-specificity */
const LabelText = styled(Typography)`
  color: #163150;
  margin-top: 0.75em;
  cursor: pointer;
`;
export const Checkbox = styled(Input)`
  :checked + span {
    background-color: #b2d7e0;
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
const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #b2d7e0;
  transition: 0.4s;
  border-radius: 17px;
  ::before {
    position: absolute;
    content: '';
    height: 22px;
    width: 22px;
    left: -4px;
    bottom: -3px;
    background-color: ${props => props.theme.primary};
    transition: 0.4s;
    border-radius: 17px;
  }
`;
interface Props {
  labelLeft?: string;
  labelRight?: string;
  checked?: boolean;
  handleChange?(): void;
}
export class Switch extends Component<Props, {}> {
  public render() {
    const { handleChange, labelLeft, labelRight, checked } = this.props;
    return (
      <SwitchContainer>
        <LabelText>
          <label htmlFor="toggle">{labelLeft}</label>
        </LabelText>
        <SliderBackground htmlFor="toggle">
          <Checkbox
            id="toggle"
            type="checkbox"
            onChange={handleChange}
            checked={checked}
          />
          <Slider />
        </SliderBackground>
        <LabelText>
          <label htmlFor="toggle">{labelRight}</label>
        </LabelText>
      </SwitchContainer>
    );
  }
}
export default Switch;
