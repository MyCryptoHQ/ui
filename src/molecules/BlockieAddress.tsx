import type { FunctionComponent } from 'react';

import type { FlexProps } from '@atoms';
import { Blockie, Flex, Address } from '@atoms';

interface Props extends Omit<FlexProps, 'variant'> {
  address: string;
}

export const BlockieAddress: FunctionComponent<Props> = ({
  address,
  fontSize = undefined,
  ...props
}) => (
  <Flex variant="rowAlign" {...props}>
    <Blockie address={address} width="30px" minWidth="30px" height="30px" mr="3" />
    <Address address={address} fontSize={fontSize} />
  </Flex>
);
