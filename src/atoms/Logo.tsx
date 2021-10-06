import type { FunctionComponent } from 'react';

import type { ImageProps } from '.';
import { Image } from '.';
import logoWhite from '../assets/logos/mycrypto-white.svg';
import logo from '../assets/logos/mycrypto.svg';

export interface LogoProps {
  white?: boolean;
}

export const Logo: FunctionComponent<LogoProps & Omit<ImageProps, 'src'>> = ({
  width = '200px',
  white,
  ...props
}) => <Image src={white ? logoWhite : logo} width={width} minWidth={width} {...props} />;
