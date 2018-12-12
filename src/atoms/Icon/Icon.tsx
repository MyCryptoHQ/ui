import React, { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

import { Omit } from 'types';
import copy from './icons/icn-copy.svg';

export const icons = { copy };

export function Icon({
  icon,
  ...rest
}: { icon: keyof typeof icons } & Omit<
  DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
  'ref'
>) {
  return <img src={icons[icon]} alt={icon} {...rest} />;
}

export default Icon;
