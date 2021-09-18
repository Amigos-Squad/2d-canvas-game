const { ROOT_FILE, BUILD_DIRECTORY, FILENAME, IS_PROD, SOURCE_DIRECTORY } = require('./const');

const { LOADERS } = require('./loaders');
const { OPTIMIZATION } = require('./optimization');
const { PLUGINS } = require('./plugins');

module.exports = () => ({
  entry: ROOT_FILE,
  output: {
    path: BUILD_DIRECTORY,
    filename: `js/${FILENAME('.js', IS_PROD)}`,
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 3000,
  },
  mode: 'development',
  devtool: false,
  plugins: PLUGINS,
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': SOURCE_DIRECTORY,
      scss: `${SOURCE_DIRECTORY}/styles`,
    },
  },
  module: {
    rules: LOADERS,
  },
  optimization: OPTIMIZATION,
});
