export type CellMap = Record<number, CellType>;

export type Cells = Record<string, CellType>;

export type CellType = {
  background: string;
};

export type GameMap = number[][];
