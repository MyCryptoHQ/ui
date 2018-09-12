# MyCrypto UI

[React](https://github.com/facebook/react) components for [MyCrypto](https://github.com/MyCryptoHQ/MyCrypto), following [Atomic Design](http://atomicdesign.bradfrost.com/).

## Requirements

- Node
- Yarn\*

<sub>\*npm is NOT supported for package management. MyCrypto uses yarn.lock to ensure sub-dependency versions are pinned, so yarn is required to install node_modules</sub>

## Contributing

After `yarn`ing all dependencies you can run various commands depending on what you want to do:

#### Development

```bash
# run Storybook in dev mode in browser, rebuild on file changes
yarn start
```

#### Build Releases

```bash
# builds the Storybook and npm/Yarn package
yarn build
```

This build is output to a folder in `dist/`.

#### Tests

```bash
# run tests with Jest
yarn test
```
