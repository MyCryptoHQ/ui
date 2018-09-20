import { setDefaults } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';
import { addDecorator, configure } from '@storybook/react';

setDefaults({ header: false, inline: true });

setOptions({
  name: 'MyCrypto UI',
  url: 'https://github.com/MyCryptoHQ/ui',
  showAddonPanel: false,
});

const req = require.context('../src', true, /.story.[jt]sx?$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
