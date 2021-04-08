import type { FunctionComponent } from 'react';

import type { FlexProps } from '@atoms';
import { Blockie, Body, Flex } from '@atoms';

interface Props extends Omit<FlexProps, 'variant'> {
  address: string;
}

export const Address: FunctionComponent<Props> = ({ address, ...props }) => (
  <Flex variant="rowAlign" {...props}>
    <Blockie address={address} width="30px" minWidth="30px" height="30px" mr="3" />
    <Body
      fontSize="14px"
      sx={{
        wordBreak: 'break-word'
      }}>
      {address}
    </Body>
  </Flex>
);
