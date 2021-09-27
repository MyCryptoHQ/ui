import type { FunctionComponent } from 'react';

import type { BoxProps } from '.';
import { Box } from '.';

export interface PanelProps {
  muted?: boolean;
}

export const Panel: FunctionComponent<PanelProps & BoxProps> = ({ muted, children, ...props }) => (
  <Box
    p="24px"
    sx={{
      borderRadius: 'large',
      boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.07)',
      backgroundColor: muted ? 'panel.muted' : 'panel.background'
    }}
    {...props}>
    {children}
  </Box>
);
