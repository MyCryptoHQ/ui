import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { addDecorator, configure, addParameters } from '@storybook/react';
import { withThemes } from 'storybook-styled-components';
import { cover } from 'polished';
import React, { StrictMode } from 'react';
import 'typeface-lato';
import 'typeface-roboto-mono';

import theme from './theme';
import styled from '../src/styled-components';
import { dark, light } from '../src/Theme';

addParameters({
  options: {
    theme,
  },
});

addDecorator(withA11y);

addDecorator(withInfo);

const Container = styled.div`
  background: ${props => props.theme.background};
  ${cover()};
  padding: 8px; /* stylelint-disable-line unit-whitelist */
`;
addDecorator(story => <Container>{story()}</Container>);

addDecorator(
  withThemes({
    Light: light,
    Dark: dark,
  }),
);

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

addParameters({
  viewport: { viewports },
});
