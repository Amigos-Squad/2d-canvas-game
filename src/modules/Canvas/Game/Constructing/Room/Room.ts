import { CellType } from '../../Map';

export abstract class Room {
  abstract key: string;

  abstract cellType: CellType;

  abstract widthCell: number;
}
