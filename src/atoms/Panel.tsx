import type { FunctionComponent } from 'react';
import type { DefaultTheme } from 'styled-components';

import type { BoxProps } from '.';
import { Box } from '.';

export type PanelType = keyof DefaultTheme['variants']['panel'];

export interface PanelProps {
  type?: PanelType;
}

export const Panel: FunctionComponent<PanelProps & BoxProps> = ({
  type = 'default',
  children,
  ...props
}) => (
  <Box
    variant={`panel.${type}`}
    p="24px"
    sx={{
      borderRadius: 'large',
      boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.07)'
    }}
    {...props}>
    {children}
  </Box>
);
