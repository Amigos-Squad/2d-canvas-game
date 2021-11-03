import {
  DefinePlugin,
  ProgressPlugin,
  ContextReplacementPlugin,
  HotModuleReplacementPlugin,
} from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import DuplicatePackageCheckerPlugin from 'duplicate-package-checker-webpack-plugin';
import CompressionWebpackPlugin from 'compression-webpack-plugin';

import { ENVS, GLOBAL_ARGS } from '../assets/env';

const { __DEV__, __PROD__ } = ENVS;

export const GET_PLUGINS = () => {
  const plugins = [
    new ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: '2d-canvas-game',
      minify: {
        collapseWhitespace: __PROD__,
      },
    }),
    new MiniCssExtractPlugin({
      filename: `css/[name].css`,
    }),

    new DefinePlugin(GLOBAL_ARGS),
    new ContextReplacementPlugin(/moment[/\\]locale$/, /ru/),
  ];

  if (__DEV__) {
    plugins.push(
      new HotModuleReplacementPlugin(),
      new CompressionWebpackPlugin({ minRatio: 1 })
    );
  }

  if (__PROD__) {
    plugins.push(new DuplicatePackageCheckerPlugin() as any);
  }

  return plugins;
};
