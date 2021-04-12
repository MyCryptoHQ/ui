import type { FunctionComponent } from 'react';

import type { TextProps } from '@atoms';
import { Body } from '@atoms';

export interface AddressProps extends Omit<TextProps, 'variant'> {
  address: string;
}

export const Address: FunctionComponent<AddressProps> = ({ address, sx, ...props }) => (
  <Body
    sx={{
      ...sx,
      wordBreak: 'break-word'
    }}
    {...props}>
    {address}
  </Body>
);
