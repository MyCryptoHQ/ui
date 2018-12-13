# [MyCrypto UI](https://mycryptobuilds.com/storybook)

[![Build Status](https://travis-ci.org/MyCryptoHQ/ui.svg?branch=master)](https://travis-ci.org/MyCryptoHQ/ui)
[![Coverage Status](https://coveralls.io/repos/github/MyCryptoHQ/ui/badge.svg?branch=master)](https://coveralls.io/github/MyCryptoHQ/ui?branch=master)

The shared UI component library used across all MyCrypto products.

Implemented with [React](https://github.com/facebook/react) components following [Atomic Design](http://atomicdesign.bradfrost.com/).

## Installation

Requires a bundler with ES module support and webfont extraction (`.woff` and `.woff2`).

`yarn add @mycrypto/ui styled-components`

Wrap your app in a `ThemeProvider` to use the included `light` and `dark` themes.

```js
import { Button, light } from '@mycrypto/ui';
import React from 'react';
import { ThemeProvider } from 'styled-components';

<ThemeProvider theme={light}>
  <Button>Button</Button>
</ThemeProvider>;
```
