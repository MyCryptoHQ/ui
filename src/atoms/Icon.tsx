import type { FunctionComponent } from 'react';
import InlineSVG from 'react-inlinesvg';
import { useTheme } from 'styled-components';
import { get } from 'styled-system';
import type { Theme } from 'theme';

import type { BoxProps } from '.';
import { Box } from '.';
import alert from '../assets/icons/alert.svg';
import arrow from '../assets/icons/arrow.svg';
import blog from '../assets/icons/blog.svg';
import caret from '../assets/icons/caret.svg';
import checkmark from '../assets/icons/checkmark.svg';
import copy from '../assets/icons/copy.svg';
import deleteIcon from '../assets/icons/delete.svg';
import external from '../assets/icons/external.svg';
import help from '../assets/icons/help.svg';
import home from '../assets/icons/home.svg';
import info from '../assets/icons/info.svg';
import link from '../assets/icons/link.svg';
import lock from '../assets/icons/lock.svg';
import minus from '../assets/icons/minus.svg';
import plus from '../assets/icons/plus.svg';
import present from '../assets/icons/present.svg';
import press from '../assets/icons/press.svg';
import question from '../assets/icons/question.svg';
import search from '../assets/icons/search.svg';
import support from '../assets/icons/support.svg';
import team from '../assets/icons/team.svg';
import tool from '../assets/icons/tool.svg';
import waiting from '../assets/icons/waiting.svg';
import warning from '../assets/icons/warning.svg';
import apple from '../assets/logos/apple.svg';
import bitcoin from '../assets/logos/bitcoin.svg';
import discord from '../assets/logos/discord.svg';
import ether from '../assets/logos/ether.svg';
import facebook from '../assets/logos/facebook.svg';
import github from '../assets/logos/github.svg';
import linkedin from '../assets/logos/linkedin.svg';
import linux from '../assets/logos/linux.svg';
import medium from '../assets/logos/medium.svg';
import reddit from '../assets/logos/reddit.svg';
import telegram from '../assets/logos/telegram.svg';
import twitter from '../assets/logos/twitter.svg';
import windows from '../assets/logos/windows.svg';

export const icons = {
  alert,
  arrow,
  blog,
  caret,
  checkmark,
  copy,
  delete: deleteIcon,
  external,
  help,
  home,
  info,
  link,
  lock,
  minus,
  plus,
  present,
  press,
  question,
  search,
  support,
  team,
  tool,
  waiting,
  warning,

  apple,
  bitcoin,
  discord,
  ether,
  facebook,
  github,
  linkedin,
  linux,
  medium,
  reddit,
  telegram,
  twitter,
  windows
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
  const theme = useTheme();
  if (fill) {
    return (
      <Box
        as={InlineSVG}
        src={icons[type]}
        width={width}
        fill={get(theme.colors, (fill as keyof Theme['colors']) as string) || fill}
        {...props}
      />
    );
  }

  return <Box as="img" src={icons[type]} width={width} {...props} />;
};
