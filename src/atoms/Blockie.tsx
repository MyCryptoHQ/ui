import makeBlockie from 'ethereum-blockies-base64';
import type { FunctionComponent } from 'react';
import { useMemo } from 'react';

import type { ImageProps } from '.';
import { Image } from '.';

export interface BlockieProps extends ImageProps {
  address: string;
}

export const Blockie: FunctionComponent<BlockieProps> = ({ address, ...props }) => {
  const blockie = useMemo(() => makeBlockie(address), [address]);
  return <Image src={blockie} variant="avatar" {...props} />;
};
