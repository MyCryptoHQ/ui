import { ThemeProvider } from 'styled-components';
import { theme } from '../src';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  )
];
