import type { FunctionComponent } from 'react';
import { useTheme } from 'styled-components';

import { Body, Box } from '.';

export type BadgeType = 'success' | 'info' | 'action' | 'warning' | 'error' | 'clear';

export interface BadgeProps {
  type: BadgeType;
}

export const Badge: FunctionComponent<BadgeProps> = ({ type, children }) => {
  const theme = useTheme();

  return (
    <Box backgroundColor={theme.variants.banner[type].color} sx={{ borderRadius: 'banner' }}>
      <Body
        fontSize="1"
        fontWeight="bold"
        color="white"
        sx={{ textTransform: 'uppercase' }}
        px="6px">
        {children}
      </Body>
    </Box>
  );
};