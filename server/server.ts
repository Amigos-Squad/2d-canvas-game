import express, { Express, Request, Response } from 'express';
import { Configuration } from 'webpack';
import { webpackHot } from './middlewares';
import { ENVS, initClientConfig } from '../config';

const server: Express = express();

if (ENVS.__DEV__) {
  server.use(webpackHot(initClientConfig as Configuration));
}

server.get('/', (req: Request, res: Response) => {
  res.send(`<div>112</div>`);
});

export default server;
