import { GameConfig } from './Game.types';
import { BASE_GAME_MAP, GameMap } from './Map';

export class Game {
  map: GameMap = BASE_GAME_MAP;

  citizens: unknown[] = [];

  constructor(gameConfig?: GameConfig) {
    if (gameConfig) {
      const { map, citizens } = gameConfig;

      this.map = map;
      this.citizens = citizens;
    }
  }
}
