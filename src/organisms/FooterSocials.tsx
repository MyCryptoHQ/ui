import type { FunctionComponent } from 'react';

import type { Icons } from '../atoms';
import { Flex, Icon, Body } from '../atoms';

interface SocialLink {
  url: string;
  icon: Icons;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    url: 'https://twitter.com/mycrypto',
    icon: 'twitter'
  },
  {
    url: 'https://www.facebook.com/mycryptoHQ/',
    icon: 'facebook'
  },
  {
    url: 'https://medium.com/mycrypto',
    icon: 'medium'
  },
  {
    url: 'https://www.linkedin.com/company/mycrypto',
    icon: 'linkedin'
  },
  {
    url: 'https://github.com/MyCryptoHQ',
    icon: 'github'
  },
  {
    url: 'https://www.reddit.com/r/mycrypto/',
    icon: 'reddit'
  },
  {
    url: 'https://discord.gg/VSaTXEA',
    icon: 'discord'
  },
  {
    url: 'https://t.me/mycryptohq',
    icon: 'telegram'
  }
];

export const FooterSocials: FunctionComponent = () => (
  <Flex flexDirection="row" my={{ _: '20px', lg: 0 }}>
    {SOCIAL_LINKS.map((social, index) => (
      <Body href={social.url} key={index} mr="15px">
        <Icon type={social.icon} width="13px" fill="white" />
      </Body>
    ))}
  </Flex>
);
