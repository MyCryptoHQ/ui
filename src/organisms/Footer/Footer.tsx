import type { FunctionComponent } from 'react';

import { Flex } from '../../atoms';

export const Footer: FunctionComponent = ({ children }) => (
  <Flex
    height={{ _: 'auto', lg: '300px' }}
    flexDirection={{ _: 'column', lg: 'row' }}
    justifyContent="center"
    alignItems="center"
    padding={{ _: '40px 30px', lg: '40px 50px', xl: '40px 115px' }}
    backgroundColor="secondary">
    {children}
  </Flex>
);
