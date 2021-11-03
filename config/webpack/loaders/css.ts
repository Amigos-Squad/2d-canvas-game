import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ENVS } from '../assets/env';

const { __DEV__ } = ENVS;

export const CSS_LOADER = __DEV__
  ? {
      client: {
        test: /\.(css|scss|sass)$/i,
        use: ['css-hot-loader', 'style-loader', 'css-loader', 'sass-loader'],
      },
      server: {
        test: /\.css$/,
        loader: 'null-loader',
      },
    }
  : {
      client: {
        test: /\.(css|scss|sass)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      server: {
        test: /\.css$/,
        loader: 'null-loader',
      },
    };
