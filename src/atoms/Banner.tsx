import type { PropsWithChildren } from 'react';
import { useState } from 'react';

import { Body, Box, Flex, Image } from '.';
import error from '../assets/icons/alert-red.svg';
import caret from '../assets/icons/caret.svg';
import success from '../assets/icons/circle-checkmark.svg';
import warning from '../assets/icons/circle-warning.svg';
import info from '../assets/icons/info.svg';
import action from '../assets/icons/queue-waiting.svg';
import { Badge } from './Badge';

export type BannerType = 'success' | 'info' | 'action' | 'warning' | 'error' | 'clear';

export interface BannerProps {
  type: BannerType;
  label: string;
  badge?: string;
  extended?: boolean;
}

const icons: { [key in BannerType]: string } = {
  success,
  info,
  action,
  warning,
  error,
  clear: action
};

export const Banner = ({
  type,
  label,
  badge,
  extended,
  children
}: PropsWithChildren<BannerProps>) => {
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
          <Image src={icons[type]} alt="type" width="20px" minWidth="20px" height="20px" mr="2" />
          <Body
            color="inherit"
            fontSize="12px"
            fontWeight="bold"
            sx={{ textTransform: 'uppercase', wordBreak: 'break-word' }}>
            {label}
          </Body>
        </Flex>
        <Flex variant="horizontal-start" minWidth="10px">
          {badge && <Badge type={type}>{badge}</Badge>}
          {children && (
            <Image
              src={caret}
              alt="Caret"
              ml="2"
              width="10px"
              minWidth="10px"
              sx={{ userSelect: 'none', transform: isExtended && 'rotate(180deg)' }}
            />
          )}
        </Flex>
      </Flex>
      {children && isExtended && (
        <Body fontSize="14px" p="2" pt="0">
          {children}
        </Body>
      )}
    </Box>
  );
};
