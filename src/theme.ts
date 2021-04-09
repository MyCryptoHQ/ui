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

export const theme: DefaultTheme = {
  fonts: {
    body: 'Lato, sans-serif',
    mono: 'Roboto Mono, Menlo, Monaco, Consolas, Courier New, monospace'
  },
  colors: {
    primary: '#007896',
    secondary: '#163150',

    // @todo: CONVERT COLORS TO NAMED THEME COLORS

    DEFAULT_BACKGROUND: '#fbfbfb',

    // BLUE
    BLUE: '#027796',
    DARK_BLUE: '#1c314e',
    LIGHT_BLUE: '#55B6E2',
    BLUE_LIGHT: '#007896',
    BLUE_LIGHT_DARKISH: '#006077',
    BLUE_DARK_SLATE: '#163150',
    BLUE_GREY: '#B5BFC7',
    BLUE_BRIGHT: '#1eb8e7',

    // BLACK
    BODY: '#424242',

    // GREY
    BG_GREY: '#C4C4C4',
    BG_GREY_MUTED: '#F6F8FA',
    GREY_ATHENS: '#e8eaed',
    GREY_LIGHTEST: '#f7f7f7',
    GREY_LIGHTER: '#e5ecf3',
    GREY_LIGHT: '#d8d8d8',
    GREY_TEXT: '#828282',

    // ORANGE
    ORANGE: '#FA873F',

    // GREEN
    GREEN: '#B3DD87',

    // RED
    RED: '#EF4747',

    // PURPLE
    PURPLE: '#A682FF'
  },
  fontSizes: ['0.625rem', '0.75rem', '1rem', '1.125rem', '1.25rem', '2.5rem'],
  lineHeights: ['16px', '24px', '48px'],
  text: {
    heading: {
      fontFamily: 'body',
      fontSize: 5,
      lineHeight: 3,
      fontWeight: 700,
      color: 'DARK_BLUE'
    },
    subHeading: {
      fontFamily: 'body',
      fontSize: 4,
      lineHeight: 2,
      color: 'DARK_BLUE',
      fontWeight: 700
    },
    body: {
      fontFamily: 'body',
      fontSize: 2,
      lineHeight: 1,
      color: 'BODY'
    },
    code: {
      fontFamily: 'mono',
      fontSize: 2,
      lineHeight: 1,
      color: 'BODY'
    },
    muted: {
      fontFamily: 'body',
      fontSize: 2,
      lineHeight: 1,
      color: 'BLUE_GREY'
    },
    error: {
      fontFamily: 'body',
      fontSize: 2,
      lineHeight: 1,
      color: 'RED'
    }
  },
  variants: {
    ...FLEX_VARIANTS,
    avatar: {
      borderRadius: '50%'
    }
  }
};
