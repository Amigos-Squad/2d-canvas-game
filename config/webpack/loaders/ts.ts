export const TS_LOADER = {
  client: {
    test: /\.(ts|tsx)$/i,
    exclude: /node_modules/,
    use: 'ts-loader',
  },
  server: {
    test: /\.(ts|tsx)$/i,
    exclude: /node_modules/,
    use: 'ts-loader',
  },
};
