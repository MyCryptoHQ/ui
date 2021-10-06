import type { FunctionComponent } from 'react';

import { Flex, Body, InlineBody } from '../atoms';

interface FooterLink {
  heading: string;
  links: {
    title: string;
    url: string;
    internal?: boolean;
  }[];
}

export const LINK_COLUMNS: FooterLink[] = [
  {
    heading: 'Company',
    links: [
      {
        title: 'Help & Support',
        url: 'https://support.mycrypto.com/'
      },
      {
        title: 'Our Team',
        url: '/about',
        internal: true
      },
      {
        title: 'Press',
        url: 'mailto://press@mycrypto.com'
      },
      {
        title: 'Privacy Policy',
        url: '/privacy',
        internal: true
      },
      {
        title: 'Jobs',
        url: '/jobs',
        internal: true
      },
      {
        title: 'Security',
        url: '/security',
        internal: true
      }
    ]
  },
  {
    heading: 'Support Us',
    links: [
      {
        title: 'Get a Ledger',
        url: 'https://www.ledgerwallet.com/r/1985?path=/products/'
      },
      {
        title: 'Get a Trezor',
        url: 'https://shop.trezor.io/?offer_id=10&aff_id=1735'
      },
      {
        title: 'Get QuikNode',
        url: 'https://quiknode.io?tap_a=67226-09396e&tap_s=860550-6c3251'
      },
      {
        title: 'Buy ETH on Coinbase',
        url: 'https://coinbase-consumer.sjv.io/RVmkN'
      },
      {
        title: 'Unstoppable Domains',
        url: 'https://unstoppabledomains.com/r/mycrypto'
      }
    ]
  },
  {
    heading: 'Other Products',
    links: [
      {
        title: 'EtherAddressLookup',
        url:
          'https://chrome.google.com/webstore/detail/etheraddresslookup/pdknmigbbbhmllnmgdfalmedcmcefdfn'
      },
      {
        title: 'CryptoScamDB',
        url: 'https://cryptoscamdb.org/'
      },
      {
        title: 'FindETH',
        url: 'https://findeth.io/'
      },
      {
        title: 'MoneroVision',
        url: 'https://monerovision.com/'
      }
    ]
  }
];

export const FooterLinks: FunctionComponent = () => (
  <Flex
    flexDirection={{ _: 'column', sm: 'row' }}
    justifyContent={{ _: 'center', lg: 'space-between' }}
    alignItems="center"
    width={{ _: '100%', lg: '40%' }}
    order={{ _: 4, lg: 2 }}>
    {LINK_COLUMNS.map((column, index) => (
      <Flex
        key={index}
        minWidth="120px"
        flexDirection="column"
        alignItems="center"
        width={1 / 3}
        my={{ _: '20px', sm: 'auto' }}>
        <Body fontWeight="500" color="white" mb="10px">
          {column.heading}
        </Body>
        {column.links.map((link, index) => (
          <Body key={index} sx={{ textDecoration: 'none' }} mb="10px" href={link.url}>
            <InlineBody variant="footerLink" color="rgb(187, 194, 203)">
              {link.title}
            </InlineBody>
          </Body>
        ))}
      </Flex>
    ))}
  </Flex>
);
