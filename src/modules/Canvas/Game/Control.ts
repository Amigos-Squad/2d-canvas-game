export const enum DIRECTIONS {
  LEFT = 'left',
  RIGHT = 'right',
  UP = 'up',
  DOWN = 'down',
}

export class Control {
  state: Record<DIRECTIONS, boolean> = {
    [DIRECTIONS.UP]: false,
    [DIRECTIONS.DOWN]: false,
    [DIRECTIONS.LEFT]: false,
    [DIRECTIONS.RIGHT]: false,
  };

  keyMap = new Map([
    ['arrowleft', DIRECTIONS.LEFT],
    ['arrowup', DIRECTIONS.UP],
    ['arrowright', DIRECTIONS.RIGHT],
    ['arrowdown', DIRECTIONS.DOWN],
    ['a', DIRECTIONS.LEFT],
    ['w', DIRECTIONS.UP],
    ['d', DIRECTIONS.RIGHT],
    ['s', DIRECTIONS.DOWN],
  ]);

  constructor() {
    document.addEventListener('keydown', this.keyDownHandler);
    document.addEventListener('keyup', this.keyUpHandler);
  }

  keyDownHandler = (event: KeyboardEvent) => {
    if (this.keyMap.has(event.key.toLowerCase())) {
      const key = this.keyMap.get(event.key.toLowerCase())!;
      this.state[key] = true;
    }
  };

  keyUpHandler = (event: KeyboardEvent) => {
    if (this.keyMap.has(event.key.toLowerCase())) {
      const key = this.keyMap.get(event.key.toLowerCase())!;
      this.state[key] = false;
    }
  };
}
