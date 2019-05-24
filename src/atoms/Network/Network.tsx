import { size } from 'polished';
import React, { ReactNode } from 'react';

import styled from '../../styled-components';
import { scale } from '../../Theme';
import Typography from '../../Typography';

const Color = styled.div`
  background: ${props => props.color};
  border: 0.0625em solid ${props => props.theme.text};
  border-radius: 50%;
  display: inline-block;
  margin-right: ${scale(-1)};
  ${size(scale(-1))};
`;

export function Network({
  children,
  color,
}: {
  children: ReactNode;
  color: string;
}) {
  return (
    <>
      <Color color={color} />
      <Typography as="span">{children}</Typography>
    </>
  );
}

export default Network;
