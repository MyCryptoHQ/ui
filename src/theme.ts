import type { DefaultTheme } from 'styled-components';

const FLEX_RECIPES = {
  align: {
    alignItems: 'center'
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  }
};

const FLEX_VARIANTS = {
  rowAlign: {
    display: 'flex',
    flexDirection: 'row',
    ...FLEX_RECIPES.align
  },
  rowCenter: {
    display: 'flex',
    flexDirection: 'row',
    ...FLEX_RECIPES.center
  },
  columnAlign: {
    display: 'flex',
    flexDirection: 'column',
    ...FLEX_RECIPES.align
  },
  columnCenter: {
    display: 'flex',
    flexDirection: 'column',
    ...FLEX_RECIPES.center
  }
};

const COLORS = {
  BODY: '#424242',
  DARK_BLUE: '#1c314e',
  BLUE_GREY: '#B5BFC7',
  RED: '#EF4747'
};

export const theme: DefaultTheme = {
  fonts: {
    body: 'Lato, sans-serif',
    mono: 'Roboto Mono, Menlo, Monaco, Consolas, Courier New, monospace'
  },
  colors: {
    primary: '#007896',
    secondary: '#163150',

    text: {
      primary: COLORS.BODY,
      secondary: COLORS.DARK_BLUE,
      discrete: COLORS.BLUE_GREY,
      warning: COLORS.RED
    }
  },
  fontSizes: ['0.625rem', '0.75rem', '1rem', '1.125rem', '1.25rem', '2.5rem'],
  lineHeights: ['16px', '24px', '48px'],
  text: {
    heading: {
      fontFamily: 'body',
      fontSize: 5,
      lineHeight: 3,
      fontWeight: 700,
      color: 'text.secondary'
    },
    subHeading: {
      fontFamily: 'body',
      fontSize: 4,
      lineHeight: 2,
      color: 'text.secondary',
      fontWeight: 700
    },
    body: {
      fontFamily: 'body',
      fontSize: 2,
      lineHeight: 1,
      color: 'text.primary'
    },
    code: {
      fontFamily: 'mono',
      fontSize: 2,
      lineHeight: 1,
      color: 'text.primary'
    },
    muted: {
      fontFamily: 'body',
      fontSize: 2,
      lineHeight: 1,
      color: 'text.discrete'
    },
    error: {
      fontFamily: 'body',
      fontSize: 2,
      lineHeight: 1,
      color: 'text.warning'
    }
  },
  variants: {
    ...FLEX_VARIANTS,
    avatar: {
      borderRadius: '50%'
    }
  }
};
