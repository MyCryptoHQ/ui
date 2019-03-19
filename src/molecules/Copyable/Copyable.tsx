import React, { Component } from 'react';
import styled from 'styled-components';

import { Button, Icon } from 'src/atoms';
import { ExtractProps } from 'src/types';

const ColoredIcon = styled(Icon)`
  color: #b5bfc7;
`;

const ActiveButton = styled(Icon)`
  color: green;
`;

interface CopyableProps {
  text: string;
  props?: ExtractProps<typeof Button>;
  truncate: boolean;
  copyable?: boolean;
}
interface CopyableState {
  copied: boolean;
}

export class Copyable extends Component<CopyableProps, CopyableState> {
  public static defaultProps: CopyableProps = { truncate: false, text: '' };

  public state = { copied: false };

  public handleClick = () => {
    const { text } = this.props;
    navigator.clipboard.writeText(text);
    this.setState({ copied: true });
    setTimeout(() => this.setState({ copied: false }), 1000);
  };

  public truncate(str: string) {
    const beginningString = str.substring(0, 6);
    const stringSpacer = '…';
    const endingString = str.substring(str.length - 4);

    const truncatedString = `${beginningString + stringSpacer + endingString}`;

    return truncatedString;
  }

  public render() {
    const { text, copyable } = this.props;
    const { copied } = this.state;

    const buttonProps = {
      onClick: this.handleClick,
      'aria-label': `Copy ${text}`,
      basic: true,
    };
    const buttonText = this.props.truncate ? this.truncate(text) : text;

    const button = copyable ? (
      copied ? (
        <ActiveButton icon="warning" {...buttonProps} />
      ) : (
        <ColoredIcon icon="copy" {...buttonProps} />
      )
    ) : (
      <Button disabled={true} {...buttonProps} />
    );

    return (
      <Button {...buttonProps}>
        {button}
        {buttonText}
      </Button>
    );
  }
}
export default Copyable;
