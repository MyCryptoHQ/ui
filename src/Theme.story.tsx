import { storiesOf } from '@storybook/react';
import { margin, size } from 'polished';
import React from 'react';
import { withTheme } from 'styled-components';
import Text from '../src/atoms/Text';
import styled from './styled-components';
import Theme from './Theme';

const Color = styled.div`
  background: ${props => props.color};
  border: 1px solid ${props => props.theme.text};
  ${size('25px')};
  ${margin('5px', '10px')};
  border-radius: 50%; /* stylelint-disable-line unit-whitelist */
`;

const Code = styled(Text.withComponent('code'))`
  font-family: monospace;
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
          <Code>{key}</Code>
        </VerticallyCentered>
      ))}
  </>
));

storiesOf('Styles', module).add('Theme', () => <ThemePreview />);
