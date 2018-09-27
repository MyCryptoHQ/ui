import { withInfo } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';
import { addDecorator, configure } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { dark, light } from '../src/Theme';

setOptions({
  name: 'MyCrypto UI',
  url: 'https://github.com/MyCryptoHQ/ui',
});

addDecorator((story, context) =>
  withInfo({ header: false, inline: true })(story)(context),
);

addDecorator(withThemesProvider([light, dark]));

const req = require.context('../src', true, /.story.[jt]sx?$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
