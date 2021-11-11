import { Animation, SpriteSheets, SPRITE_SHEETS } from '../Images';
import { Spaceship } from './Spaceship';
import { TileCache } from './Spaceship.types';
import { ACTIVITYS_TITLE, SHAPE_ACTIVITYS } from './const';

export class Shape {
  protected spaceship: Spaceship;

  protected cellX: number;

  protected cellY: number;

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

    if (cellSize) {
      this.x = x * cellSize;
      this.y = y * cellSize;
    } else {
      this.x = x;
      this.y = y;
    }

    this.cellX = x;
    this.cellY = y;

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
    this.x = this.cellX * blockSize;
    this.y = this.cellY * blockSize;
    this.prevBlockSize = blockSize;
  }

  handleWalk() {
    if (this.x <= 0 || this.x >= this.spaceship.scene.game.screen.screenWidth - this.spaceship.characteristics.speed - this.spaceship.shape.width) {
      this.spaceship.characteristics.speed = -this.spaceship.characteristics.speed
    }
    this.handleHorizontal(this.spaceship.characteristics.speed);
  }

  handleHorizontal(speed: number) {
    const nextX = this.x + speed;

    this.x = nextX

    return 0;
  }

  update(frame: number, blockSize: number = this.blockSize) {
    if (this.prevBlockSize !== blockSize) {
      this.handleResize(blockSize);
    }

    this.handleWalk();
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
    const { image, imageX, imageY, width, height } =
      this.getActivityAnimation();

    /* TODO fix offset Y (img stack) */
    context.drawImage(
      image,
      imageX,
      imageY,
      width,
      height,
      this.x,
      this.y - 5,
      this.width,
      this.height
    );
  }
}
