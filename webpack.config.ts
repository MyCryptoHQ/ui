/* eslint-disable */
import * as path from 'path';
import { Configuration } from 'webpack';
import * as merge from 'webpack-merge';
import nodeExternals from 'webpack-node-externals';

const isDevelopment = process.env.NODE_ENV !== 'production';
const sourcePath = path.resolve(__dirname, 'src');

const config: Configuration = {
  mode: isDevelopment ? 'development' : 'production',
  entry: {
    UI: path.resolve(sourcePath, 'index.ts'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: 'UI',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.svg'],
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              useCache: true,
              useBabel: true,
              babelCore: '@babel/core',
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
    ],
  },
  devtool: 'source-map',
};

const browser: Configuration = merge.smart(config, {
  target: 'web',
  output: {
    libraryTarget: 'umd',
    umdNamedDefine: true,
    filename: '[name].js',
  },
});

const node: Configuration = merge.smart(config, {
  target: 'node',
  externals: [nodeExternals()],
  output: {
    libraryTarget: 'commonjs2',
    filename: '[name].node.js',
  },
});

export default [browser, node];
