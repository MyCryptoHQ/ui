import type { FunctionComponent } from 'react';

import type { BoxProps } from '.';
import { Box } from '.';

export const Container: FunctionComponent<BoxProps> = ({ children, ...props }) => (
  <Box maxWidth="1136px" mx="auto" px="3" {...props}>
    {children}
  </Box>
);
