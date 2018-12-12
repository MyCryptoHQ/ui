import React, { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

import copy from './icons/icn-copy.svg';

export const icons = { copy };

export function Icon({
  icon,
  ...rest
}: { icon: keyof typeof icons } & DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>) {
  return <img src={icons[icon]} alt={icon} {...rest} />;
}

export default Icon;
