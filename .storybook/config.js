import { withInfo } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';
import { addDecorator, configure } from '@storybook/react';

setOptions({
  name: 'MyCrypto UI',
  url: 'https://github.com/MyCryptoHQ/ui',
  showAddonPanel: false,
});

addDecorator((story, context) =>
  withInfo({ header: false, inline: true })(story)(context),
);

const req = require.context('../src', true, /.story.[jt]sx?$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
