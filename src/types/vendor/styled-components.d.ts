import 'styled-components';

declare module 'styled-components' {
  interface ThemeValue {
    [key: string]: string | string[] | number | number[] | ThemeValue;
  }

  export type DefaultTheme = ThemeValue;
}
