import makeBlockie from 'ethereum-blockies-base64';
import React from 'react';

import styled from 'src/styled-components';
import { ExtractProps, Omit } from 'src/types';

const RoundedImage = styled.img`
  border-radius: 50%;
`;

export const Identicon = ({
  address,
  ...rest
}: { address: string } & Omit<ExtractProps<typeof RoundedImage>, 'ref'>) => {
  return <RoundedImage src={makeBlockie(address)} {...rest} />;
};

export default Identicon;
