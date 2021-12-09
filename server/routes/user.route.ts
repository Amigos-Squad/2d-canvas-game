import express from 'express';
import { userController } from 'server/controllers/user.controller';

const userRouter = express.Router();

userRouter.post('/', userController.user);
userRouter.put('/', userController.update);
userRouter.put('/theme', userController.toggleTheme);

export { userRouter };
