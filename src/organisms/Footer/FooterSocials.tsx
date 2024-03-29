import type { FunctionComponent } from 'react';

import type { IconType } from '../../atoms';
import { Flex, Icon, Body } from '../../atoms';

interface SocialLink {
  url: string;
  icon: IconType;
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
  <Flex flexDirection="row" my="16px">
    {SOCIAL_LINKS.map((social, index) => (
      <Body as="a" href={social.url} rel="noreferrer noopener" key={index} mr="15px">
        <Icon
          type={social.icon}
          width="13px"
          fill="white"
          sx={{
            verticalAlign: 'middle'
          }}
        />
      </Body>
    ))}
  </Flex>
);
