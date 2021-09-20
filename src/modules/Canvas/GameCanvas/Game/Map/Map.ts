import { GameMap } from '.';
import { Cell } from './Cell';
import { CELLS_MAP, GAME_CONST } from './const';

export const drawMap = (ctx: CanvasRenderingContext2D, gameMap: GameMap) => {
  const { width } = ctx.canvas;
  const cellSize = Math.round(width / GAME_CONST.CELL_IN_PAGE);

  for (let y = 0; y < gameMap.length; y += 1) {
    for (let x = 0; x < gameMap[y].length; x += 1) {
      const cell = new Cell(
        x * cellSize,
        y * cellSize,
        cellSize,
        CELLS_MAP[gameMap[y][x]]
      );
      cell.draw(ctx);
    }
  }
};
