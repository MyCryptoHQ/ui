import React, { Component, ReactNode } from 'react';
import styled from 'styled-components';

import { Button, Icon, Tooltip } from 'atoms';
import { ExtractProps } from 'types';
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

    return truncate ? (
      <Tooltip tooltip={<Typography as="div">{text}</Typography>}>
        {props => this.renderButton(truncate(text), props)}
      </Tooltip>
    ) : (
      <div>{this.renderButton(text)}</div>
    );
  }

  public renderButton(
    children: ReactNode,
    props?: ExtractProps<typeof Button>,
  ) {
    const { text } = this.props;

    return (
      <Button
        onClick={this.handleClick}
        aria-label={`Copy ${text}`}
        basic={true}
        children={
          <>
            {children} <ColoredIcon icon="clone" />
          </>
        }
        {...props}
      />
    );
  }
}

export default Copyable;
