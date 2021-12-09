import { Sequelize } from 'sequelize-typescript';
import { Post, Topic } from './forum';
import { User } from './user.model';

const { POSTGRES_HOST, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB } =
  process.env;

export const sequelize = new Sequelize({
  host: POSTGRES_HOST || 'localhost',
  port: 5432,
  username: POSTGRES_USER || 'postgres',
  password: POSTGRES_PASSWORD || 'db_password',
  database: POSTGRES_DB || 'DWH',
  models: [Topic, Post, User],
  dialect: 'postgres',
});
