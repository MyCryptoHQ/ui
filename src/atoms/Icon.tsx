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
import present from '../assets/icons/present.svg';
import waiting from '../assets/icons/waiting.svg';
import warning from '../assets/icons/warning.svg';

export const icons = {
  alert,
  arrow,
  caret,
  checkmark,
  help,
  home,
  info,
  present,
  waiting,
  warning
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
