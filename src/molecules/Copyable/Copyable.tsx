import React, { Component } from 'react';
import styled from 'styled-components';

import { Button, Icon, Tooltip } from 'atoms';
import Typography from 'Typography';

const ColoredIcon = styled(Icon)`
  color: #b5bfc7;
`;

export class Copyable extends Component<{
  text: string;
  truncate(text: string): string;
}> {
  public handleClick = () => {
    const { text } = this.props;
    navigator.clipboard.writeText(text);
  };

  public render() {
    const { text, truncate } = this.props;

    return (
      <Tooltip tooltip={<Typography as="div">{text}</Typography>}>
        {props => (
          <Button
            onClick={this.handleClick}
            aria-label={`Copy ${text}`}
            basic={true}
            {...props}
          >
            {truncate(text)} <ColoredIcon icon="copy" />
          </Button>
        )}
      </Tooltip>
    );
  }
}

export default Copyable;
