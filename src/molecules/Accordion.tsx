import type { FunctionComponent } from 'react';

import type { BoxProps } from '../atoms';
import { Box } from '../atoms';

export type AccordionProps = BoxProps;

export const Accordion: FunctionComponent<AccordionProps> = ({ children, ...props }) => (
  <Box
    as="ul"
    p="0"
    sx={{
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      borderBottomColor: 'accordion.border'
    }}
    {...props}>
    {children}
  </Box>
);
