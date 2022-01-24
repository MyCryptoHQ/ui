import type { FunctionComponent } from 'react';
import type { DefaultTheme } from 'styled-components';
import { useTheme } from 'styled-components';

import type { BoxProps } from '.';
import { Body, Box } from '.';

export type BadgeType = keyof DefaultTheme['variants']['banner'];

export interface BadgeProps {
  type: BadgeType;
}

export const Badge: FunctionComponent<BadgeProps & BoxProps> = ({ type, children, ...props }) => {
  const theme = useTheme();

  return (
    <Box
      backgroundColor={theme.variants.banner[type].color}
      sx={{ borderRadius: 'banner' }}
      {...props}>
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
