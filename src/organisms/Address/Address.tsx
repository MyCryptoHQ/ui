import React, { Component } from 'react';
import { Copyable } from 'src/molecules';
import { Identicon } from 'src/atoms';
import { CopyableProps } from 'src/molecules/Copyable/Copyable';
import {
  AddressLabel,
  EditableAddressLabelProps,
} from 'src/atoms/EditableTitle/EditableTitle';

interface BaseAddressProps {
  address: string;
  truncate: boolean;
}

interface EditableCopyableAddressProps extends BaseAddressProps {
  copyable: true;
  copyableButtonProps?: CopyableProps['props'];

  editable: true;
  onSubmit: EditableAddressLabelProps['onSubmit'];
}

interface EditableNonCopyableAddressProps extends BaseAddressProps {
  copyable: false;

  editable: true;
  onSubmit: EditableAddressLabelProps['onSubmit'];
}

interface NonEditableCopyableAddressProps extends BaseAddressProps {
  copyable: true;
  copyableButtonProps?: CopyableProps['props'];

  editable: false;
}

interface NonEditableNonCopyableAddressProps extends BaseAddressProps {
  copyable: false;
  editable: false;
}

type AddressProps =
  | EditableCopyableAddressProps
  | EditableNonCopyableAddressProps
  | NonEditableCopyableAddressProps
  | NonEditableNonCopyableAddressProps;

interface AddressState {}

export class Address extends Component<AddressProps, AddressState> {
  public render() {
    const { copyable, editable, address, truncate } = this.props;
    //Identicon, Copyable, EditableTitle,
    let componentToRender: JSX.Element;
    if (editable && copyable) {
      const { copyableButtonProps, onSubmit } = this
        .props as EditableCopyableAddressProps;
      componentToRender = (
        <>
          <Copyable
            copyable={copyable}
            text={address}
            truncate={truncate}
            props={copyableButtonProps}
          />
          <AddressLabel
            onSubmit={onSubmit}
            title={address}
            editable={editable}
          />
        </>
      );
    } else if (editable && !copyable) {
      const { onSubmit } = this.props as EditableNonCopyableAddressProps;
      componentToRender = (
        <>
          <Copyable copyable={copyable} text={address} truncate={truncate} />
          <AddressLabel onSubmit={onSubmit} title={address} />
        </>
      );
    } else if (!editable && copyable) {
      const { copyableButtonProps } = this
        .props as NonEditableCopyableAddressProps;
      componentToRender = (
        <>
          <Copyable
            copyable={copyable}
            text={address}
            truncate={truncate}
            props={copyableButtonProps}
          />
          <AddressLabel title={address} />
        </>
      );
    } else {
      componentToRender = (
        <>
          <Copyable
            copyable={copyable as false}
            text={address}
            truncate={truncate}
          />
          <AddressLabel title={address} />
        </>
      );
    }

    return (
      <>
        <Identicon address={address} />
        {componentToRender}
      </>
    );
  }
}

export default Address;
