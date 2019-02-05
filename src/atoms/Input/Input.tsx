import { padding } from 'polished';
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
  position: relative;
`;

const StyledInput = styled(Typography)<{ iconSide?: string }>`
  background: ${props => props.theme.controlBackground};
  border: 0.125em solid ${props => props.theme.controlBorder};
  border-radius: ${borderRadius};
  font-size: ${scale(0)};
  font-weight: bold;
  ${padding(scale(-1), scale(0))};
  ${props =>
    props.iconSide === 'right'
      ? 'padding-right: 2.8125em;'
      : 'padding-left: 2.8125em;'};
  transition: border ${transitionDuration}, box-shadow ${transitionDuration};

  :focus {
    outline: none;
    box-shadow: ${props => props.theme.outline};
  }
` as StyledComponentClass<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  Theme
>;

const StyledIcon = styled(Icon)<{ iconSide?: string }>`
  position: absolute;
  top: 0.8em;
  ${props => (props.iconSide === 'right' ? 'right: 0.75em' : 'left: 0.75em;')};
  color: #1eb8e7;
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
    console.log(StyledIcon);
    if (icon) {
      return (
        <InputContainer>
          <StyledInput
            //@ts-ignore
            ref={this.ref}
            iconSide={iconSide}
            {...this.props}
          />
          <StyledIcon icon={icon} iconSide={iconSide} />
        </InputContainer>
      );
    }
    return (
      <StyledInput
        //@ts-ignore
        ref={this.ref}
        {...this.props}
      />
    );
  }
}

export default Input;
