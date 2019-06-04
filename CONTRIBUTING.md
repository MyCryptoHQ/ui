# Contributing

## Development / Build Requirements

- Node 8.16.0\*
- Yarn >= 1.7.0\*\*

<sub>\*Versions between 8.16.0 and ^11.0.0 should work fine, but may cause inconsistencies. It's suggested you run 8.16.0 using `nvm`.</sub>
<br/>
<sub>\*\*npm is NOT supported for package management. MyCrypto uses yarn.lock to ensure sub-dependency versions are pinned, so yarn is required to install node_modules</sub>

## Contributing

All code must follow the folder structure and be formatted with [Prettier](https://prettier.io/). New components must include Storybook stories and integration tests with Jest and react-testing-library.

### Scripts

| Command      | Description                                                   |
| ------------ | ------------------------------------------------------------- |
| `yarn`       | Install all dependencies, build package to dist               |
| `yarn start` | Run Storybook in dev mode in browser, rebuild on file changes |
| `yarn test`  | Run tests with Jest                                           |
| `yarn watch` | Build package to dist, rebuild on file changes                |

### Developing with another package

Follow these steps if you want to make changes in UI and use them in another package locally.

1. If you use a version manager or multiple Node installations, make sure to use the same version for both UI and the other package. If you're developing UI with the MyCrypto app, it's easiest to use Node 8.16.0 for both.
2. Run `yarn link` in UI's directory to allow other packages to link to it globally.
3. Run `yarn link @mycrypto/ui` in the other package's directory to link it to UI's directory.
4. In UI's directory, build package once with `yarn` or continue editing and rebuilding with `yarn watch`. Repeat each time you develop.
5. Use `yarn unlink` to go back to using release vesions of UI (recommended in production).

### Visual Studio Code extensions

If you're using Code, the following extensions are recommended based on our tooling:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [styled-components](https://marketplace.visualstudio.com/items?itemName=mf.vscode-styled-components)
- [stylelint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint)
- [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)

## Folder structure

```
├── __mocks__: Mocked modules for Jest (avoid if possible, integration testing with runtime dependencies is preferred)
├── dist
│   └── index.js: ES module bundle for publishing to npm
├── src: Components organized into atoms, molecules, and organisms (see Atomic Design)
│   ├── atoms: Cannot implement any other components (with <Typography /> as an exception); Mainly acts as a styling wrapper for basic HTML elements
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
