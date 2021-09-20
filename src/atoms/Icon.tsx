import type { FunctionComponent } from 'react';

import type { ImageProps } from '.';
import { Image } from '.';
import help from '../assets/icons/help.svg';
import home from '../assets/icons/home.svg';
import present from '../assets/icons/present.svg';

export const icons = {
  help,
  home,
  present
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
