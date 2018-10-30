import { checkA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withOptions } from '@storybook/addon-options';
import { addDecorator, configure } from '@storybook/react';
import { cover } from 'polished';
import React from 'react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import styled from '../src/styled-components';
import { dark, light } from '../src/Theme';

addDecorator(
  withOptions({
    name: 'MyCrypto UI',
    url: 'https://github.com/MyCryptoHQ/ui',
  }),
);

addDecorator(checkA11y);

addDecorator(
  withInfo({
    header: false,
    inline: true,
  }),
);

const Container = styled.div`
  background: ${props => props.theme.background};
  ${cover()};
  border-radius: 0.25em;
  padding: 0.5em;
`;
addDecorator(story => <Container>{story()}</Container>);

addDecorator(withThemesProvider([light, dark]));

const req = require.context('../src', true, /.story.[jt]sx?$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
