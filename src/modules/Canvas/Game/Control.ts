import { EVENT_BUS_EVENTS, Game } from '.';

export enum DIRECTIONS {
  LEFT = 'left',
  RIGHT = 'right',
  UP = 'up',
  DOWN = 'down',
}

export enum STATE {
  INTERACT = 'interact',
}

export class Control {
  game: Game;

  state: Record<DIRECTIONS, boolean> = {
    [DIRECTIONS.UP]: false,
    [DIRECTIONS.DOWN]: false,
    [DIRECTIONS.LEFT]: false,
    [DIRECTIONS.RIGHT]: false,
    [DIRECTIONS.RIGHT]: false,
  };

  keyPressState: Record<STATE, boolean> = {
    [STATE.INTERACT]: false,
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

  private downKeyMap = new Map([
    ['escape', EVENT_BUS_EVENTS.ESCAPE],
    ['b', EVENT_BUS_EVENTS.OPEN_BUILD_MENU],
    [' ', EVENT_BUS_EVENTS.SHOOT],
  ]);

  private keyPress = new Map([['e', EVENT_BUS_EVENTS.INTERACT]]);

  private upKeyMap = new Map([['e', EVENT_BUS_EVENTS.INTERACT]]);

  constructor(game: Game) {
    this.game = game;
    game.eventBus.on(EVENT_BUS_EVENTS.KEY_DOWN, this.keyDownHandler);
    game.eventBus.on(EVENT_BUS_EVENTS.KEY_UP, this.keyUpHandler);
    game.eventBus.on(EVENT_BUS_EVENTS.KEY_PRESS, this.keyPressHandler);
  }

  keyDownHandler = (event: KeyboardEvent) => {
    const keyCode = event.key.toLowerCase() as STATE;

    if (this.directionMap.has(keyCode)) {
      const key = this.directionMap.get(keyCode)!;
      this.state[key] = true;
    } else if (this.downKeyMap.has(keyCode)) {
      const key = this.downKeyMap.get(keyCode)!;
      this.game.eventBus.emit(key);
    }
  };

  keyUpHandler = (event: KeyboardEvent) => {
    const keyCode = event.key.toLowerCase() as STATE;

    if (this.directionMap.has(keyCode)) {
      const key = this.directionMap.get(keyCode)!;
      this.state[key] = false;
    } else if (this.upKeyMap.has(keyCode)) {
      const key = this.upKeyMap.get(keyCode)!;

      if (this.keyPressState[keyCode]) {
        this.keyPressState[keyCode] = false;
      }
      
      this.game.eventBus.emit(key);
    }
  };

  keyPressHandler = (event: KeyboardEvent) => {
    const keyCode = event.key.toLowerCase() as STATE;

    if (this.keyPress.has(keyCode) && !this.keyPressState[keyCode]) {
      const key = this.keyPress.get(keyCode)!;
      this.keyPressState[keyCode] = true;
      this.game.eventBus.emit(key);
    }
  };
}
