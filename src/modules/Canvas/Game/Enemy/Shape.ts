import { Animation, SpriteSheets, SPRITE_SHEETS } from '../Images';
import { Enemy } from './Enemy';
import { TileCache } from './Enemy.types';
import { ACTIVITYS_TITLE, SHAPE_ACTIVITYS } from './const';

export class Shape {
  protected enemy: Enemy;

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

  constructor(enemy: Enemy, x: number = 0, y: number = 0) {
    const { cellSize } = enemy.scene.game.screen;

    this.x = x;
    this.y = y;

    this.blockSize = cellSize;
    this.prevBlockSize = cellSize;
    this.enemy = enemy;

    this.handleResize(this.blockSize);
    
    this.sprites = new SpriteSheets(
      [SPRITE_SHEETS.ENEMY],
      enemy.scene.game.screen
    );

    this.activity = ACTIVITYS_TITLE.IDLE;
  }

  handleResize(blockSize: number) {
    this.blockSize = blockSize;
    this.width = blockSize;
    this.height = blockSize;
    this.prevBlockSize = blockSize;
  }

  handleWalk() {
    if (this.x <= 0 || this.x >= this.enemy.scene.game.screen.screenWidth - this.enemy.characteristics.speed - this.enemy.shape.width) {
      this.enemy.characteristics.speed = -this.enemy.characteristics.speed
    }
    this.handleHorizontal(this.enemy.characteristics.speed);
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
        SPRITE_SHEETS.ENEMY
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
