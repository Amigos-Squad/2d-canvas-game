export const TS_LOADER = {
  client: {
    test: /\.([jt])sx?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        plugins: ['react-hot-loader/babel'],
      },
    },
  },
  server: {
    test: /\.([jt])sx?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
    },
  },
};
