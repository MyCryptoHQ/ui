export default {
  setupFilesAfterEnv: ['./.jest/setup.ts'],
  collectCoverageFrom: ['**/src/**/*.{js,jsx,ts,tsx}', '!**/src/types/**'],
  testPathIgnorePatterns: ['/node_modules/', '/lib/']
};
