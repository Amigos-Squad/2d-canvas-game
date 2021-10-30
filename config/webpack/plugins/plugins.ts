import {
  DefinePlugin,
  ProgressPlugin,
  DllReferencePlugin,
  ContextReplacementPlugin,
  HotModuleReplacementPlugin,
} from 'webpack';
import { MiniCssExtractPlugin } from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import DuplicatePackageCheckerPlugin from 'duplicate-package-checker-webpack-plugin';
import CompressionWebpackPlugin from 'compression-webpack-plugin';
import ForkTsCheckerPlugin from 'fork-ts-checker-webpack-plugin';

import { ENVS, GLOBAL_ARGS } from '../assets/env';
import { ROOT_DIR } from '../assets/dir';

const { __DEV__, __PROD__ } = ENVS;

export const GET_PLUGINS = (shouldCheckTypes, vendorsManifest) => {
  const plugins = [
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
    new DllReferencePlugin({
      context: ROOT_DIR,
      manifest: vendorsManifest,
    }),
    new ProgressPlugin(),
    new DefinePlugin(GLOBAL_ARGS),
    new ContextReplacementPlugin(/moment[/\\]locale$/, /ru/),
  ];

  if (shouldCheckTypes) {
    plugins.push(new ForkTsCheckerPlugin());
  }

  if (__DEV__) {
    plugins.push(
      new HotModuleReplacementPlugin(),
      new CompressionWebpackPlugin({ minRatio: 1 })
    );
  }

  if (__PROD__) {
    plugins.push(new DuplicatePackageCheckerPlugin());
  }

  return plugins;
};
