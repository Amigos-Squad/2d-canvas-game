import express, { Express } from 'express';
import { resolve } from 'path';
import { Configuration } from 'webpack';
import { getWebpackMiddlewares, serverRenderMiddleware } from './middlewares';
import { ENVS, clientConfig } from '../config';

const server: Express = express();

server.use(express.static(resolve(__dirname, '../dist')));

if (ENVS.__DEV__) {
  server.get(
    '/*',
    [...getWebpackMiddlewares(clientConfig as Configuration)],
    serverRenderMiddleware
  );
} else {
  server.get('/*', serverRenderMiddleware);
}

export { server };
