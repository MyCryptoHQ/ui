import React, { Component } from 'react';
import styled from 'styled-components';

import { Icon, Tooltip } from 'atoms';
import { scale } from 'Theme';
import Typography from 'Typography';

const BasicButton = styled(Typography)`
  background: inherit;
  border: none;
  cursor: pointer;
  font-size: ${scale(0)};
  padding: 0;
`;

BasicButton.defaultProps = { as: 'button' };

const ColoredIcon = styled(Icon)`
  color: #b5bfc7;
`;

export class Copyable extends Component<{ text: string }> {
  public handleClick = () => {
    const { text } = this.props;
    navigator.clipboard.writeText(text);
  };

  public render() {
    const { text } = this.props;

    return (
      <Tooltip tooltip={<Typography as="div">{text}</Typography>}>
        {props => (
          <BasicButton
            onClick={this.handleClick}
            aria-label={`Copy ${text}`}
            {...props}
          >
            {text} <ColoredIcon icon="clone" />
          </BasicButton>
        )}
      </Tooltip>
    );
  }
}

export default Copyable;
