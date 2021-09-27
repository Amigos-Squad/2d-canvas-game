import { SPRITE_CONST } from './const';
import { Sprite } from './Sprite';

export { Sprite } from './Sprite';

export class SpriteSheet {
  name: string;

  width: number;

  height: number;

  spriteWidth: number;

  spriteHeight: number;

  constructor(
    name: string,
    width: number,
    height: number,
    spriteWidth = SPRITE_CONST.DEFAULT_WIDTH,
    spriteHeight = SPRITE_CONST.DEFAULT_HEIGHT
  ) {
    this.name = name;
    this.width = width;
    this.height = height;
    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;
  }

  getSprite(index: number) {
    const position = index - 1;
    return new Sprite(
      this.name,
      this.sourseX(position),
      this.sourseY(position),
      this.width,
      this.height
    );
  }

  sourseX = (index: number) => (index * this.spriteWidth) % this.width;

  sourseY = (index: number) =>
    Math.trunc(((index * this.spriteWidth) / this.width) * this.spriteHeight);
}
