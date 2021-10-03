import { SPRITE_CONST } from './const';
import { ISprite } from './Sprites.types';

export class Sprite {
  image: HTMLImageElement;

  imageX: number;

  imageY: number;

  width: number;

  height: number;

  constructor({
    image,
    imageX,
    imageY,
    width = SPRITE_CONST.DEFAULT_WIDTH,
    height = SPRITE_CONST.DEFAULT_HEIGHT,
  }: ISprite) {
    this.image = image;
    this.imageX = imageX;
    this.imageY = imageY;
    this.width = width;
    this.height = height;
  }
}
