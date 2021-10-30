import { config as envConfig } from 'dotenv';
import { join, resolve } from 'path';
import webpack from 'webpack';
import webpackNodeExternals from 'webpack-node-externals';

import { ROOT_DIR_FROM_WEBPACK } from '../assets/dir';
import { ENVS } from '../assets/env';

envConfig();

const { __DEV__ } = ENVS;

export const initServerConfig =
  ({ entry, lang }) =>
  (webpackConfig) => {
    Object.assign(webpackConfig, {
      name: `ssr_bundles_${lang}`,
      target: 'node',
      devtool: 'source-map',
      entry: entry.app,
      node: { __dirname: false },
      mode: __DEV__ ? 'development' : 'production',
      externals: [
        webpackNodeExternals({
          allowlist: [/\.(?!(?:jsx?|json)$).{1,5}$/i],
        }),
      ],

      resolve: {
        extensions: ['.js', '.ts', '.tsx', '.json'],
      },

      output: {
        filename: `ssr.bundles.${lang}.js`,
        libraryTarget: 'commonjs2',
        path: join(ROOT_DIR_FROM_WEBPACK, 'dist'),
      },

      module: { rules: [] },

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
      performance: {
        hints: false,
      },

      plugins: [
        new webpack.ProvidePlugin({
          window: resolve(join(__dirname, '../mock/window.mock')),
          localStorage: resolve(join(__dirname, '../mock/localStorage.mock')),
          document: 'global/document',
        }),
      ],
    });

    return webpackConfig;
  };
