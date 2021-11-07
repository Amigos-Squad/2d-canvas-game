import { RequestHandler } from 'express';
import webpack, { Configuration } from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';

export const getWebpackMiddlewares = (
  conf: Configuration
): RequestHandler[] => {
  const compiler = webpack({ ...conf, mode: 'development' });
  const webpackMiddleware = devMiddleware(compiler, {
    publicPath: '/',
    stats: {
      errorStack: true,
      colors: true,
      errorDetails: true,
    },
  });

  return [
    webpackMiddleware,
    hotMiddleware(compiler, { path: '/__webpack_hmr' }),
  ];
};
