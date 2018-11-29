import makeBlockie from 'ethereum-blockies-base64';
import React from 'react';

import styled from '_styled-components';

const RoundedImage = styled.img`
  border-radius: 50%; /* stylelint-disable-line unit-whitelist */
`;

export const Identicon = ({ address }: { address: string }) => {
  return <RoundedImage src={makeBlockie(address)} />;
};

export default Identicon;
