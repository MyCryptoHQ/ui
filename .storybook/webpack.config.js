module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          compilerOptions: { declaration: false, declarationMap: false },
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
