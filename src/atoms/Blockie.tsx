import makeBlockie from 'ethereum-blockies-base64';
import type { FunctionComponent } from 'react';

import type { ImageProps } from '.';
import { Image } from '.';

export interface BlockieProps extends ImageProps {
  address: string;
}

export const Blockie: FunctionComponent<BlockieProps> = ({ address, ...props }) => (
  <Image src={makeBlockie(address)} variant="avatar" {...props} />
);
