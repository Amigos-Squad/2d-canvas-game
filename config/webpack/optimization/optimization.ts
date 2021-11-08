import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import TerserWebpackPlugin from 'terser-webpack-plugin';
import { ENVS } from '../assets/env';

const { __DEV__ } = ENVS;

export const OPTIMIZATION = __DEV__
  ? {
      splitChunks: {
        chunks: 'all',
      },
    }
  : {
      splitChunks: {
        chunks: 'all',
      },
      minimizer: [new CssMinimizerPlugin(), new TerserWebpackPlugin()],
    };
