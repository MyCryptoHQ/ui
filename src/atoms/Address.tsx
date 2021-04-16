import type { FunctionComponent } from 'react';

import type { TextProps } from '.';
import { Body } from './Typography';

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
