/* eslint-disable import/no-nodejs-modules */
import * as path from 'path';
import { Configuration } from 'webpack';

const isDevelopment = process.env.NODE_ENV !== 'production';
const sourcePath = path.resolve(__dirname, 'src');

const config: Configuration = {
  target: 'web',
  mode: isDevelopment ? 'development' : 'production',
  entry: {
    UI: path.resolve(sourcePath, 'index.ts'),
  },
  output: {
    library: 'UI',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
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

export default config;
