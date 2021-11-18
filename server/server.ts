import express, { Express } from 'express';
import { resolve } from 'path';
import { Configuration } from 'webpack';
import cookieParser from 'cookie-parser';
import { getWebpackMiddlewares, serverRenderMiddleware } from './middlewares';
import { ENVS, clientConfig } from '../config';
import { enumToArray, ROUTES } from '@/utils';
import { indexRouter } from './routes';
import { sequelize } from './models';

const PORT = process.env.PORT || 3000;


const initServer = async () => {
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
    .use('/api/v1', indexRouter)
    .use(enumToArray(ROUTES), serverRenderMiddleware);

  await sequelize.sync({ force: true });

  server.listen(PORT, () => {
    // eslint-disable-next-line
    console.log(`Server started on PORT:${PORT}`);
  });
};

export { initServer };
