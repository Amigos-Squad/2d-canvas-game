import { User } from 'server/models/user.model';
import { Request, Response } from 'express';
import { generateError } from 'server/util';

class UserController {
  user = async (req: Request, res: Response) => {
    if (!req.body) {
      res.status(400).send(generateError());
    }

    try {
      const { id, name, avatar } = req.body;
      const [user] = await User.findOrCreate({
        where: { userId: id },
        defaults: { name, userId: id, avatar },
      });

      res.status(200).send(user);
    } catch (error: any) {
      res.status(500).send(generateError(error.message));
    }
  };

  update = async (req: Request, res: Response) => {
    if (!req.body) {
      res.status(400).send(generateError());
    }

    try {
      const { id, name, avatar } = req.body;

      const user = await User.upsert({
        where: { userId: id },
        name,
        avatar,
      });

      res.status(200).send(user);
    } catch (error: any) {
      res.status(500).send(generateError(error.message));
    }
  };
}

export const userController = new UserController();
