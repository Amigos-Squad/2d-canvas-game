import { NextFunction, Request, Response } from 'express';
import { renderHTML } from './render';

export const renderMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  /* const location = req.url; */

  res.send(renderHTML());

  next();
};
