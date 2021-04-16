import type { FunctionComponent } from 'react';

import type { FlexProps } from '../atoms';
import { Blockie, Flex, Address } from '../atoms';

export interface BlockieAddressProps extends Omit<FlexProps, 'variant'> {
  address: string;
}

export const BlockieAddress: FunctionComponent<BlockieAddressProps> = ({
  address,
  fontSize = undefined,
  ...props
}) => (
  <Flex variant="horizontal-start" {...props}>
    <Blockie address={address} width="30px" minWidth="30px" height="30px" mr="3" />
    <Address address={address} fontSize={fontSize} />
  </Flex>
);
