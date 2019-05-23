import makeBlockie from 'ethereum-blockies-base64';
import React, { DetailedHTMLProps, ImgHTMLAttributes } from 'react';
import { ThemedOuterStyledProps } from 'styled-components';

import Omit from '../../Omit';
import styled from '../../styled-components';
import Theme from '../../Theme';

const RoundedImage = styled.img`
  border-radius: 50%;
  height: 3.75em;
`;

export const Identicon = ({
  address,
  ...rest
}: { address: string } & Omit<
  ThemedOuterStyledProps<
    DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
    Theme
  >,
  'ref'
>) => {
  return <RoundedImage src={makeBlockie(address)} {...rest} />;
};

export default Identicon;
