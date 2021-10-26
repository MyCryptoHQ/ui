import type { FunctionComponent, ReactNode } from 'react';
import type { PopperOptions } from 'react-popper-tooltip';
import { usePopperTooltip } from 'react-popper-tooltip';

import { Box, Flex } from '.';

export interface TooltipProps {
  tooltip: ReactNode;
  placement?: PopperOptions['placement'];
}

export const Tooltip: FunctionComponent<TooltipProps> = ({
  tooltip,
  placement = 'top',
  children
}) => {
  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible
  } = usePopperTooltip({ placement }, { placement });

  return (
    <>
      <Box ref={setTriggerRef} sx={{ display: 'inline-block' }}>
        {children}
      </Box>

      {visible && (
        <Flex
          ref={setTooltipRef}
          flexDirection="column"
          p="2"
          backgroundColor="white"
          sx={{
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.18)',
            borderRadius: 'small',
            border: '1px solid silver',
            zIndex: '9999',
            '&[data-popper-interactive="false"]': {
              pointerEvents: 'none'
            },
            '&[data-popper-placement*="bottom"] > .arrow': {
              top: '0',
              left: '0',
              marginTop: '-0.4rem',
              '::before': {
                borderColor: 'transparent transparent silver transparent',
                borderWidth: '0 0.5rem 0.4rem 0.5rem',
                position: 'absolute',
                top: '-1px'
              },
              '::after': {
                borderColor: 'transparent transparent white transparent',
                borderWidth: '0 0.5rem 0.4rem 0.5rem'
              }
            },
            '&[data-popper-placement*="top"] > .arrow': {
              bottom: '0',
              left: '0',
              marginBottom: '-1rem',
              width: '1rem',
              '::before': {
                borderColor: 'silver transparent transparent transparent',
                borderWidth: '0.4rem 0.5rem 0 0.5rem',
                position: 'absolute',
                top: '1px'
              },
              '::after': {
                borderColor: 'white transparent transparent transparent',
                borderWidth: '0.4rem 0.5rem 0 0.5rem'
              }
            },
            '&[data-popper-placement*="left"] > .arrow': {
              right: '0',
              marginRight: '-0.7rem',
              width: '1rem',
              height: '1rem',
              '::before': {
                borderColor: 'transparent transparent transparent silver',
                borderWidth: '0.5rem 0 0.5rem 0.4em'
              },
              '::after': {
                borderColor: 'transparent transparent transparent white',
                borderWidth: '0.5rem 0 0.5rem 0.4em',
                left: '3px',
                top: '0'
              }
            },
            '&[data-popper-placement*="right"] > .arrow': {
              left: '0',
              marginLeft: '-0.7rem',
              width: '1rem',
              height: '1rem',
              '::before': {
                borderColor: 'transparent silver transparent transparent',
                borderWidth: '0.5rem 0.4rem 0.5rem 0'
              },
              '::after': {
                borderColor: 'transparent white transparent transparent',
                borderWidth: '0.5rem 0.4rem 0.5rem 0',
                left: '6px',
                top: '0'
              }
            }
          }}
          {...getTooltipProps()}>
          {tooltip}
          <Box
            width="1rem"
            height="1rem"
            sx={{
              pointerEvents: 'none',
              '::before': {
                borderStyle: 'solid',
                content: "''",
                display: 'block',
                width: '0',
                height: '0',
                margin: 'auto'
              },
              '::after': {
                borderStyle: 'solid',
                content: "''",
                display: 'block',
                width: '0',
                height: '0',
                margin: 'auto',
                position: 'absolute'
              }
            }}
            {...getArrowProps({ className: 'arrow' })}
          />
        </Flex>
      )}
    </>
  );
};
