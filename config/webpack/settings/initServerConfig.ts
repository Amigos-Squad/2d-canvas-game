import { config as envConfig } from 'dotenv';
import { join, resolve } from 'path';
import webpack, { Entry } from 'webpack';
import webpackNodeExternals from 'webpack-node-externals';

import { CLIENT_DIR, ROOT_DIR_FROM_WEBPACK, SERVER_DIR } from '../assets/dir';
import { CSS_LOADER, FILE_LOADER, TS_LOADER } from '../loaders';
import { ENVS } from '../assets/env';

envConfig();

const { __DEV__ } = ENVS;

export const initServerConfig = {
  name: 'server',
  devtool: 'source-map',
  entry: join(SERVER_DIR, 'index') as Entry,
  node: { __dirname: false },
  mode: __DEV__ ? 'development' : 'production',
  externalsPresets: { node: true },
  externals: [
    webpackNodeExternals({ allowlist: [/\.(?!(?:tsx?|json)$).{1,5}$/i] }),
  ],
  resolve: {
    modules: [ROOT_DIR_FROM_WEBPACK, 'node_modules'],
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    alias: {
      '@': CLIENT_DIR,
      scss: `${CLIENT_DIR}/styles`,
    },
  },

  output: {
    filename: 'server.js',
    libraryTarget: 'commonjs2',
    publicPath: '/',
    path: `$${ROOT_DIR_FROM_WEBPACK}/distServer`,
  },

  module: {
    rules: [TS_LOADER.server, FILE_LOADER.server, CSS_LOADER.server],
  },

  performance: {
    hints: __DEV__ ? false : 'warning',
  },

  plugins: [
    new webpack.ProvidePlugin({
      window: resolve(join(__dirname, '../mock/window.mock')),
      localStorage: resolve(join(__dirname, '../mock/localStorage.mock')),
      document: 'global/document',
    }),
  ],

  optimization: {
    nodeEnv: false,
  },
};
