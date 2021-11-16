import { Request, Response } from 'express';
import { generateError } from 'server/util';
import { Topic, Post } from 'server/models/forum';

class ForumController {
  getTopics = async (req: Request, res: Response) => {
    try {
      const response = await Topic.findAll();
      res.status(200).send(response);
    } catch (error: any) {
      res.status(500).send(generateError(error.message));
    }
  };

  getPosts = async (req: Request, res: Response) => {
    if (!req.query) {
      res.status(400).send(generateError());
    } else {
      const response = await Post.findAll({
        where: { topicId: req.query.topicId },
      });
      res.status(200).send(response);
    }
  };

  createTopic = async (req: Request, res: Response) => {
    if (!req.body) {
      res.status(400).send(generateError());
    } else {
      try {
        const topic: any = await Topic.create({ ...req.body, posts: 1 });
        await Post.create({
          message: req.body.message,
          topicId: topic.dataValues.id,
          author: topic.dataValues.author,
        });

        res.status(200).send();
      } catch (error: any) {
        res.status(500).send(generateError(error.message));
      }
    }
  };

  addPost = async (req: Request, res: Response) => {
    res.status(200).send('Yeap');
  };
}

export const forumController = new ForumController();
