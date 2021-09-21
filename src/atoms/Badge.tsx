import type { FunctionComponent, PropsWithChildren } from 'react';
import { useTheme } from 'styled-components';

import { Body, Box } from '.';
import type { BannerType } from './Banner';

interface BadgeProps {
  type: BannerType;
}

export const Badge: FunctionComponent<BadgeProps> = ({
  type,
  children
}: PropsWithChildren<Pick<BadgeProps, 'type'>>) => {
  const theme = useTheme();

  return (
    <Box backgroundColor={theme.variants.banner[type].color} sx={{ borderRadius: 'banner' }}>
      <Body
        fontSize="12px"
        fontWeight="bold"
        color="white"
        sx={{ textTransform: 'uppercase' }}
        px="6px">
        {children}
      </Body>
    </Box>
  );
};
