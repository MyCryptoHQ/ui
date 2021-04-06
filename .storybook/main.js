module.exports = {
  stories: ['../src/**/*.stories.mdx'],
  addons: ['@storybook/addon-essentials'],
  core: {
    builder: 'webpack5'
  },

  features: {
    postcss: false
  }
};
