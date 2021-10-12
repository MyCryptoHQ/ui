import type { FunctionComponent } from 'react';

import type { BoxProps, IconType } from '../atoms';
import { Body, Box, Icon } from '../atoms';

export interface HeaderButtonProps {
  icon: IconType;
  text: string;
}

export const HeaderButton: FunctionComponent<HeaderButtonProps & BoxProps> = ({
  icon,
  text,
  ...props
}) => (
  <Box {...props} display="inline-block" sx={{ textAlign: 'center' }} px="3">
    <Icon type={icon} width="25px" mb="2" />
    <Body fontSize="14px" lineHeight="1rem" sx={{ textTransform: 'uppercase' }}>
      {text}
    </Body>
  </Box>
);
