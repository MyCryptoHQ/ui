import { setDefaults } from '@storybook/addon-info';
import { addDecorator, configure } from '@storybook/react';

setDefaults({ header: false, inline: true });

const req = require.context('../src', true, /.story.[jt]sx?$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
