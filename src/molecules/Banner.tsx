import type { FunctionComponent, ReactElement } from 'react';
import { useState } from 'react';

import type { IconType } from '..';
import { Body, Box, Flex, Icon } from '..';
import type { BadgeType, BoxProps } from '../atoms';
import { Badge } from '../atoms';
import { getMarginProps, omitMarginProps } from '../utils';

export interface BannerProps {
  type: BadgeType;
  label: string | ReactElement;
  badge?: string | ReactElement;
  extended?: boolean;
  extendable?: boolean;
}

const icons: { [key in BadgeType]: IconType } = {
  success: 'checkmark',
  info: 'info',
  action: 'waiting',
  warning: 'warning',
  error: 'alert',
  clear: 'waiting'
};

export const Banner: FunctionComponent<BannerProps & BoxProps> = ({
  type,
  label,
  badge,
  extended,
  extendable = true,
  children,
  ...props
}) => {
  const [isExtended, setExtended] = useState(extended);

  const handleToggle = () => setExtended((value) => !value);

  return (
    <Box
      mb="2"
      sx={{ borderRadius: 'banner' }}
      {...getMarginProps(props)}
      variant={`banner.${type}`}>
      <Flex
        variant="horizontal-start"
        p={extendable ? '2' : '3'}
        pb={'2'}
        px={type === 'clear' && '0'}
        justifyContent="space-between"
        onClick={children && extendable ? handleToggle : undefined}
        sx={{ cursor: children && extendable && 'pointer' }}
        {...omitMarginProps(props)}
        data-testid="banner-toggle">
        <Flex variant="horizontal-start">
          <Icon type={icons[type]} width="20px" minWidth="20px" height="20px" mr="2" />
          <Body
            color="inherit"
            fontSize="1"
            fontWeight="bold"
            sx={{ textTransform: 'uppercase', wordBreak: 'break-word' }}>
            {label}
          </Body>
        </Flex>
        <Flex variant="horizontal-start" minWidth="10px">
          {badge && <Badge type={type}>{badge}</Badge>}
          {children && extendable && (
            <Icon
              type="caret"
              ml="2"
              width="10px"
              minWidth="10px"
              sx={{ userSelect: 'none', transform: isExtended ? 'rotate(180deg)' : '' }}
            />
          )}
        </Flex>
      </Flex>
      {children && (isExtended || !extendable) && (
        <Body fontSize="0.875rem" p={extendable ? '2' : '3'} pt="0">
          {children}
        </Body>
      )}
    </Box>
  );
};
