import { CELLS } from '../../Map';
import { Room } from './Room';

export class Ladder extends Room {
  key = '27829c7b-d86b-4c64-a09a-1181b8fff3bd';

  cellType = CELLS.ladder;

  widthCell = 2;
}
