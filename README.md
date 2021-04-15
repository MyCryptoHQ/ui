# [MyCrypto UI](https://mycryptobuilds.com/ui)

[![Build Status](https://github.com/MyCryptoHQ/ui/workflows/CI/badge.svg)](https://github.com/MyCryptoHQ/ui/actions)
[![Codecov](https://codecov.io/gh/MyCryptoHQ/ui/branch/master/graph/badge.svg)](https://app.codecov.io/gh/MyCryptoHQ/ui)

The shared UI component library used across all MyCrypto products.

Implemented with [React](https://github.com/facebook/react) components following [Atomic Design](http://atomicdesign.bradfrost.com/).

## Installation

Requires a bundler with ES module support.

`yarn add @mycrypto/ui styled-components`

Wrap your app in a `ThemeProvider` to use the included theme.

```js
import { Body, theme } from '@mycrypto/ui';
import { ThemeProvider } from 'styled-components';

<ThemeProvider theme={theme}>
  <Body>Hello, world!</Body>
</ThemeProvider>;
```

## Typeface

Our designs use the [Lato](http://www.latofonts.com/) and [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono) typefaces, which you will probably need to install in your app or site. There are several options depending on your requirements and build tooling:

- Use [@fontsource/lato](https://www.npmjs.com/package/@fontsource/lato) and [@fontsource/roboto-mono](https://www.npmjs.com/package/@fontsource/roboto-mono) to self-host your typefaces when using npm/yarn with Webpack or any other build tool with CSS and font loaders ([instructions](https://github.com/fontsource/fontsource#installation))
- Use [Google Fonts](https://fonts.google.com/?selection.family=Lato:400,700,900|Roboto+Mono) to load the fonts from a CDN (over the Internet) without any configuration (note that [Google collects some usage data](https://developers.google.com/fonts/faq#what_does_using_the_google_fonts_api_mean_for_the_privacy_of_my_users))
- Download [Lato](http://www.latofonts.com/) and [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono) directly if you need more control over font loading or if you only plan on using the fonts locally

## Development

You can launch the storybook simply by running `yarn start`. To test changes inside other projects directly, you can use `yarn link`:

```
# Inside the UI folder
yarn link
yarn build

# Inside your own project
yarn link @mycrypto/ui
```

## Deployment

The npm package is automatically updated by GitHub CI whenever the version is changed inside `package.json`.
