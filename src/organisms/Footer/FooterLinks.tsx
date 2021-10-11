import type { FunctionComponent } from 'react';

import { Body, Flex } from '../../atoms';

export interface FooterLinkColumnProps {
  heading: string;
}

export const FooterLinkColumn: FunctionComponent<FooterLinkColumnProps> = ({
  heading,
  children
}) => (
  <Flex
    minWidth="120px"
    flexDirection="column"
    alignItems="center"
    width={1 / 3}
    my={{ _: '20px', sm: 'auto' }}>
    <Body fontWeight="500" color="text.footer" mb="10px">
      {heading}
    </Body>
    {children}
  </Flex>
);

export const FooterLink: FunctionComponent = ({ children }) => (
  <Body sx={{ textDecoration: 'none' }} mb="8px" color="text.footer" fontWeight="300">
    {children}
  </Body>
);

export const FooterLinks: FunctionComponent = ({ children }) => (
  <Flex
    flexDirection={{ _: 'column', sm: 'row' }}
    justifyContent={{ _: 'center', lg: 'space-between' }}
    alignItems="center"
    width={{ _: '100%', lg: '40%' }}
    order={{ _: 4, lg: 2 }}>
    {children}
  </Flex>
);
