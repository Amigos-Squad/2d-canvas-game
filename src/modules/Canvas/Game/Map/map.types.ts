import { Cell } from './Cell';

export type CellMap = Record<number, CellType>;

export type Cells = {
  blocked: CellType;
  ground: CellType;
  buildPlace: CellType;
  removeRoom: CellType;
  baseRoom: CellType;
  ladder: CellType;
  kitchen: CellType;
};

export type CellType = {
  background: string;
  cellNum: number;
  isRoom?: boolean;
  image: string;
};

export type RawGameMap = number[][];

export type GameMap = Cell[][];
