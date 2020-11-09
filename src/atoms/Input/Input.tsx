import { padding } from 'polished';
import React, {
  Component,
  createRef,
  DetailedHTMLProps,
  ElementType,
  InputHTMLAttributes,
} from 'react';

import styled from '../../styled-components';
import { borderRadius, scale, transitionDuration } from '../../Theme';
import Typography from '../../Typography';
import Icon, { icons } from '../Icon';

const InputContainer = styled.div<{ invert?: boolean }>`
  background: ${props => props.theme.controlBackground};
  border: 0.125em solid ${props => props.theme.controlBorder};
  border-radius: ${borderRadius};
  transition: border ${transitionDuration}, box-shadow ${transitionDuration};
  ${padding(scale(-1), scale(0))};
  flex-direction: ${props => (props.invert ? 'row-reverse' : 'row')};
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
  outline: none;

  ::placeholder {
    color: ${props => props.theme.text};
    opacity: 0.55;
  }
`;

const StyledIcon = styled(Icon).attrs({ as: 'input' })<{ iconSide?: string }>`
  color: #1eb8e7;
  margin: auto;
  ${props =>
    props.iconSide === 'right' ? 'padding-left: 1ch;' : 'padding-right: 1ch;'};
  height: 100%;
  display: block;
  svg {
    display: inline-block;
    vertical-align: middle;
  }
`;

export interface IconProps {
  icon?: (keyof typeof icons) | React.ReactType<IconProps>;
  iconSide?: string;
}

export interface InputProps extends IconProps {
  value?: string;
  validator?(value: string): string | undefined;
}

export class Input extends Component<
  InputProps &
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
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
    const IconComponent = (typeof icon === 'string'
      ? ({ icon: iconValue, iconSide: iconSideValue }: IconProps) => (
          <StyledIcon
            icon={iconValue as keyof typeof icons}
            iconSide={iconSideValue}
          />
        )
      : icon) as ElementType<IconProps>;

    return (
      <InputContainer invert={iconSide === 'right'}>
        {icon && <IconComponent icon={icon} iconSide={iconSide} />}
        <StyledInput
          //@ts-ignore
          ref={this.ref}
          {...this.props}
        />
      </InputContainer>
    );
  }
}

export default Input;
