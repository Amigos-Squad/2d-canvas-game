import { Cell } from './Cell';

export type CellMap = Record<number, CellType>;

export type Cells = Record<string, CellType>;

export type CellType = {
  background: string;
};

export type RawGameMap = number[][];

export type GameMap = Cell[][];
