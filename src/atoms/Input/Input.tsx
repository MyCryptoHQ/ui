import { padding } from 'polished';
import React, {
  Component,
  createRef,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from 'react';
import {
  StyledComponentClass,
  ThemedOuterStyledProps,
} from 'styled-components';

import Icon, { icons } from 'src/atoms/Icon';
import styled from 'src/styled-components';
import Theme, { borderRadius, scale, transitionDuration } from 'src/Theme';
import Typography from 'src/Typography';

const InputContainer = styled.div`
  background: ${props => props.theme.controlBackground};
  border: 0.125em solid ${props => props.theme.controlBorder};
  border-radius: ${borderRadius};
  transition: border ${transitionDuration}, box-shadow ${transitionDuration};
  ${padding(scale(-1), scale(0))};
  display: flex;
  :focus-within {
    outline: none;
    box-shadow: ${props => props.theme.outline};
  }
`;

const StyledInput = styled(Typography)`
  flex: 1;
  background: none;
  border: none;
  font-size: ${scale(0)};
  font-weight: bold;
  outline: none;

  ::placeholder: {
    color: ${props => props.theme.text};
    opacity: 1;
  }
` as StyledComponentClass<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  Theme
>;

const StyledIcon = styled(Icon)<{ iconSide?: string }>`
  color: #1eb8e7;
  margin: auto;
  ${props =>
    props.iconSide === 'right'
      ? 'padding-left: 12px;'
      : 'padding-right: 12px;'};
  height: 100%;
  display: block;
  /* stylelint-disable max-nesting-depth */
  span {
    svg {
      height: 100;
    }
  }
`;

StyledInput.defaultProps = { as: 'input' };

export interface InputProps {
  value?: string;
  icon?: keyof typeof icons;
  iconSide?: string;
  validator?(value: string): string | undefined;
}

export class Input extends Component<
  InputProps &
    ThemedOuterStyledProps<
      DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
      >,
      Theme
    >
> {
  public static defaultProps = { iconSide: 'left' };

  public ref = createRef<HTMLInputElement>();

  public componentDidUpdate() {
    const { validator, value } = this.props;

    if (validator && value && this.ref.current) {
      this.ref.current.setCustomValidity(validator(value) || '');
      this.ref.current.reportValidity();
    }
  }

  public render() {
    const { icon, iconSide } = this.props;
    const formattedIconSide = iconSide && iconSide.toLowerCase();
    const iconElement = icon && (
      <StyledIcon icon={icon} iconSide={formattedIconSide} />
    );

    return (
      <InputContainer>
        {formattedIconSide === 'left' && iconElement}
        <StyledInput
          //@ts-ignore
          ref={this.ref}
          {...this.props}
        />
        {formattedIconSide === 'right' && iconElement}
      </InputContainer>
    );
  }
}

export default Input;
