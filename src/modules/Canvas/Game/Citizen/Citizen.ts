import { StackFSM } from '@/utils';
import { Animation, SpriteSheetGroup, SPRITE_SHEETS } from '../Images';

export class Citizen {
  static CONST = {
    LOSE_FOOD_SPEED: 1,
    HUNGER_DEATH_SPEED: 1,
    BASE_FOOD: 100,
    BASE_HEALTH: 100,
  };

  context: CanvasRenderingContext2D;

  behavior: StackFSM;

  cellX: number;

  cellY: number;

  x: number;

  y: number;

  width: number;

  height: number;

  prevBlockSize: number;

  blockSize: number;

  health: number = Citizen.CONST.BASE_HEALTH;

  food: number = Citizen.CONST.BASE_FOOD;

  target: number[] = [];

  animation: null | Animation = null;

  actionDelays = {
    food: 0,
    work: 0,
    temp: 0,
  };

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
    this.prevBlockSize = blockSize;
    this.width = blockSize;
    this.height = blockSize * 1.2;

    this.behavior = new StackFSM(this.waiting);
  }

  get isHungry() {
    return this.food < 30;
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
    this.prevBlockSize = blockSize;
  }

  searchFood = () => {
    const rnd = Math.round(Math.random());
    /* console.log('searching'); */
    if (rnd) {
      this.target = [10, 14];
      this.behavior.pushWithPop(this.moving);
      /* console.log('searched'); */
    } else {
      this.actionDelays.food = 1000;
      this.behavior.popState();
      /* console.log('not searched'); */
    }
  };

  moving = () => {
    if (this.actionDelays.temp === 1000) {
      /* console.log('here'); */
      this.actionDelays.temp = 0;
      this.behavior.pushWithPop(this.interact);
    } else {
      this.actionDelays.temp += 1;
      /* console.log('moving'); */
    }
  };

  waiting = () => {
    if (this.isHungry && this.actionDelays.food === 0) {
      this.behavior.pushState(this.searchFood);
      /*  console.log('start search food'); */
    } else if (this.isHungry) {
      this.actionDelays.food -= 1;
      /* console.log('wait search food'); */
    } else {
      /* console.log('wait'); */
    }
  };

  interact = () => {
    if (this.food === 100) {
      /*  console.log('no hungre'); */
      this.behavior.popState();
    } else {
      /* console.log('eating'); */
      this.food += 1;
    }
  };

  update(frame: number, blockSize: number = this.blockSize) {
    if (this.prevBlockSize !== blockSize) {
      this.handlePosition(blockSize);
    }

    this.handleStatus(frame);
    this.behavior.update();

    if (this.animation) {
      this.animation.update(frame);
    }
  }

  draw(sprites: SpriteSheetGroup) {
    if (!this.animation) {
      this.animation = sprites[SPRITE_SHEETS.CITIZEN].getAnimation(
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        100
      );
    }

    const { image, imageX, imageY, width, height } = this.animation!;

    this.context.drawImage(
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
