import express, { Express } from 'express';
import { resolve } from 'path';
import { Configuration } from 'webpack';
import cookieParser from 'cookie-parser';
import { getWebpackMiddlewares, serverRenderMiddleware } from './middlewares';
import { ENVS, clientConfig } from '../config';
import { enumToArray, ROUTES } from '@/utils';

const server: Express = express();

if (ENVS.__DEV__) {
  server.use([...getWebpackMiddlewares(clientConfig as Configuration)]);
}
server
  .use(express.json())
  .use(
    express.urlencoded({
      extended: true,
    })
  )
  .use(cookieParser())
  .use(express.static(resolve(__dirname, '../dist')))
  .use(enumToArray(ROUTES), serverRenderMiddleware);

export { server };
