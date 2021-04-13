const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx'],
  addons: ['@storybook/addon-essentials'],
  core: {
    builder: 'webpack5'
  },

  features: {
    postcss: false
  },

  webpackFinal: async (config) => {
    config.resolve.alias['@fixtures'] = path.join(__dirname, '../.jest/__fixtures__');

    return config;
  }
};
