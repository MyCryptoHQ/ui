import type { FunctionComponent } from 'react';

import { Flex, Box, Logo, Body } from '../atoms';
import { FooterSocials } from './FooterSocials';

export const FooterAbout: FunctionComponent = () => (
  <Flex
    height="100%"
    width={{ _: '100%', lg: '20%' }}
    flexDirection="column"
    justifyContent="space-evenly"
    alignItems={{ _: 'center', lg: 'flex-start' }}
    order={0}>
    <Logo white={true} width="152px" />
    <Body
      variant="small"
      color="white"
      mt="13px"
      width={{ _: '80%', lg: 'auto' }}
      textAlign={{ _: 'center', lg: 'left' }}>
      MyCrypto is an open-source tool that allows you to manage your Ethereum accounts privately and
      securely. Developed by and for the community since 2015, we’re focused on building awesome
      products that put the power in people’s hands.
    </Body>
    <Box display={{ _: 'none', lg: 'block' }}>
      <FooterSocials />
      <Body
        variant="small"
        color="white"
        mt="20px">{`© ${new Date().getFullYear()} MyCrypto, Inc.`}</Body>
    </Box>
  </Flex>
);
