import type { FunctionComponent } from 'react';

import type { ImageProps } from '.';
import { Image } from '.';
import alert from '../assets/icons/alert.svg';
import arrow from '../assets/icons/arrow.svg';
import caret from '../assets/icons/caret.svg';
import checkmark from '../assets/icons/checkmark.svg';
import help from '../assets/icons/help.svg';
import home from '../assets/icons/home.svg';
import info from '../assets/icons/info.svg';
import link from '../assets/icons/link.svg';
import present from '../assets/icons/present.svg';
import waiting from '../assets/icons/waiting.svg';
import warning from '../assets/icons/warning.svg';
import bitcoin from '../assets/logos/bitcoin.svg';
import discord from '../assets/logos/discord.svg';
import ether from '../assets/logos/ether.svg';
import facebook from '../assets/logos/facebook.svg';
import github from '../assets/logos/github.svg';
import linkedin from '../assets/logos/linkedin.svg';
import medium from '../assets/logos/medium.svg';
import reddit from '../assets/logos/reddit.svg';
import telegram from '../assets/logos/telegram.svg';
import twitter from '../assets/logos/twitter.svg';

export const icons = {
  alert,
  arrow,
  caret,
  checkmark,
  help,
  home,
  info,
  link,
  present,
  waiting,
  warning,

  bitcoin,
  discord,
  ether,
  facebook,
  github,
  linkedin,
  medium,
  reddit,
  telegram,
  twitter
};

export type Icons = keyof typeof icons;

export interface IconProps {
  type: Icons;
}

export const Icon: FunctionComponent<IconProps & Omit<ImageProps, 'src'>> = ({
  type,
  width = 15,
  ...props
}) => <Image src={icons[type]} width={width} {...props} />;
