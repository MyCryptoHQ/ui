import React from 'react';
import styled from '../../styled-components';
import Typography from '../../Typography';

// We need Typography to set the appropriate em size, but without its extra negative space
const TypographyWrapper = styled(Typography)`
  line-height: 0;
  margin: 0;
`;

const RoundedImage = styled.img`
  border-radius: 50%;
  height: 2.5em;
`;

export const Avatar = ({ src, ...rest }: { src: string }) => {
  return (
    <TypographyWrapper {...rest}>
      <RoundedImage src={src} alt="Avatar" />
    </TypographyWrapper>
  );
};

export default Avatar;
