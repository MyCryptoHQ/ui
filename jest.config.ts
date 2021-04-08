export default {
  setupFilesAfterEnv: ['./.jest/setup.ts'],
  collectCoverageFrom: ['**/src/**/*.{js,jsx,ts,tsx}', '!**/src/types/**'],
  moduleNameMapper: {
    '^@(.+)$': ['<rootDir>/node_modules/$0', '<rootDir>/src/$1']
  },
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
    '^.+\\.mdx?$': '@storybook/addon-docs/jest-transform-mdx'
  }
};
