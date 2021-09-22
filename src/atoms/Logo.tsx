import type { FunctionComponent } from 'react';

import type { ImageProps } from '.';
import { Image } from '.';
import logo from '../assets/logos/mycrypto.svg';

export const Logo: FunctionComponent<Omit<ImageProps, 'src'>> = ({ width = '200px', ...props }) => (
  <Image src={logo} width={width} minWidth={width} {...props} />
);
