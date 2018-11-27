import { padding } from 'polished';
import React, { Component, createRef, ReactNode } from 'react';

import styled from '_styled-components';
import { borderRadius, scale } from 'Theme';
import triangle from './triangle';

const Relative = styled.div`
  position: relative;
`;

const Absolute = styled.div<{ height?: number }>`
  position: absolute;
  bottom: ${props => props.height}px;
`;

const Box = styled.div`
  border: 0.0625em solid #bac9d4;
  background: ${props => props.theme.controlBackground};
  border-radius: ${borderRadius};
  box-shadow: 0 0.1875em 0.375em 0 #00000012,
    0 0.4375em 0.625em 0.4375em #32325d1a;
  ${padding(scale(-1))};
`;

const Triangle = styled.div`
  position: relative;
  top: -0.25em;
  left: 50%; /* stylelint-disable-line unit-whitelist */
  transform: translateX(-50%); /* stylelint-disable-line unit-whitelist */
`;

Triangle.defaultProps = { children: triangle };

export class Tooltip extends Component<{
  tooltip: ReactNode;
  children(props: Record<'onMouseOver' | 'onMouseOut', () => void>): ReactNode;
}> {
  public ref = createRef<HTMLDivElement>();
  public state = { height: undefined, open: false };

  public componentDidMount() {
    if (this.ref.current) {
      const { height } = this.ref.current.getBoundingClientRect();
      this.setState({ height });
    }
  }

  public render() {
    const { children, tooltip } = this.props;
    const { height, open } = this.state;

    return (
      <Relative>
        <div ref={this.ref}>
          {children({
            onMouseOver: () => this.setState({ open: true }),
            onMouseOut: () => this.setState({ open: false }),
          })}
        </div>

        {open && (
          <Absolute height={height}>
            <Box>{tooltip}</Box>
            <Triangle />
          </Absolute>
        )}
      </Relative>
    );
  }
}

export default Tooltip;
