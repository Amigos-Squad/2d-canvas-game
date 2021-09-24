import { Citizen } from '../Citizens';
import { GAME_CONST } from '../const';
import { BASE_GAME_MAP, Cell, CELLS_MAP, GameMap, RawGameMap } from '../Map';
import { Scene } from './Scene';

export class Den extends Scene {
  private rawGameMap: RawGameMap = BASE_GAME_MAP;

  gameMap: GameMap = [];

  citizens: Citizen[] = [];

  loadMap() {
    this.gameMap = this.rawGameMap.map((y) =>
      y.map((x) => new Cell(this.game.screen.context, CELLS_MAP[x]))
    );
  }

  loadCitizens() {
    const { context, cellSize } = this.game.screen;
    this.citizens = new Array(GAME_CONST.START_CITIZEN.COUNT)
      .fill(0)
      .map(
        (_, i) =>
          new Citizen(
            context,
            GAME_CONST.START_CITIZEN.X + i * 2,
            GAME_CONST.START_CITIZEN.Y,
            cellSize
          )
      );
  }

  init() {
    this.loadMap();
    this.loadCitizens();
  }

  render() {
    this.drawMap();
    this.drawCitizens();
  }

  drawMap() {
    for (let y = 0; y < this.gameMap.length; y += 1) {
      for (let x = 0; x < this.gameMap[y].length; x += 1) {
        this.gameMap[y][x].update(x, y, this.game.screen.cellSize);
        this.gameMap[y][x].draw();
      }
    }
  }

  drawCitizens() {
    for (let i = 0; i < this.citizens.length; i += 1) {
      if (this.citizens[i].health === 0) {
        this.citizens.splice(i, 1);
        this.game.statuses.changeCitizens(this.citizens.length);
      } else {
        this.citizens[i].update(
          this.game.frameCount,
          this.game.screen.cellSize
        );
        this.citizens[i].draw();
      }
    }
  }
}
