import React, { cloneElement, Component } from 'react';
import styled from 'styled-components';

import { Button, Icon, Tooltip } from 'atoms';
import Typography from 'Typography';

const ColoredIcon = styled(Icon)`
  color: #b5bfc7;
`;

export class Copyable extends Component<{
  text: string;
  truncate?(text: string): string;
}> {
  public handleClick = () => {
    const { text } = this.props;
    navigator.clipboard.writeText(text);
  };

  public render() {
    const { text, truncate } = this.props;

    const children = (
      <Button
        onClick={this.handleClick}
        aria-label={`Copy ${text}`}
        basic={true}
      >
        {truncate ? truncate(text) : text} <ColoredIcon icon="clone" />
      </Button>
    );

    return truncate ? (
      <Tooltip tooltip={<Typography as="div">{text}</Typography>}>
        {props => cloneElement(children, props)}
      </Tooltip>
    ) : (
      <div>{children}</div>
    );
  }
}

export default Copyable;
