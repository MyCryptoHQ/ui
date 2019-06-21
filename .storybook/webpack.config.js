module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          compilerOptions: { declaration: false, declarationMap: false },
          transpileOnly: true,
        },
      },
      {
        loader: 'react-docgen-typescript-loader',
        options: {
          propFilter: prop => !prop.parent,
        },
      },
    ],
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
