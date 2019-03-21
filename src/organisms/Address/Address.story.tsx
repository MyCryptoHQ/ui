import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';

import Address from './Address';
import { Copyable } from 'src/molecules';
import AddressLabelProps from 'src/atoms/EditableTitle/EditableTitle';
import { Identicon } from 'src/atoms';

const storyProps = {
  address: '0x4bbeEB066D09B7AEd07bF39EE20460DFa261520',
  title: 'John Doe',
};

storiesOf('Molecules', module).add('Address', () => (
  <>
    <Address
      copyable={false}
      editable={false}
      address="myAddress"
      truncate={true}
    />
  </>
));
