import { EVENT_BUS_EVENTS, Game } from '.';
import { UpdateInfo } from './Game.types';
import { IStatusPayload } from './Statuses.types';

export class Statuses {
  static CONST = {
    DAY_LENGTH: 100,
  };

  game: Game;

  updateInfo: UpdateInfo;

  day: number = 1;

  prevDay: number = 0;

  constructor(game: Game, updateInfo: UpdateInfo) {
    this.game = game;
    this.updateInfo = updateInfo;
    this.registrateEvents();
  }

  registrateEvents() {
    const { eventBus } = this.game;
    eventBus.on(EVENT_BUS_EVENTS.ENERGY_CHANGE, this.handleInterfaceChange);
    eventBus.on(EVENT_BUS_EVENTS.EXPLORATION_TIME_CHANGE, this.handleInterfaceChange);
    eventBus.on(EVENT_BUS_EVENTS.EXPLORATION_HP_CHANGE, this.handleInterfaceChange);
  }

  handleInterfaceChange = ({ stateKey, payload }: IStatusPayload) => {
    const data: Record<string, unknown> = {};

    if (stateKey === 'energyState' && payload.energy <= 0) {
      data.isGameOver = true;
    }

    this.updateInfo({ [stateKey]: payload, ...data });
  };

  update(time: number) {
    this.dayHandler(time);
  }

  dayHandler(time: number) {
    if (time - this.prevDay > 100) {
      this.day += 1;
      this.prevDay = time;
      this.updateInfo({ day: this.day });
    }
  }
}
