import { NextFunction, Request, Response } from 'express';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (!req.session) {
    res.status(401).send();
  }
  next();
}