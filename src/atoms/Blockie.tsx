import makeBlockie from 'ethereum-blockies-base64';

import type { ImageProps } from '.';
import { Image } from '.';

export const Blockie = ({ address, ...props }: { address: string } & ImageProps) => (
  <Image src={makeBlockie(address)} variant="avatar" {...props} />
);
