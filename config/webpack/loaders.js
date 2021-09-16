const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { FILENAME, IS_PROD } = require('./const');

const PROD_CSS_LOADER = {
  test: /\.(css|scss|sass)$/i,
  use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
};

const DEV_CSS_LOADER = {
  test: /\.(css|scss|sass)$/i,
  use: ['style-loader', 'css-loader', 'sass-loader'],
};

const FILE_LOADER = {
  test: /\.(jpe?g|gif|svg)$/i,
  loader: 'file-loader',
  options: {
    name: `./img/${FILENAME('[ext]', IS_PROD)}`,
  },
};

const PNG_LOADER = {
  test: /\.png/,
  type: 'asset/resource',
};

const FONT_LOADER = {
  test: /\.(ttf|woff2)$/i,
  type: 'asset/resource',
};

const TS_LOADER = {
  test: /\.(ts|tsx)$/i,
  exclude: /node_modules/,
  use: 'ts-loader',
};

const PROD_LOADERS = [PROD_CSS_LOADER, TS_LOADER, FILE_LOADER, PNG_LOADER, FONT_LOADER];
const DEV_LOADERS = [DEV_CSS_LOADER, TS_LOADER, FILE_LOADER, PNG_LOADER, FONT_LOADER];

exports.LOADERS = IS_PROD ? PROD_LOADERS : DEV_LOADERS;
