import { Cell, CellType } from '../Map';

export const createScheme = (type: CellType, x: number, y: number) =>
  new Array(y).fill(0).map(() => new Array(x).fill(new Cell(type)));
