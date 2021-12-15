import { Animation, SpriteSheets, SPRITE_SHEETS } from '../Images';
import { Spaceship } from './Spaceship';
import { TileCache } from './Spaceship.types';
import { ACTIVITYS_TITLE, SHAPE_ACTIVITYS } from './const';

export class Shape {
  protected spaceship: Spaceship;

  x: number;

  y: number;

  width: number = 0;

  height: number = 0;

  protected prevBlockSize: number;

  protected blockSize: number;

  animation: Animation | null = null;

  activity: ACTIVITYS_TITLE;

  protected tileCache: TileCache = new Map();

  protected sprites: SpriteSheets;

  constructor(spaceship: Spaceship, x: number = 0, y: number = 0) {
    const { cellSize } = spaceship.scene.game.screen;

    this.x = x;
    this.y = y;
    
    this.blockSize = cellSize;
    this.prevBlockSize = cellSize;
    this.spaceship = spaceship;

    this.handleResize(this.blockSize);

    this.sprites = new SpriteSheets(
      [SPRITE_SHEETS.SPACESHIP],
      spaceship.scene.game.screen
    );

    this.activity = ACTIVITYS_TITLE.IDLE;
  }

  handleResize(blockSize: number) {
    this.blockSize = blockSize;
    this.width = blockSize;
    this.height = blockSize;
    this.prevBlockSize = blockSize;
  }

  handleFlight() {
    const { scene, characteristics } = this.spaceship;
    const { left, right } = scene.game.control.state;
    const { speed } = characteristics;

    if (left) {
      this.x += this.handleHorizontal(-speed);
    } else if (right) {
      this.x += this.handleHorizontal(speed);
    }
  }

  handleHorizontal(speed: number) {
    this.x += speed;
    return speed;
  }

  update(frame: number, blockSize: number = this.blockSize) {
    if (this.prevBlockSize !== blockSize) {
      this.handleResize(blockSize);
    }

    this.handleFlight();
    this.handleAnimation(frame);
  }

  getActivityAnimation() {
    if (!this.animation) {
      const { cadres, width } = SHAPE_ACTIVITYS[this.activity];
      this.animation = this.sprites.groups[
        SPRITE_SHEETS.SPACESHIP
      ].getAnimation(cadres, width);
    }

    return this.animation;
  }

  handleAnimation(frame: number) {
    if (this.animation) {
      this.animation.update(frame);
    }
  }

  draw(context: CanvasRenderingContext2D) {
    const { image, imageX, imageY, width, height } = this.getActivityAnimation();
    context.drawImage(
      image,
      imageX,
      imageY,
      width,
      height,
      this.x,
      this.y - 14,
      this.width,
      this.height
    );
  }
}
