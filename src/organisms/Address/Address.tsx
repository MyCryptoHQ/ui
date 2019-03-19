import React, { Component } from 'react';

import { Identicon } from 'src/atoms';
import { Copyable } from 'src/molecules';
import styled from 'src/styled-components';
import { scale } from 'src/Theme';
import Typography from 'src/Typography';

const Flex = styled.div`
  display: flex;
`;

const Content = styled.div`
  padding-left: ${scale(0)};
`;

const Title = styled(Typography)<{ clickable: boolean }>`
  display: inline;
  font-size: ${scale(0.5)};
  ${props => props.clickable && `cursor: pointer;`};
`;

Title.defaultProps = { as: 'div' };

interface AddressProps {
  address: string;
  title: string;
  truncate?: boolean;
}

interface AddressState {
  editing: boolean;
  title: string;
}

export class Address extends Component<AddressProps, AddressState> {
  public render() {
    const { address } = this.props;

    return (
      <Flex>
        <Content>
          <Identicon address={address} />
          {Copyable}
        </Content>
      </Flex>
    );
  }
}

export default Address;
