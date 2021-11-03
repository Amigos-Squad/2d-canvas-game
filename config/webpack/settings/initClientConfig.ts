import { Entry } from 'webpack';
import { join } from 'path';
import { CLIENT_DIR, DIST_DIR } from '../assets/dir';
import { ENVS } from '../assets/env';
import { GET_PLUGINS } from '../plugins/plugins';
import { CSS_LOADER, FILE_LOADER, TS_LOADER } from '../loaders';
import { OPTIMIZATION } from '../optimization/optimization';

const { __DEV__ } = ENVS;

export const initClientConfig = {
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
    extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
    alias: {
      '@': CLIENT_DIR,
      scss: `${CLIENT_DIR}/styles`,
    },
  },
  module: {
    rules: [TS_LOADER.client, FILE_LOADER.client, CSS_LOADER.client],
  },
  plugins: GET_PLUGINS(),
  optimization: OPTIMIZATION,
};
