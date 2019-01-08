import { padding } from 'polished';
import React, { Component, createRef, ReactNode } from 'react';

import styled from 'src/styled-components';
import { borderRadius, scale } from 'src/Theme';
import triangle from './tooltip-triangle.svg';

const Relative = styled.div`
  position: relative;
  display: inline-block;
  border: 0.2em solid black;
`;

const Absolute = styled.div<{ height: number; boxHeight: number }>`
  border: 0.2em solid green;
  position: absolute;
  display: block;
  bottom: ${props => props.height * 4}px;
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
    open: false,
    boxHeight: undefined,
    containerHeight: undefined,
  };

  public componentDidMount() {
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
    console.log('mouse entering');
  };

  public handleMouseExit = () => {
    this.setState({ open: false });
    console.log('mouse exiting');
  };

  public render() {
    const { children, tooltip } = this.props;
    const { height, open, boxHeight, containerHeight } = this.state;
    console.log('height', height);
    console.log('boxheight', boxHeight);
    console.log('container height', containerHeight);

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
