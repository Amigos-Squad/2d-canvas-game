import { BASE_CITIZEN, Citizen } from './Citizens';
import { GameConfig } from './Game.types';
import { BASE_GAME_MAP, Cell, CELLS_MAP, GameMap, RawGameMap } from './Map';

export class Game {
  private isItiated: boolean = false;

  private rawGameMap: RawGameMap = BASE_GAME_MAP;

  cellSize: number = 0;

  gameMap: GameMap = [];

  citizens: Citizen[] = BASE_CITIZEN;

  constructor(gameConfig?: GameConfig) {
    if (gameConfig) {
      const { gameMap, citizens } = gameConfig;

      this.rawGameMap = gameMap;
      this.citizens = citizens;
    }
  }

  init() {
    if (!this.isItiated) {
      this.gameMap = this.rawGameMap.map((y) =>
        y.map((x) => new Cell(CELLS_MAP[x]))
      );

      this.isItiated = true;
    }
  }
}
