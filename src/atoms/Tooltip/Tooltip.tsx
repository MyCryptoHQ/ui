import React, { ReactNode } from 'react';
import TooltipTrigger from 'react-popper-tooltip';
import { TooltipArg } from 'react-popper-tooltip/dist/types';

import styled from '../../styled-components';

interface TooltipWrapperProps {
  maxWidth?: string;
}

const TooltipWrapper = styled.div<TooltipWrapperProps>`
  max-width: ${props => props.maxWidth || '500px'};
  word-break: break-word;
`;

// styles are based on react-popper-tooltip/blob/master/src/styles.css
/* stylelint-disable max-nesting-depth */
const TooltipContainer = styled.div`
  background: ${props => `${props.theme.controlBackground}`};
  border-radius: 3px;
  border: 1px solid silver;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
  display: flex;
  flex-direction: column;
  margin: 0.4rem;
  padding: 0.4rem;
  transition: opacity 0.3s; /* stylelint-disable-line unit-whitelist */
  z-index: 2147483647;
`;

const TooltipArrow = styled.div`
  height: 1rem;
  position: absolute;
  width: 1rem;
  &::before {
    border-style: solid;
    content: '';
    display: block;
    height: 0;
    margin: auto;
    width: 0;
  }
  &::after {
    border-style: solid;
    content: '';
    display: block;
    height: 0;
    margin: auto;
    position: absolute;
    width: 0;
  }
  &[data-placement*='bottom'] {
    height: 1rem;
    left: 0;
    margin-top: -0.4rem;
    top: 0;
    width: 1rem;
    &::before {
      border-color: transparent transparent silver transparent;
      border-width: 0 0.5rem 0.4rem 0.5rem;
      position: absolute;
      top: -1px;
    }
    ::after {
      border-color: transparent transparent white transparent;
      border-width: 0 0.5rem 0.4rem 0.5rem;
    }
  }
  &[data-placement*='top'] {
    bottom: 0;
    height: 1rem;
    left: 0;
    margin-bottom: -1rem;
    width: 1rem;
    &::before {
      border-color: silver transparent transparent transparent;
      border-width: 0.4rem 0.5rem 0 0.5rem;
      position: absolute;
      top: 1px;
    }
    &::after {
      border-color: white transparent transparent transparent;
      border-width: 0.4rem 0.5rem 0 0.5rem;
    }
  }
  &[data-placement*='right'] {
    height: 1rem;
    left: 0;
    margin-left: -0.7rem;
    width: 1rem;
    &::before {
      border-color: transparent silver transparent transparent;
      border-width: 0.5rem 0.4rem 0.5rem 0;
    }
    &::after {
      border-color: transparent white transparent transparent;
      border-width: 0.5rem 0.4rem 0.5rem 0;
      left: 6px;
      top: 0;
    }
  }
  &[data-placement*='left'] {
    height: 1rem;
    margin-right: -0.7rem;
    right: 0;
    width: 1rem;
    &::before {
      border-color: transparent transparent transparent silver;
      border-width: 0.5rem 0 0.5rem 0.4em;
    }
    &::after {
      border-color: transparent transparent transparent white;
      border-width: 0.5rem 0 0.5rem 0.4em;
      left: 3px;
      top: 0;
    }
  }
`;

const TooltipElement = (tooltip: ReactNode, maxWidth?: string) => ({
  arrowRef,
  tooltipRef,
  getArrowProps,
  getTooltipProps,
  placement,
}: TooltipArg) => (
  <TooltipContainer
    {...getTooltipProps({
      ref: tooltipRef,
    })}
  >
    <TooltipArrow
      {...getArrowProps({
        ref: arrowRef,
        'data-placement': placement,
      })}
    />
    <TooltipWrapper maxWidth={maxWidth}>{tooltip}</TooltipWrapper>
  </TooltipContainer>
);

interface TooltipProps {
  tooltip: ReactNode;
  children: ReactNode;
  maxWidth?: string;
  placement?: TooltipArg['placement'];
}

const Tooltip = ({
  children,
  tooltip,
  maxWidth,
  placement,
  ...props
}: TooltipProps) => (
  <TooltipTrigger
    placement={placement || 'top'}
    delayHide={200}
    {...props}
    tooltip={TooltipElement(tooltip, maxWidth)}
  >
    {({ getTriggerProps, triggerRef }) => (
      <span
        {...getTriggerProps({
          ref: triggerRef,
        })}
      >
        {children}
      </span>
    )}
  </TooltipTrigger>
);

export default Tooltip;
