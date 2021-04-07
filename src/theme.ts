import type { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  fonts: {
    body: 'Lato, sans-serif',
    mono: 'Roboto Mono, Menlo, Monaco, Consolas, Courier New, monospace'
  },
  colors: {
    primary: '#007896',
    secondary: '#163150'
  },
  fontSizes: ['10px', '12px', '16px', '18px', '20px', '40px'],
  lineHeights: ['16px', '24px', '48px'],
  text: {
    heading: {
      fontSize: 5,
      lineHeight: 3,
      fontWeight: 700,
      color: 'DARK_BLUE'
    },
    subHeading: {
      fontSize: 4,
      lineHeight: 2,
      color: 'DARK_BLUE',
      fontWeight: 700
    },
    body: {
      fontSize: 2,
      lineHeight: 1,
      color: 'BODY'
    },
    muted: {
      fontSize: 2,
      lineHeight: 1,
      color: 'BLUE_GREY'
    },
    error: {
      fontSize: 2,
      lineHeight: 1,
      color: 'RED'
    }
  },
  variants: {
    avatar: {
      borderRadius: '50%'
    }
  }
};
