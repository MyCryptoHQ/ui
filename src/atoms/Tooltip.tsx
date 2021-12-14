import type { FunctionComponent, ReactNode } from 'react';
import type { Config } from 'react-popper-tooltip';
import { usePopperTooltip } from 'react-popper-tooltip';

import type { IconType } from '.';
import { Body, Box, Flex, Icon } from '.';

export interface TooltipProps {
  tooltip?: ReactNode;
  icon?: IconType;
  fill?: string;
}

export const Tooltip: FunctionComponent<TooltipProps & Config> = ({
  tooltip,
  icon = 'question',
  fill = 'black',
  placement = 'top',
  children,
  ...config
}) => {
  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible
  } = usePopperTooltip({ placement, ...config });

  return (
    <>
      <Box ref={setTriggerRef} sx={{ display: 'inline-block' }}>
        {children ?? <Icon type={icon} fill={fill} verticalAlign="middle" />}
      </Box>

      {visible && (
        <Flex
          ref={setTooltipRef}
          flexDirection="column"
          px="2"
          py="1"
          backgroundColor="tooltip.background"
          sx={{
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.18)',
            borderRadius: 'small',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'tooltip.border',
            zIndex: '9999',
            '&[data-popper-interactive="false"]': {
              pointerEvents: 'none'
            },
            '&[data-popper-placement*="bottom"] > .arrow': {
              top: '0',
              left: '0',
              marginTop: '-0.4rem',
              '::before': {
                borderColor: 'transparent',
                borderBottomColor: 'tooltip.border',
                borderWidth: '0 0.5rem 0.4rem 0.5rem',
                position: 'absolute',
                top: '-1px'
              },
              '::after': {
                borderColor: 'transparent',
                borderBottomColor: 'tooltip.background',
                borderWidth: '0 0.5rem 0.4rem 0.5rem'
              }
            },
            '&[data-popper-placement*="top"] > .arrow': {
              bottom: '0',
              left: '0',
              marginBottom: '-1rem',
              width: '1rem',
              '::before': {
                borderColor: 'transparent',
                borderTopColor: 'tooltip.border',
                borderWidth: '0.4rem 0.5rem 0 0.5rem',
                position: 'absolute',
                top: '1px'
              },
              '::after': {
                borderColor: 'transparent',
                borderTopColor: 'tooltip.background',
                borderWidth: '0.4rem 0.5rem 0 0.5rem'
              }
            },
            '&[data-popper-placement*="left"] > .arrow': {
              right: '0',
              marginRight: '-0.7rem',
              width: '1rem',
              height: '1rem',
              '::before': {
                borderColor: 'transparent',
                borderLeftColor: 'tooltip.border',
                borderWidth: '0.5rem 0 0.5rem 0.4em'
              },
              '::after': {
                borderColor: 'transparent',
                borderLeftColor: 'tooltip.background',
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
                borderColor: 'transparent',
                borderRightColor: 'tooltip.border',
                borderWidth: '0.5rem 0.4rem 0.5rem 0'
              },
              '::after': {
                borderColor: 'transparent',
                borderRightColor: 'tooltip.background',
                borderWidth: '0.5rem 0.4rem 0.5rem 0',
                left: '6px',
                top: '0'
              }
            }
          }}
          {...getTooltipProps()}>
          {typeof tooltip === 'string' ? <Body>{tooltip}</Body> : tooltip}
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
