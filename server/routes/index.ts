import express from 'express';
import { forumRouter } from './forum.route';

const indexRouter = express.Router();

indexRouter.use('/forum', forumRouter);

export { indexRouter };
