import type { FunctionComponent } from 'react';
import type { BoxProps } from 'rebass';

import type { BadgeType } from '.';
import { Body, Box } from '.';

export interface LabelProps {
  type: BadgeType;
}

export const Label: FunctionComponent<LabelProps & BoxProps> = ({ type, children, ...props }) => (
  <Box
    mb="2"
    px="2"
    py="1"
    variant={`banner.${type}`}
    sx={{ borderRadius: 'badge' }}
    width="fit-content"
    {...props}>
    <Body
      color="inherit"
      fontSize="1"
      fontWeight="bold"
      sx={{ textTransform: 'uppercase', wordBreak: 'break-word' }}>
      {children}
    </Body>
  </Box>
);
