import React, { Component, createRef, ReactNode } from 'react';

import ReactTooltip from 'react-tooltip';

import styled from 'styled-components';
import triangle from './tooltip-triangle.svg';

const StyledTooltip = styled.span``;

const Triangle = styled.img`
  position: relative;
  top: -0.25em;
  left: 50%;
  transform: translateX(-50%);
`;

Triangle.defaultProps = { src: triangle };

export class Tooltip extends Component<{
  tooltip: ReactNode;
  children: ReactNode;
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
    console.log(children);
    // const { height, open, boxHeight } = this.state;

    return (
      <div>
        <StyledTooltip data-tip={tooltip}>{children}</StyledTooltip>
        <ReactTooltip effect="solid" place="top" />
      </div>
    );
  }
}

export default Tooltip;
