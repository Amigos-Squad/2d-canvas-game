import express, { Express } from 'express';

const server: Express = express();

server.disable('x-powered-by').enable('trust proxy');

export default server;
