import React from 'react';

import styled from '_styled-components';
import { Identicon } from 'atoms';
import { Copyable } from 'molecules';
import { scale } from 'Theme';
import Typography from 'Typography';

const Flex = styled.div`
  display: flex;
`;

const Content = styled.div`
  padding-left: ${scale(0)};
`;

const Title = styled(Typography)`
  font-size: ${scale(1)};
`;

Title.defaultProps = { as: 'div' };

export function Address({
  address,
  title,
  truncate,
}: {
  address: string;
  title: string;
  truncate(text: string): string;
}) {
  return (
    <Flex>
      <Identicon address={address} />

      <Content>
        <Title>{title}</Title>
        <Copyable text={address} truncate={truncate} />
      </Content>
    </Flex>
  );
}

export default Address;
