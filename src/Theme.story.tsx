import { storiesOf } from '@storybook/react';
import React from 'react';
import { withTheme } from 'styled-components';
import styled from './styled-components';
import Theme from './Theme';

const Color = styled.div`
  vertical-align: middle;
  background-color: ${props => props.color};
  border: 1px solid ${props => props.theme.textColor};
  display: inline-block;
  height: 25px;
  width: 25px;
  margin: 5px 10px;
  border-radius: 50%;
`;

const Property = styled.code`
  vertical-align: middle;
`;

const ColorPair = withTheme(({ theme }: { theme: Theme }) => (
  <>
    {Object.entries(theme)
      .filter(([key]) => key.toLowerCase().includes('color'))
      .map(([key, value]) => (
        <div key={key}>
          <Color color={value} />
          <Property>{key}</Property>
        </div>
      ))}
  </>
));

storiesOf('Styles', module).add('Theme', () => <ColorPair />);
