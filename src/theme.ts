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
  WHITE: '#ffffff',
  GREY_LIGHT: '#d8d8d8',
  GREY_ATHENS: '#e8eaed',
  GREY_SECONDARY: '#b5bfc7'
};

const breakpoints: string[] & {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  xxl?: string;
} = ['512px', '850px', '1080px', '1280px', '1441px', '1920px'];

breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];
breakpoints.xxl = breakpoints[5];

export type Theme = typeof theme;

export const theme = {
  breakpoints,
  fonts: {
    body: 'Lato, sans-serif',
    mono: 'Roboto Mono, Menlo, Monaco, Consolas, Courier New, monospace'
  },
  colors: {
    primary: '#007896',
    secondary: '#163150',

    link: '#55B6E2',

    spinner: '#a086f7',
    loadingSpinner: '#7c9ec3',

    button: {
      primary: {
        hover: COLORS.DARKER_BLUE,
        disabled: COLORS.GREY_LIGHT
      },
      secondary: {
        hover: COLORS.DARK_BLUE,
        disabled: COLORS.GREY_LIGHT
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
      inverted: COLORS.WHITE,
      footer: COLORS.WHITE
    },

    badge: {
      muted: '#F6F8FA'
    },

    header: {
      background: COLORS.WHITE
    },

    footer: {
      muted: COLORS.GREY_SECONDARY,
      donate: '#3f566f',
      border: '#4d6075',
      separator: '#e8e8e8'
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
    input: '2px',
    small: '3px',
    large: '6px',
    avatar: '50%',
    banner: '3px',
    badge: '4px'
  },
  forms: {
    label: {
      marginBottom: '6px'
    },
    input: {
      fontFamily: 'body',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: COLORS.GREY_ATHENS,
      boxShadow: 'input',
      borderRadius: 'input',
      '&:focus': {
        outline: 'none'
      }
    },
    textarea: {
      fontFamily: 'body',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: COLORS.GREY_ATHENS,
      boxShadow: 'input',
      borderRadius: 'input',
      '&:focus': {
        outline: 'none'
      }
    },
    error: {
      fontFamily: 'body',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: COLORS.RED,
      boxShadow: 'input',
      borderRadius: 'input',
      '&:focus': {
        outline: 'none'
      }
    },
    none: {
      margin: '0',
      padding: '0',
      border: 'none'
    }
  },
  shadows: {
    button: '#59a8bc 0 0 0 0.25rem',
    input: '0px 1px 1px rgba(232, 234, 237, 0.5), inset 0px 1px 3px rgba(232, 234, 237, 0.5)'
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
    },
    small: {
      fontFamily: 'body',
      fontSize: '10px',
      lineHeight: '12px',
      color: 'text.primary'
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
        boxShadow: 'button',
        outline: 'none'
      },
      '&:disabled': {
        cursor: 'default',
        backgroundColor: 'button.primary.disabled'
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
        boxShadow: 'button',
        outline: 'none'
      },
      '&:disabled': {
        cursor: 'default',
        backgroundColor: 'button.primary.disabled'
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
        boxShadow: 'button',
        outline: 'none'
      },
      '&:disabled': {
        cursor: 'default',
        borderColor: 'button.primary.disabled',
        color: 'button.primary.disabled',
        '&:hover': {
          background: 'none',
          color: 'button.primary.disabled'
        }
      }
    }
  },
  variants: {
    ...FLEX_VARIANTS,
    avatar: {
      borderRadius: 'avatar'
    },
    clear: {
      bg: 'DEFAULT_BACKGROUND',
      boxShadow: 'none',
      borderColor: 'none',
      padding: '24px',
      paddingTop: '0'
    },
    badge: {
      borderRadius: 'badge',
      bg: 'PURPLE',
      py: '1',
      px: '2',
      color: 'WHITE',
      fontSize: '14px',
      lineHeight: '20px',
      nonce: {
        bg: 'badge.muted'
      }
    },
    banner: {
      success: {
        background: '#f4faed',
        color: '#b4dd88'
      },
      info: {
        background: '#f4f6f7',
        color: '#b6c0c8'
      },
      action: {
        background: '#f2ecff',
        color: '#a682ff'
      },
      warning: {
        background: '#feede2',
        color: '#fa873f'
      },
      error: {
        background: '#fde4e4',
        color: '#ef4747'
      },
      clear: {
        background: 'none',
        color: '#a682ff'
      }
    },
    panel: {
      default: {
        background: COLORS.WHITE
      },
      muted: {
        background: '#F6F8FA'
      }
    }
  }
};
