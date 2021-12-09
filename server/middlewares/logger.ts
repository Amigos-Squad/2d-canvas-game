import { NextFunction, Request, Response } from 'express';

export const logger = () => {
  return (req: Request, _res: Response, next: NextFunction) => {
    (req as any).logger = () => {
      // eslint-disable-next-line
      console.log(req);
    };
    next();
  };
};
