module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      {
        loader: 'ts-loader',
        options: { compilerOptions: { declaration: false } },
      },
      'react-docgen-typescript-loader',
    ],
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
