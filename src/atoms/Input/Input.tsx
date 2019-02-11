import React, {
  Component,
  createRef,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from 'react';
import { StyledComponentClass } from 'styled-components';

import Icon, { icons } from 'src/atoms/Icon';
import styled from 'src/styled-components';
import Theme, { borderRadius, scale, transitionDuration } from 'src/Theme';
import { ExtractProps } from 'src/types';
import Typography from 'src/Typography';

const InputContainer = styled.div`
  background: ${props => props.theme.controlBackground};
  border: 0.125em solid ${props => props.theme.controlBorder};
  border-radius: ${borderRadius};
  transition: border ${transitionDuration}, box-shadow ${transitionDuration};
  padding-top: ${scale(-1)};
  padding-bottom: ${scale(-1)};
  display: flex;
  align-items: center;
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
  ${props =>
    props.iconSide === 'right'
      ? 'padding-left: ' + scale(0) + ';'
      : 'padding-right:' + scale(0) + ';'};

  ::placeholder: {
    color: ${props => props.theme.text};
    opacity: 1;
  }
` as StyledComponentClass<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  Theme
>;

const StyledIcon = styled(Icon)<{ iconSide?: string }>`
  padding-left: ${scale(0)};
  padding-right: ${scale(0)};
  color: #1eb8e7;
  margin: auto;
`;

StyledInput.defaultProps = { as: 'input' };

export class Input extends Component<
  ExtractProps<typeof StyledInput> & {
    value?: string;
    icon?: keyof typeof icons;
    iconSide?: string;
    validator?(value: string): string | undefined;
  }
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
