import { Game } from '.';
import { GameHandler } from './Game.types';

export class Statuses {
  static CONST = {
    DAY_LENGTH: 100,
    DAY_INC_SPEED: 1,
  };

  game: Game;

  handlers: GameHandler | null = null;

  day: number = 1;

  dayTimer: number = 0;

  citizens: number = 2;

  constructor(game: Game) {
    this.game = game;
  }

  setHandlers(handlers: GameHandler) {
    this.handlers = handlers;
  }

  changeCitizens(citizensCount: number) {
    this.citizens = citizensCount;
    this.handlers?.setCitizens(citizensCount);
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
      this.handlers?.setCurrentDay(this.day);
    }
  }
}
