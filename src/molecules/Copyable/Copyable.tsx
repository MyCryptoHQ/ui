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

export class Copyable extends Component<{ children: string }> {
  public handleClick = () => {
    const { children } = this.props;
    navigator.clipboard.writeText(children);
  };

  public render() {
    const { children } = this.props;

    return (
      <Tooltip tooltip={<Typography as="div">{children}</Typography>}>
        {props => (
          <BasicButton
            onClick={this.handleClick}
            aria-label={`Copy ${children}`}
            {...props}
          >
            {children} <Icon icon="clone" />
          </BasicButton>
        )}
      </Tooltip>
    );
  }
}

export default Copyable;
