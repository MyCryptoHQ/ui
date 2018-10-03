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
│   ├── atoms: Cannot implement any other components (with <Text /> as an exception); Mainly acts as a styling wrapper for basic HTML elements
│   │   ├── Button
│   │   │   ├── Button.tsx: React component
│   │   │   ├── Button.story.tsx: Storybook story
│   │   │   ├── Button.test.tsx: Jest test
│   │   │   └── index.ts: Component re-exports
│   │   └── index.ts: Component group re-exports
│   ├── index.ts: Entry point, should re-export all components
│   ├── molecules: Combines atoms to form more complex components; Cannot use any native HTML elements
│   └── organisms: Combines molecules and atoms to form even more complex components
└── storybook-static: Statically built Storybook, serving as a public demo, styleguide, and documentation
```
