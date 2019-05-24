import { checkA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withOptions } from '@storybook/addon-options';
import { addDecorator, configure } from '@storybook/react';
import { cover } from 'polished';
import React, { StrictMode } from 'react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { configureViewport } from '@storybook/addon-viewport';
import 'typeface-lato';
import 'typeface-roboto-mono';

import styled from '../src/styled-components';
import { dark, light } from '../src/Theme';

addDecorator(
  withOptions({
    name: 'MyCrypto UI',
    url: 'https://github.com/MyCryptoHQ/ui',
  }),
);

addDecorator(checkA11y);

addDecorator(withInfo);

const Container = styled.div`
  background: ${props => props.theme.background};
  ${cover()};
  padding: 8px; /* stylelint-disable-line unit-whitelist */
`;
addDecorator(story => <Container>{story()}</Container>);

addDecorator(withThemesProvider([light, dark]));

addDecorator(story => <StrictMode>{story()}</StrictMode>);

const req = require.context('../src', true, /.story.[jt]sx?$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

const viewports = {
  default: {
    name: 'default',
    styles: {
      width: '100%',
      height: '100%',
    },
  },
  small: {
    name: 'Small (320x240)',
    styles: {
      width: '320px',
      height: '240px',
    },
  },
  medium: {
    name: 'Medium (800x600)',
    styles: {
      width: '800px',
      height: '600px',
    },
  },
  large: {
    name: 'Large (1280x1024)',
    styles: {
      width: '1280px',
      height: '1024px',
    },
  },
  iphoneX: {
    name: 'iPhone X',
    styles: {
      width: '375px',
      height: '812px',
    },
  },
  pixel3: {
    name: 'Google Pixel 3',
    styles: {
      width: '360px',
      height: '460px',
    },
  },
};

configureViewport({
  viewports,
});
