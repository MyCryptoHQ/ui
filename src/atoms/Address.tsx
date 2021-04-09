import type { FunctionComponent } from 'react';

import type { TextProps } from '@atoms';
import { Body } from '@atoms';

interface Props extends Omit<TextProps, 'variant'> {
  address: string;
}

export const Address: FunctionComponent<Props> = ({ address, sx, ...props }) => (
  <Body
    sx={{
      ...sx,
      wordBreak: 'break-word'
    }}
    {...props}>
    {address}
  </Body>
);
