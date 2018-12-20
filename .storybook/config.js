import { checkA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withOptions } from '@storybook/addon-options';
import { addDecorator, configure } from '@storybook/react';
import { cover } from 'polished';
import React, { StrictMode } from 'react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { configureViewport } from '@storybook/addon-viewport';
import 'typeface-lato';

import styled from 'src/styled-components';
import { dark, light } from 'src/Theme';

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

const defaultViewport = {
  /**
   * name to display in the dropdown
   * @type {String}
   */
  name: 'Responsive',

  /**
   * Inline styles to be applied to the story (iframe).
   * styles is an object whose key is the camelCased version of the style name, and whose
   * value is the style’s value, usually a string
   * @type {Object}
   */
  styles: {
    width: '100%',
    height: '100%',
  },

  /**
   * type of the device (e.g. desktop, mobile, or tablet)
   * @type {String}
   */
  type: 'desktop',
};

configureViewport({
  viewports: defaultViewport,
});

const req = require.context('../src', true, /.story.[jt]sx?$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
