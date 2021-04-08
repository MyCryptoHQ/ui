import makeBlockie from 'ethereum-blockies-base64';
import type { FunctionComponent } from 'react';

import type { ImageProps } from '.';
import { Image } from '.';

interface Props extends ImageProps {
  address: string;
}

export const Blockie: FunctionComponent<Props> = ({ address, ...props }) => (
  <Image src={makeBlockie(address)} variant="avatar" {...props} />
);
