# Contributing

## Requirements

- Node
- Yarn\*

<sub>\*npm is NOT supported for package management. MyCrypto uses yarn.lock to ensure sub-dependency versions are pinned, so yarn is required to install node_modules</sub>

## Contributing

All code must follow the folder structure and be formatted with [Prettier](https://prettier.io/). New components must include Storybook stories and integration tests with Jest and react-testing-library.

### Scripts

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

#### Tests

```bash
# run tests with Jest
yarn test
```

## Folder structure

```
├── __mocks__: Mocked modules for Jest (avoid if possible, integration testing with runtime dependencies is preferred)
├── dist
│   └── index.js: ES module bundle for publishing to npm
├── src: Components organized into atoms, molecules, and organisms (see Atomic Design)
│   ├── atoms
│   │   ├── Button
│   │   │   ├── Button.css: CSS styles
│   │   │   ├── Button.js: React component
│   │   │   ├── Button.story.js: Storybook story
│   │   │   ├── Button.test.js: Jest test
│   │   │   └── index.js: Component re-exports
│   │   └── index.js: Component group re-exports
│   ├── index.js: Entry point, should re-export all components
│   ├── molecules
│   ├── organisms
│   └── setupTests.js: Jest setup
└── storybook-static: Statically built Storybook, serving as a public demo, styleguide, and documentation
```
