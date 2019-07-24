import { padding } from 'polished';
import React, { Component, createRef, ReactNode } from 'react';

import styled from '../../styled-components';
import { borderRadius, scale } from '../../Theme';
import triangle from './tooltip-triangle.svg';

const Relative = styled.div`
  position: relative;
`;

const Absolute = styled.div<{ height: number }>`
  position: absolute;
  bottom: ${props => props.height}px;
  display: flex;
  flex-direction: column;
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
  /* stylelint-disable unit-whitelist */
  margin-top: -4px;
  width: 29px;
  height: 15px;
  /* stylelint-enable */
`;

Triangle.defaultProps = { src: triangle };

export class Tooltip extends Component<
  {
    tooltip: ReactNode;
    children: ReactNode;
  },
  {
    height?: number;
    open: boolean;
  }
> {
  public ref = createRef<HTMLDivElement>();
  public state = { height: 0, open: false };

  public componentDidMount() {
    // istanbul ignore else
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
        <div
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          ref={this.ref}
        >
          {children}
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

  private onMouseEnter = () => this.setState({ open: true });

  private onMouseLeave = () => this.setState({ open: false });
}

export default Tooltip;
