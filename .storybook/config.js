import { checkA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withOptions } from '@storybook/addon-options';
import { addDecorator, configure, setAddon } from '@storybook/react';
import chaptersAddon from 'react-storybook-addon-chapters';
import { cover } from 'polished';
import React from 'react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

import styled from '_styled-components';
import { dark, light } from 'Theme';

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

  .section-header,
  .section-container,
  .section-component-container,
  .section-subsection {
    margin-bottom: 0 !important; /* stylelint-disable-line declaration-no-important */
  }
`;
addDecorator(story => <Container>{story()}</Container>);

addDecorator(withThemesProvider([light, dark]));

const req = require.context('../src', true, /.story.[jt]sx?$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

setAddon(chaptersAddon);

configure(loadStories, module);
