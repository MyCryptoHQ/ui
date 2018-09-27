import { storiesOf } from '@storybook/react';
import React from 'react';
import { withTheme } from 'styled-components';
import styled from './styled-components';
import Theme from './Theme';

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

const ColorPair = withTheme(({ theme: { primaryColor } }: { theme: Theme }) => (
  <>
    <Color color={primaryColor} />
    <Property>--primary-color</Property>
  </>
));

storiesOf('Styles', module).add('Theme', () => <ColorPair />);
