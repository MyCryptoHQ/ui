import React, {
  ButtonHTMLAttributes,
  ClassAttributes,
  Component,
  DetailedHTMLProps,
  ReactNode,
} from 'react';

import { Button, Icon, Tooltip } from '../../atoms';
import { ButtonProps, StyledButtonProps } from '../../atoms/Button/Button';
import Omit from '../../Omit';
import Typography from '../../Typography';

export class Copyable extends Component<
  {
    text: string;
    isCopyable?: boolean;
    disableTooltip?: boolean;
    truncate?(text: string): string;
  },
  {
    copied: boolean;
  }
> {
  public state = { copied: false };

  public handleClick = () => {
    const { text } = this.props;
    navigator.clipboard.writeText(text);
    this.setState({ copied: true });
    setTimeout(() => this.setState({ copied: false }), 1000);
  };

  public render() {
    const { text, truncate, disableTooltip } = this.props;
    const renderedText = truncate ? truncate(text) : text;

    return truncate && !disableTooltip ? (
      <Tooltip tooltip={<Typography as="div">{text}</Typography>}>
        {this.renderButton(renderedText, this.props)}
      </Tooltip>
    ) : (
      <div>{this.renderButton(renderedText)}</div>
    );
  }

  public renderButton(
    children: ReactNode,
    props?: ButtonProps &
      Omit<
        DetailedHTMLProps<
          ButtonHTMLAttributes<HTMLButtonElement>,
          HTMLButtonElement
        > &
          ClassAttributes<HTMLButtonElement> &
          ButtonHTMLAttributes<HTMLButtonElement> &
          StyledButtonProps,
        'ref'
      >,
  ) {
    const { text, isCopyable } = this.props;
    const { copied } = this.state;

    return (
      <Button
        onClick={this.handleClick}
        aria-label={`Copy ${text}`}
        basic={true}
        children={
          <>
            {children}{' '}
            {isCopyable &&
              (copied ? <Icon icon="checkmark-black" /> : <Icon icon="copy" />)}
          </>
        }
        {...props}
      />
    );
  }
}

export default Copyable;
