import { join } from 'path';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import { Entry } from 'webpack';
import webpackNodeExternals from 'webpack-node-externals';

import { DIST_DIR, ROOT_DIR_FROM_WEBPACK, SERVER_DIR } from '../assets/dir';
import { CSS_LOADER, FILE_LOADER, TS_LOADER } from '../loaders';
import { ENVS } from '../assets/env';

const { __DEV__ } = ENVS;

export const serverConfig = {
  name: 'server',
  target: 'node',
  node: { __dirname: false },
  devtool: 'source-map',
  entry: join(SERVER_DIR, 'server') as Entry,
  mode: __DEV__ ? 'development' : 'production',
  externals: [
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

  optimization: {
    nodeEnv: false,
  },
};
