import React, { Component } from 'react';
import { Button, Icon } from 'src/atoms';
import { scale } from 'src/Theme';
import { ExtractProps } from 'src/types';
import Typography from 'src/Typography';
import styled from 'styled-components';

const ColoredIcon = styled(Icon)`
  color: #b5bfc7;
`;

const ActiveButton = styled(Icon)`
  color: green;
`;

const DisabledButton = styled(Button)`
  cursor: text;
`;

interface CopyableProps {
  text: string;
  props?: ExtractProps<typeof Button>;
  truncate: boolean;
  copyable: true;
}

interface NonCopyableProps {
  text: string;
  copyable: false;
  truncate: boolean;
}

export type CopyableTextProps = CopyableProps | NonCopyableProps;

interface CopyableTextState {
  copied: boolean;
}

export class Copyable extends Component<CopyableTextProps, CopyableTextState> {
  public static defaultProps: CopyableTextProps = {
    truncate: false,
    text: '',
    copyable: false,
  };

  public state = { copied: false };

  public handleClick = () => {
    const { text } = this.props;
    navigator.clipboard.writeText(text);
    this.setState({ copied: true });
    setTimeout(() => this.setState({ copied: false }), 1000);
  };

  public truncateText(str: string) {
    const beginningString = str.substring(0, 6);
    const stringSpacer = '…';
    const endingString = str.substring(str.length - 4);

    const truncatedString = `${beginningString}${stringSpacer}${endingString}`;

    return truncatedString;
  }

  public copyableText = () => {
    const { copied } = this.state;
    const { text, truncate } = this.props;

    return (
      <Button
        onClick={this.handleClick}
        basic={true}
        aria-label={`Copy ${text}`}
      >
        {truncate ? this.truncateText(text) : text}
        {copied ? <ActiveButton icon="warning" /> : <ColoredIcon icon="copy" />}
      </Button>
    );
  };

  public nonCopyable = () => {
    const { text, truncate } = this.props;

    return (
      <DisabledButton disabled={true} basic={true}>
        {truncate ? this.truncateText(text) : text}
      </DisabledButton>
    );
  };

  public render() {
    const { copyable } = this.props;

    return copyable ? this.copyableText() : this.nonCopyable();
  }
}
export default Copyable;
