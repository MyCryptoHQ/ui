import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';

import Address from './Address';

const storyProps = {
  address: '0x4bbeEB066D09B7AEd07bF39EE20460DFa261520',
  title: 'John Doe',
};

class AddressContainer extends Component {
  public state = { title: storyProps.title, address: storyProps.address };

  public render() {
    const { title, address } = this.state;

    return <Address title={title} address={address} />;
  }
}

storiesOf('Molecules', module).add('Address', () => (
  <>
    <Address
      address={storyProps.address}
      title={storyProps.title}
      truncate={true}
    />
    <AddressContainer />
    <Address title={storyProps.title} address="foo.eth" />
  </>
));
