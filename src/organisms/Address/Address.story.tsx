import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';

import styled from '../../styled-components';
import Address from './Address';

const Wrapper = styled.div`
  max-width: 250px;
`;

const storyProps = {
  address: '0x4bbeEB066D09B7AEd07bF39EE20460DFa261520',
  title: 'John Doe',
  truncate(children: string) {
    return [
      children.substring(0, 6),
      '…',
      children.substring(children.length - 4),
    ].join('');
  },
};

const withAvatarProps = {
  ...storyProps,
  tooltip: {
    image: 'https://www.w3schools.com/howto/img_avatar.png',
    content: (
      <div>
        <div>{storyProps.title}</div>
        <div>{storyProps.address}</div>
      </div>
    ),
  },
};

class AddressContainer extends Component<
  {},
  {
    title: string;
  }
> {
  public state = { title: storyProps.title };

  public handleSubmit = (title: string) => this.setState({ title });

  public render() {
    const { title } = this.state;

    return (
      <Address {...storyProps} title={title} onSubmit={this.handleSubmit} />
    );
  }
}

storiesOf('Organisms', module).add('Address', () => (
  <>
    <Address {...storyProps} title={undefined} />
    <Address {...storyProps} />
    <Address {...storyProps} isCopyable={false} />
    <AddressContainer />
    <Address title={storyProps.title} address="foo.eth" />
    <Wrapper>
      <Address {...withAvatarProps} />
    </Wrapper>
  </>
));
