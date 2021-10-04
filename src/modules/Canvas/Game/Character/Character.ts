import { Game } from '..';
import { SpriteSheetGroup, SPRITE_SHEETS } from '../Images';
import { Shape } from './Shape';

export class Character {
  game: Game;

  protected shape: Shape;

  characteristics = {
    speed: 4,
  };

  constructor(x: number = 0, y: number = 0, game: Game) {
    this.game = game;
    this.shape = new Shape(this, x, y);
  }

  update(frame: number, blockSize?: number) {
    this.shape.update(frame, blockSize);
  }

  draw(context: CanvasRenderingContext2D, sprites: SpriteSheetGroup) {
    if (!this.shape.animation) {
      this.shape.animation = sprites[SPRITE_SHEETS.CITIZEN].getAnimation(
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        100
      );
    }

    const { animation, x, y, width, height } = this.shape;

    context.drawImage(
      animation.image,
      animation.imageX,
      animation.imageY,
      animation.width,
      animation.height,
      x,
      y,
      width,
      height
    );
  }
}
