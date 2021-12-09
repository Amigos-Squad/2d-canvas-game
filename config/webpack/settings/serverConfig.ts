import { join, resolve } from 'path';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import { Entry, ProvidePlugin } from 'webpack';
import webpackNodeExternals from 'webpack-node-externals';

import { DIST_DIR, ROOT_DIR_FROM_WEBPACK, SERVER_DIR } from '../assets/dir';
import { CSS_LOADER, FILE_LOADER, TS_LOADER } from '../loaders';
import { ENVS } from '../assets/env';

const { __DEV__ } = ENVS;

export const serverConfig = {
  name: 'server',
  target: 'node',
  externalsPresets: { node: true },
  node: { __dirname: false },
  devtool: 'source-map',
  entry: join(SERVER_DIR, 'server') as Entry,
  mode: __DEV__ ? 'development' : 'production',
  externals: [
    '@loadable/component',
    webpackNodeExternals({ allowlist: [/\.(?!(?:tsx?|json)$).{1,5}$/i] }),
  ],
  resolve: {
    modules: [ROOT_DIR_FROM_WEBPACK, 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: './tsconfig.json',
      }),
    ],
  },

  output: {
    filename: 'server.js',
    libraryTarget: 'commonjs2',
    publicPath: '/',
    path: DIST_DIR,
  },

  module: {
    rules: [TS_LOADER.server, FILE_LOADER.server, CSS_LOADER.server],
  },

  performance: {
    hints: __DEV__ ? false : 'warning',
  },

  stats: {
    all: undefined,
    builtAt: !__DEV__,
    chunks: !__DEV__,
    assets: !__DEV__,
    errors: true,
    warnings: true,
    outputPath: true,
    timings: true,
  },

  plugins: [
    new ProvidePlugin({
      window: resolve(join(__dirname, '../mock/window.mock')),
      localStorage: resolve(join(__dirname, '../mock/localStorage.mock')),
    }),
  ],

  optimization: {},
};
