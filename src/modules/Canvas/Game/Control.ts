import { EVENT_BUS_EVENTS, Game } from '.';

export enum DIRECTIONS {
  LEFT = 'left',
  RIGHT = 'right',
  UP = 'up',
  DOWN = 'down',
}

export enum KEYS {
  ESCAPE = 'escape',
}

export const EVENT_BUS_EVENTS_MAP = {
  [KEYS.ESCAPE]: EVENT_BUS_EVENTS.ESCAPE,
};

export class Control {
  game: Game;

  state: Record<DIRECTIONS, boolean> = {
    [DIRECTIONS.UP]: false,
    [DIRECTIONS.DOWN]: false,
    [DIRECTIONS.LEFT]: false,
    [DIRECTIONS.RIGHT]: false,
  };

  private directionMap = new Map([
    ['arrowleft', DIRECTIONS.LEFT],
    ['arrowup', DIRECTIONS.UP],
    ['arrowright', DIRECTIONS.RIGHT],
    ['arrowdown', DIRECTIONS.DOWN],
    ['a', DIRECTIONS.LEFT],
    ['w', DIRECTIONS.UP],
    ['d', DIRECTIONS.RIGHT],
    ['s', DIRECTIONS.DOWN],
  ]);

  private keyMap = new Map([['Escape', KEYS.ESCAPE]]);

  constructor(game: Game) {
    this.game = game;
    game.eventBus.on(EVENT_BUS_EVENTS.KEY_DOWN, this.keyDownHandler);
    game.eventBus.on(EVENT_BUS_EVENTS.KEY_UP, this.keyUpHandler);
  }

  keyDownHandler = (event: KeyboardEvent) => {
    if (this.directionMap.has(event.key.toLowerCase())) {
      const key = this.directionMap.get(event.key.toLowerCase())!;
      this.state[key] = true;
    } else if (this.keyMap.has(event.key.toLowerCase())) {
      const key = this.keyMap.get(event.key.toLowerCase())!;
      this.game.eventBus.emit(EVENT_BUS_EVENTS_MAP[key]);
    }
  };

  keyUpHandler = (event: KeyboardEvent) => {
    if (this.directionMap.has(event.key.toLowerCase())) {
      const key = this.directionMap.get(event.key.toLowerCase())!;
      this.state[key] = false;
    }
  };
}
