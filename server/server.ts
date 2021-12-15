import express, { Express } from 'express';
import { resolve } from 'path';
import { Configuration } from 'webpack';
import cookieParser from 'cookie-parser';
import { authMiddleware } from './middlewares/authMiddleware';
import { getWebpackMiddlewares, serverRenderMiddleware } from './middlewares';
import { ENVS, clientConfig } from '../config';
import { enumToArray, ROUTES } from '@/utils';
import { indexRouter } from './routes';
import { sequelize } from './models';
import session from 'express-session';

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
    .use(session({ secret: 'acapulco', cookie: { maxAge: 60000 }}))
    .use(express.static(resolve(__dirname, '../dist')))
    .use(authMiddleware)
    .use('/api/v1', indexRouter)
    .use(enumToArray(ROUTES), serverRenderMiddleware);

  await sequelize.sync({ force: true });

  server.listen(PORT, () => {
    // eslint-disable-next-line
    console.log(`Server started on PORT:${PORT}`);
  });
};

export { initServer };
