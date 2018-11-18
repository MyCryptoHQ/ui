import { padding } from 'polished';
import React, { Component, ReactNode } from 'react';

import styled from '_styled-components';
import { borderRadius, scale } from 'Theme';

const InnerTooltip = styled.div`
  border: 0.0625em solid #bac9d4;
  background: ${props => props.theme.controlBackground};
  border-radius: ${borderRadius};
  box-shadow: 0 0.1875em 0.375em 0 #00000012,
    0 0.4375em 0.625em 0.4375em #32325d1a;
  ${padding(scale(-1))};
  position: absolute;
`;

export class Tooltip extends Component<{
  tooltip: ReactNode;
  children(props: Record<'onMouseOver' | 'onMouseOut', () => void>): ReactNode;
}> {
  public state = { open: false };

  public render() {
    const { children, tooltip } = this.props;
    const { open } = this.state;

    return (
      <>
        {children({
          onMouseOver: () => this.setState({ open: true }),
          onMouseOut: () => this.setState({ open: false }),
        })}

        {open && <InnerTooltip>{tooltip}</InnerTooltip>}
      </>
    );
  }
}

export default Tooltip;
