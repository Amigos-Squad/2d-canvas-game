const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const { FILENAME, IS_PROD } = require('./const');

const PLUG = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: './public/index.html',
    title: '2d-canvas-game',
    minify: {
      collapseWhitespace: IS_PROD,
    },
  }),
  new MiniCssExtractPlugin({
    filename: `css/${FILENAME('.css', IS_PROD)}`,
  }),
];

exports.PLUGINS = IS_PROD ? [...PLUG, new ProgressBarPlugin()] : PLUG;
