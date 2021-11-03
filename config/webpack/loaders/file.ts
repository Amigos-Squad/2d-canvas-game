const fileRegex = /^(?!.*\.inline).*\.(svg|jpe?g|png|gif|eot|woff2?|ttf)$/;

export const FILE_LOADER = {
  client: {
    test: fileRegex,
    type: 'asset/resource',
  },
  server: {
    test: fileRegex,
    type: 'asset/resource',
  },
};
