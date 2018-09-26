import { storiesOf } from '@storybook/react';
import React from 'react';
import primaryColor from './colors';
import styled from './styled-components';

const Color = styled.div`
  vertical-align: middle;
  background-color: ${props => props.color};
  display: inline-block;
  height: 25px;
  width: 25px;
  margin: 5px 10px;
  border-radius: 50%;
`;

const Property = styled.code`
  vertical-align: middle;
`;

storiesOf('Styles', module).add('Colors', () => (
  <>
    <Color color={primaryColor} />
    <Property>--primary-color</Property>
  </>
));
