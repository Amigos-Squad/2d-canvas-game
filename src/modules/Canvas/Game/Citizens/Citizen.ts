export class Citizen {
  static CONST = {
    LOSE_FOOD_SPEED: 25,
    HUNGER_DEATH_SPEED: 25,
  };

  context: CanvasRenderingContext2D;

  cellX: number;

  cellY: number;

  x: number;

  y: number;

  width: number;

  height: number;

  blockSize: number;

  health: number = 100;

  food: number = 100;

  constructor(
    context: CanvasRenderingContext2D,
    x: number,
    y: number,
    blockSize: number
  ) {
    this.context = context;

    if (blockSize) {
      this.x = x * blockSize;
      this.y = y * blockSize;
    } else {
      this.x = x;
      this.y = y;
    }

    this.cellX = x;
    this.cellY = y;

    this.blockSize = blockSize;
    this.width = blockSize;
    this.height = blockSize / 2;
  }

  update(frame: number, blockSize: number = this.blockSize) {
    this.handleStatus(frame);
    this.handlePosition(blockSize);
  }

  handleStatus(frame: number) {
    if (frame === 0) {
      if (this.food) {
        this.food -= Citizen.CONST.LOSE_FOOD_SPEED;
      } else {
        this.health -= Citizen.CONST.HUNGER_DEATH_SPEED;
      }
    }
  }

  handlePosition(blockSize: number) {
    this.blockSize = blockSize;
    this.width = blockSize;
    this.height = blockSize;
    this.x = this.cellX * blockSize;
    this.y = this.cellY * blockSize;
  }

  draw() {
    this.context.strokeStyle = 'black';
    this.context.fillStyle = '#c0f';
    this.context.fillRect(this.x, this.y, this.width, this.height);
  }
}
