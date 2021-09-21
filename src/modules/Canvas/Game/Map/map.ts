import { Game } from '..';

export const drawMap = (ctx: CanvasRenderingContext2D, game: Game) => {
  for (let y = 0; y < game.gameMap.length; y += 1) {
    for (let x = 0; x < game.gameMap[y].length; x += 1) {
      game.gameMap[y][x].update(x, y, game.cellSize);
      game.gameMap[y][x].draw(ctx);
    }
  }
};
