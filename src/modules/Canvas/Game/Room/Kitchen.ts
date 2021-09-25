import { Room } from './Room';
import { createScheme } from './utils';

export class Ladder extends Room {
  scheme = createScheme(5, 1, 1);
}
