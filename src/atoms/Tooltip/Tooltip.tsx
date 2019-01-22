import { padding } from 'polished';
import React, { Component, createRef, ReactNode } from 'react';

import { borderRadius, scale } from 'src/Theme';
import styled from 'styled-components';
import triangle from './tooltip-triangle.svg';

const Relative = styled.div`
  position: relative;
`;

const Absolute = styled.div<{ height: number; boxHeight: number }>`
  position: absolute;
  display: block;
  bottom: ${props => props.height * 4 + 8}px;
  height: ${props => props.boxHeight}px;
`;

const Box = styled.div`
  border: 0.0625em solid #bac9d4;
  background: ${props => props.theme.controlBackground};
  border-radius: ${borderRadius};
  box-shadow: 0 0.1875em 0.375em 0 #00000012,
    0 0.4375em 0.625em 0.4375em #32325d1a;
  ${padding(scale(-1))};
`;

const Triangle = styled.img`
  position: relative;
  top: -0.25em;
  left: 50%;
  transform: translateX(-50%);
`;

Triangle.defaultProps = { src: triangle };

export class Tooltip extends Component<{
  tooltip: ReactNode;
  children(props: Record<'onMouseOver' | 'onMouseOut', () => void>): ReactNode;
}> {
  public ref = createRef<HTMLDivElement>();
  public boxRef = createRef<HTMLDivElement>();
  public containerRef = createRef<HTMLDivElement>();
  public state = {
    height: undefined,
    open: true,
    boxHeight: undefined,
    containerHeight: undefined,
  };

  public componentDidMount() {
    this.setState({ open: false });
    // istanbul ignore else
    if (this.ref.current && this.boxRef.current && this.containerRef.current) {
      const { height } = this.ref.current.getBoundingClientRect();
      const { height: boxHeight } = this.boxRef.current.getBoundingClientRect();
      const {
        height: containerHeight,
      } = this.boxRef.current.getBoundingClientRect();
      this.setState({ height, boxHeight, containerHeight });
    }
  }

  public handleMouseOver = () => {
    this.setState({ open: true });
  };

  public handleMouseExit = () => {
    this.setState({ open: false });
  };

  public render() {
    const { children, tooltip } = this.props;
    const { height, open, boxHeight } = this.state;

    return (
      <div ref={this.containerRef}>
        <Relative>
          <div ref={this.ref}>
            {children({
              onMouseOver: this.handleMouseOver,
              onMouseOut: this.handleMouseExit,
            })}
          </div>

          {open && (
            // Height needs to be reduced because the triangle SVG is too tall
            <Absolute height={(height || 0) - 17} boxHeight={boxHeight || 0}>
              <div ref={this.boxRef}>
                <Box>{tooltip}</Box>
              </div>

              <Triangle />
            </Absolute>
          )}
        </Relative>
      </div>
    );
  }
}

export default Tooltip;
