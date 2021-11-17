import express from 'express';
import { forumRouter } from './forum.route';
import { userRouter } from './user.route';

const indexRouter = express.Router();

indexRouter.use('/forum', forumRouter);
indexRouter.use('/user', userRouter);

export { indexRouter };
