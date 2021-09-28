import { Screen } from '../../Screen';
import { SPRITE_CONST } from './const';
import { Animation } from './Animation';
import { Sprite } from './Sprite';

export class SpriteSheet {
  name: string;

  width: number;

  height: number;

  spriteWidth: number;

  spriteHeight: number;

  screen: Screen;

  sprites: Map<number, Sprite> = new Map();

  animations: Map<string, Animation> = new Map();

  constructor(
    name: string,
    width: number,
    height: number,
    screen: Screen,
    spriteWidth = SPRITE_CONST.DEFAULT_WIDTH,
    spriteHeight = SPRITE_CONST.DEFAULT_HEIGHT
  ) {
    this.name = name;
    this.width = width;
    this.height = height;
    this.screen = screen;
    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;
  }

  getSprite = (index: number) => {
    const position = index - 1;
    if (this.sprites.has(position)) {
      return this.sprites.get(position)!;
    }

    const sprite = new Sprite({
      image: this.screen.images[this.name],
      imageX: this.sourseX(position),
      imageY: this.sourseY(position),
      width: this.spriteWidth,
      height: this.spriteHeight,
    });

    this.sprites.set(position, sprite);

    return sprite;
  };

  getAnimation = (
    indexes: number[],
    speed: number,
    repeat?: boolean,
    autorun?: boolean
  ) => {
    const animIndexes = indexes.join('|');
    if (this.animations.has(animIndexes)) {
      return this.animations.get(animIndexes)!;
    }

    const animation = new Animation({
      image: this.screen.images[this.name],
      animationFrames: indexes.map((index) => ({
        x: this.sourseX(index - 1),
        y: this.sourseY(index - 1),
      })),
      speed,
      repeat,
      autorun,
      width: this.spriteWidth,
      height: this.spriteHeight,
    });

    this.animations.set(animIndexes, animation);

    return animation;
  };

  sourseX = (index: number) => (index * this.spriteWidth) % this.width;

  sourseY = (index: number) => {
    if (index * this.spriteWidth >= this.width) {
      return (
        Math.floor((this.spriteHeight * index) / this.width) * this.spriteHeight
      );
    }

    return 0;
  };
}
