/* eslint-disable import/no-nodejs-modules */
import ForkTsCheckerPlugin from 'fork-ts-checker-webpack-plugin';
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
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    'styled-components': 'styled-components',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-typescript',
                '@babel/preset-react',
              ],
              plugins: ['@babel/plugin-proposal-class-properties'],
              cacheDirectory: true,
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
  plugins: [new ForkTsCheckerPlugin()],
};

export default config;
