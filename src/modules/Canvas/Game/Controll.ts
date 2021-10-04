export class Controll {
  state: Record<string, boolean> = {
    up: false,
    down: false,
    left: false,
    right: false,
  };

  keyMap = new Map([
    ['arrowleft', 'left'],
    ['arrowup', 'up'],
    ['arrowright', 'right'],
    ['arrowdown', 'down'],
    ['a', 'left'],
    ['w', 'up'],
    ['d', 'right'],
    ['s', 'down'],
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
