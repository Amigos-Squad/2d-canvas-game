import { Animation, SpriteSheetGroup, SPRITE_SHEETS } from '../Images';

export class Сharacter {
  static CONST = {
    LOSE_FOOD_SPEED: 1,
    HUNGER_DEATH_SPEED: 1,
    BASE_FOOD: 100,
    BASE_HEALTH: 100,
  };

  cellX: number;

  cellY: number;

  x: number;

  y: number;

  width: number;

  height: number;

  prevBlockSize: number;

  blockSize: number;

  health: number = Сharacter.CONST.BASE_HEALTH;

  food: number = Сharacter.CONST.BASE_FOOD;

  animation: null | Animation = null;

  constructor(x: number = 0, y: number = 0, blockSize: number = 0) {
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
    this.prevBlockSize = blockSize;
    this.width = blockSize;
    this.height = blockSize * 1.2;
  }

  get isHungry() {
    return this.food < 30;
  }

  handleStatus(frame: number) {
    if (frame === 0) {
      if (this.food) {
        this.food -= Сharacter.CONST.LOSE_FOOD_SPEED;
      } else {
        this.health -= Сharacter.CONST.HUNGER_DEATH_SPEED;
      }
    }
  }

  handlePosition(blockSize: number) {
    this.blockSize = blockSize;
    this.width = blockSize;
    this.height = blockSize;
    this.x = this.cellX * blockSize;
    this.y = this.cellY * blockSize;
    this.prevBlockSize = blockSize;
  }

  update(frame: number, blockSize: number = this.blockSize) {
    if (this.prevBlockSize !== blockSize) {
      this.handlePosition(blockSize);
    }

    this.handleStatus(frame);

    if (this.animation) {
      this.animation.update(frame);
    }
  }

  draw(context: CanvasRenderingContext2D, sprites: SpriteSheetGroup) {
    if (!this.animation) {
      this.animation = sprites[SPRITE_SHEETS.CITIZEN].getAnimation(
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        100
      );
    }

    const { image, imageX, imageY, width, height } = this.animation!;

    context.drawImage(
      image,
      imageX,
      imageY,
      width,
      height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
