import { SPRITE_CONST } from './const';

export class Sprite {
  imageName: string;

  sourceX: number;

  sourceY: number;

  width: number;

  height: number;

  x: number = 0;

  y: number = 0;

  constructor(
    name: string,
    sourceX: number,
    sourceY: number,
    width: number = SPRITE_CONST.DEFAULT_WIDTH,
    height: number = SPRITE_CONST.DEFAULT_HEIGHT
  ) {
    this.imageName = name;
    this.sourceX = sourceX;
    this.sourceY = sourceY;
    this.width = width;
    this.height = height;
  }

  setXY(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
