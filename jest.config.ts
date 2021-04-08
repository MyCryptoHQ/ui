export default {
  setupFilesAfterEnv: ['./.jest/setup.ts'],
  collectCoverageFrom: ['**/src/**/*.{js,jsx,ts,tsx}', '!**/src/types/**'],
  moduleNameMapper: {
    fixtures: '<rootDir>/.jest/__fixtures__',
    '^@(.+)$': ['<rootDir>/node_modules/$0', '<rootDir>/src/$1']
  }
};
