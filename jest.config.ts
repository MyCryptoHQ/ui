export default {
  setupFilesAfterEnv: ['./.jest/setup.ts'],
  collectCoverageFrom: ['**/src/**/*.{js,jsx,ts,tsx}', '!**/src/types/**']
};
