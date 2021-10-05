import { CharacterState } from '.';
import { SpriteSheetGroup, SpriteSheets, SPRITE_SHEETS } from '../Images';
import { HomeBase } from '../Scenes';
import { Shape } from './Shape';

export class Character {
  public scene: HomeBase;

  protected sprites: SpriteSheets;

  public shape: Shape;

  public characteristics = {
    speed: 4,
  };

  constructor(scene: HomeBase, сharacter: CharacterState) {
    const { tileX, tileY } = сharacter;
    this.scene = scene;

    this.sprites = new SpriteSheets(
      [SPRITE_SHEETS.CHARACTER],
      scene.game.screen
    );

    this.shape = new Shape(this, tileX, tileY);
  }

  render() {
    const { frameCount, screen } = this.scene.game;
    this.update(frameCount, screen.cellSize);
    this.draw(screen.context, this.sprites.groups);
  }

  update(frame: number, blockSize?: number) {
    this.shape.update(frame, blockSize);
  }

  draw(context: CanvasRenderingContext2D, sprites: SpriteSheetGroup) {
    if (!this.shape.animation) {
      this.shape.animation = sprites[SPRITE_SHEETS.CHARACTER].getAnimation(
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
