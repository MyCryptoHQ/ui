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
  'horizontal-start': {
    display: 'flex',
    flexDirection: 'row',
    ...FLEX_RECIPES.align
  },
  'horizontal-center': {
    display: 'flex',
    flexDirection: 'row',
    ...FLEX_RECIPES.center
  },
  'vertical-start': {
    display: 'flex',
    flexDirection: 'column',
    ...FLEX_RECIPES.align
  },
  'vertical-center': {
    display: 'flex',
    flexDirection: 'column',
    ...FLEX_RECIPES.center
  }
};

const COLORS = {
  BODY: '#424242',
  DARK_BLUE: '#1c314e',
  DARKER_BLUE: '#006077',
  BLUE_GREY: '#B5BFC7',
  RED: '#EF4747',
  WHITE: '#ffffff'
};

export const theme: DefaultTheme = {
  breakpoints: ['512px', '850px', '1080px', '1280px', '1440px', '1600px'],
  fonts: {
    body: 'Lato, sans-serif',
    mono: 'Roboto Mono, Menlo, Monaco, Consolas, Courier New, monospace'
  },
  colors: {
    primary: '#007896',
    secondary: '#163150',

    button: {
      shadow: '#59a8bc',
      primary: {
        hover: COLORS.DARKER_BLUE
      },
      secondary: {
        hover: COLORS.DARK_BLUE
      },
      inverted: {
        hover: '#007896'
      }
    },

    text: {
      primary: COLORS.BODY,
      secondary: COLORS.DARK_BLUE,
      discrete: COLORS.BLUE_GREY,
      warning: COLORS.RED,
      inverted: COLORS.WHITE
    }
  },
  fontSizes: ['0.625rem', '0.75rem', '1rem', '1.125rem', '1.25rem', '2.5rem'],
  lineHeights: ['1rem', '1.5rem', '3rem'],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  radii: {
    small: '3px',
    avatar: '50%'
  },
  text: {
    heading: {
      fontFamily: 'body',
      fontSize: 5,
      lineHeight: 3,
      fontWeight: 'heading',
      color: 'text.secondary'
    },
    subHeading: {
      fontFamily: 'body',
      fontSize: 4,
      lineHeight: 2,
      color: 'text.secondary',
      fontWeight: 'heading'
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
  buttons: {
    primary: {
      cursor: 'pointer',
      backgroundColor: 'primary',
      color: 'text.inverted',
      fontSize: 2,
      fontFamily: 'body',
      padding: '0.75rem 2.25rem',
      borderRadius: 'small',
      transition: 'color 0.12s ease 0s, background 0.12s ease 0s, box-shadow 0.12s ease 0s',
      '&:hover': {
        backgroundColor: 'button.primary.hover'
      },
      '&:focus': {
        boxShadow: '#59a8bc 0 0 0 0.25rem',
        outline: 'none'
      }
    },
    secondary: {
      cursor: 'pointer',
      backgroundColor: 'secondary',
      color: 'text.inverted',
      fontSize: 2,
      fontFamily: 'body',
      padding: '0.75rem 2.25rem',
      borderRadius: 'small',
      transition: 'color 0.12s ease 0s, background 0.12s ease 0s, box-shadow 0.12s ease 0s',
      '&:hover': {
        backgroundColor: 'button.primary.hover'
      },
      '&:focus': {
        boxShadow: '#59a8bc 0 0 0 0.25rem',
        outline: 'none'
      }
    },
    inverted: {
      cursor: 'pointer',
      background: 'none',
      color: 'primary',
      fontSize: 2,
      fontFamily: 'body',
      padding: '0.625rem 2.125rem',
      borderRadius: 'small',
      borderWidth: '0.125rem',
      borderStyle: 'solid',
      borderColor: 'primary',
      transition: 'color 0.12s ease 0s, background 0.12s ease 0s, box-shadow 0.12s ease 0s',
      '&:hover': {
        backgroundColor: 'button.inverted.hover',
        color: 'text.inverted'
      },
      '&:focus': {
        boxShadow: '#59a8bc 0 0 0 0.25rem',
        outline: 'none'
      }
    }
  },
  variants: {
    ...FLEX_VARIANTS,
    avatar: {
      borderRadius: 'avatar'
    }
  }
};
