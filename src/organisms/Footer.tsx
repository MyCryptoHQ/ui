import type { FunctionComponent } from 'react';

import { Flex, FooterSeparator } from '../atoms';
import { FooterAbout } from './FooterAbout';
import { FooterDonateAndSubscribe } from './FooterDonateAndSubscribe';
import { FooterLinks } from './FooterLinks';

export const Footer: FunctionComponent = () => (
  <Flex
    height={{ _: 'auto', lg: '300px' }}
    flexDirection={{ _: 'column', lg: 'row' }}
    justifyContent="center"
    alignItems="center"
    padding={{ _: '40px 30px', lg: '40px 50px', xl: '40px 115px' }}
    backgroundColor="secondary">
    <FooterAbout />
    <FooterSeparator order={1} />
    <FooterLinks />
    <FooterSeparator order={3} />
    <FooterDonateAndSubscribe />
  </Flex>
);
