import express from 'express';
import { forumController } from 'server/controllers';

const forumRouter = express.Router();

forumRouter.get('/', forumController.getTopics);
forumRouter.get('/:id', forumController.getPosts);
forumRouter.post('/', forumController.createTopic);
forumRouter.post('/:id', forumController.addPost);

export { forumRouter };
