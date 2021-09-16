const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const { IS_PROD } = require('./const');

const PROD = {
  splitChunks: {
    chunks: 'all',
  },
  minimizer: [new CssMinimizerPlugin(), new TerserWebpackPlugin()],
};

const DEV = {
  splitChunks: {
    chunks: 'all',
  },
};

exports.OPTIMIZATION = IS_PROD ? PROD : DEV;
