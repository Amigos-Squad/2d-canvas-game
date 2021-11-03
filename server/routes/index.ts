import { Request, Response, Router } from 'express';
import { renderHTML } from '../middlewares/render/render';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send(renderHTML());
});

export { router };
