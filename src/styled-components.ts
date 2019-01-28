import * as styledComponents from 'styled-components';

import Theme from './Theme';

const {
  default: styled,
  createGlobalStyle,
  css,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>;

export { createGlobalStyle, css, keyframes, ThemeProvider };
export default styled;
