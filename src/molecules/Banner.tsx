import type { FunctionComponent, ReactElement } from 'react';
import { useState } from 'react';

import type { IconType } from '..';
import { Body, Box, Flex, Icon } from '..';
import type { BadgeType } from '../atoms';
import { Badge } from '../atoms';

export interface BannerProps {
  type: BadgeType;
  label: string | ReactElement;
  badge?: string | ReactElement;
  extended?: boolean;
}

const icons: { [key in BadgeType]: IconType } = {
  success: 'checkmark',
  info: 'info',
  action: 'waiting',
  warning: 'warning',
  error: 'alert',
  clear: 'waiting'
};

export const Banner: FunctionComponent<BannerProps> = ({
  type,
  label,
  badge,
  extended,
  children
}) => {
  const [isExtended, setExtended] = useState(extended);

  const handleToggle = () => setExtended((value) => !value);

  return (
    <Box mb="2" variant={`banner.${type}`} sx={{ borderRadius: 'banner' }}>
      <Flex
        variant="horizontal-start"
        p="2"
        px={type === 'clear' && '0'}
        justifyContent="space-between"
        onClick={children && handleToggle}
        sx={{ cursor: children && 'pointer' }}
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
          {children && (
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
      {children && isExtended && (
        <Body fontSize="0.875rem" p="2" pt="0">
          {children}
        </Body>
      )}
    </Box>
  );
};
