import { Game } from '.';
import { GAME_CONST } from './const';
import { UpdateInfo } from './Game.types';
import { Room } from './Tiles';

export class Statuses {
  static CONST = {
    DAY_LENGTH: 100,
    DAY_INC_SPEED: 1,
  };

  game: Game;

  updateInfo: UpdateInfo;

  day: number = 1;

  dayTimer: number = 0;

  building: Record<string, Room> = GAME_CONST.BASE_BUILDINGS;

  constructor(game: Game, updateInfo: UpdateInfo) {
    this.game = game;
    this.updateInfo = updateInfo;
  }

  update() {
    this.dayHandler(this.game.frameCount);
  }

  dayHandler(frame: number) {
    if (frame === 0) {
      this.dayTimer += Statuses.CONST.DAY_INC_SPEED;
    }

    if (this.dayTimer === Statuses.CONST.DAY_LENGTH) {
      this.day += 1;
      this.dayTimer = 0;
      this.updateInfo({ day: this.day });
    }
  }
}
