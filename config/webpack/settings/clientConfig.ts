import { Entry } from 'webpack';
import { join } from 'path';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import { CLIENT_DIR, DIST_DIR, ROOT_DIR_FROM_WEBPACK } from '../assets/dir';
import { ENVS } from '../assets/env';
import { GET_PLUGINS } from '../plugins/plugins';
import { CSS_LOADER, FILE_LOADER, TS_LOADER } from '../loaders';
import { OPTIMIZATION } from '../optimization/optimization';

const { __DEV__ } = ENVS;

export const clientConfig = {
  name: `client`,
  target: 'web',
  devtool: 'source-map',
  entry: {
    index: [
      __DEV__ && 'react-hot-loader/patch',
      __DEV__ && 'webpack-hot-middleware/client',
      __DEV__ && 'css-hot-loader/hotModuleReplacement',
      join(CLIENT_DIR, 'index'),
    ].filter(Boolean) as string[],
  } as Entry,
  mode: __DEV__ ? 'development' : 'production',
  output: {
    path: DIST_DIR,
    filename: `[name].js`,
    publicPath: '/',
  },
  resolve: {
    modules: [ROOT_DIR_FROM_WEBPACK, 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: './tsconfig.json',
      }),
    ],
  },
  module: {
    rules: [TS_LOADER.client, FILE_LOADER.client, CSS_LOADER.client],
  },
  performance: {
    hints: __DEV__ ? false : 'warning',
  },
  plugins: GET_PLUGINS(),
  optimization: OPTIMIZATION,
};
