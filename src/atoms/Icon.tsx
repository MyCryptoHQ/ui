import type { FunctionComponent } from 'react';
import InlineSVG from 'react-inlinesvg';

import type { BoxProps } from '.';
import { Box } from '.';
import alert from '../assets/icons/alert.svg';
import arrow from '../assets/icons/arrow.svg';
import caret from '../assets/icons/caret.svg';
import checkmark from '../assets/icons/checkmark.svg';
import copy from '../assets/icons/copy.svg';
import help from '../assets/icons/help.svg';
import home from '../assets/icons/home.svg';
import info from '../assets/icons/info.svg';
import link from '../assets/icons/link.svg';
import lock from '../assets/icons/lock.svg';
import present from '../assets/icons/present.svg';
import press from '../assets/icons/press.svg';
import team from '../assets/icons/team.svg';
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
  copy,
  help,
  home,
  info,
  link,
  lock,
  present,
  press,
  team,
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

export type IconType = keyof typeof icons;

export interface IconProps {
  type: IconType;
  fill?: string;
}

export const Icon: FunctionComponent<IconProps & BoxProps> = ({
  type,
  width = '15',
  fill,
  ...props
}) => {
  if (fill) {
    return <Box as={InlineSVG} src={icons[type]} width={width} fill={fill} {...props} />;
  }

  return <Box as="img" src={icons[type]} width={width} {...props} />;
};
