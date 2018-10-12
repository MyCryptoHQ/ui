import { storiesOf } from '@storybook/react';
import React from 'react';
import { withTheme } from 'styled-components';
import styled from './styled-components';
import Theme from './Theme';

const Color = styled.div`
  background: ${props => props.color};
  border: 1px solid ${props => props.theme.text};
  height: 25px;
  width: 25px;
  margin: 5px 10px;
  border-radius: 50%;
`;

const VerticallyCentered = styled.div`
  display: flex;
  align-items: center;
`;

const ThemePreview = withTheme(({ theme }: { theme: Theme }) => (
  <>
    {Object.entries(theme)
      .filter(([key]) => key !== 'name')
      .map(([key, value]) => (
        <VerticallyCentered key={key}>
          <Color color={value} />
          <code>{key}</code>
        </VerticallyCentered>
      ))}
  </>
));

storiesOf('Styles', module).add('Theme', () => <ThemePreview />);
