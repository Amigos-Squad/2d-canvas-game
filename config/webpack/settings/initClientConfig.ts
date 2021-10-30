import { join } from 'path';
import { CLIENT_DIR, DIST_DIR } from '../assets/dir';
import { ENVS } from '../assets/env';
import { GET_PLUGINS } from '../plugins/plugins';
import { CSS_LOADER, FILE_LOADER, TS_LOADER } from '../loaders';
import { OPTIMIZATION } from '../optimization/optimization';

const { __DEV__ } = ENVS;

const vendorsManifest = require(join(
  DIST_DIR,
  'webpack',
  'vendors-manifest.json'
).replace('dist/dist', 'dist'));

export const initClientConfig =
  ({ lang, index }) =>
  (webpackConfig) => {
    const shouldCheckTypes = index === 0;

    webpackConfig = Object.assign(webpackConfig, {
      name: `client_${lang}`,
      target: 'web',
      devtool: 'source-map',
      entry: {
        desktop: [
          __DEV__ && 'react-hot-loader/patch',
          __DEV__ && 'webpack-hot-middleware/client',
          __DEV__ && 'css-hot-loader/hotModuleReplacement',
          join(CLIENT_DIR, 'index'),
        ].filter(Boolean) as string[],
      },
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
      plugins: GET_PLUGINS(shouldCheckTypes, vendorsManifest),
      optimization: OPTIMIZATION,
    });

    return webpackConfig;
  };
