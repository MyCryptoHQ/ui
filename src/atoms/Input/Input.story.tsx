import { storiesOf } from '@storybook/react';
import React, { DetailedHTMLProps, LabelHTMLAttributes } from 'react';
import { StyledComponentClass } from 'styled-components';
import Input from '.';
import Theme from '../../Theme';
import Text from '../Text';

const Label = Text as StyledComponentClass<
  DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>,
  Theme
>;

storiesOf('Atoms', module).add('Input', () => (
  <Label as="label" htmlFor="to-address">
    To Address
    <br />
    <Input
      id="to-address"
      placeholder="0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520"
    />
  </Label>
));
