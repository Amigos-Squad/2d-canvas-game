import { Animation, SpriteSheets, SPRITE_SHEETS } from '../Images';
import { Bullet } from './Bullet';
import { TileCache } from './Bullet.types';
import { ACTIVITYS_TITLE, SHAPE_ACTIVITYS } from './const';

export class Shape {
  protected bullet: Bullet;

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

  constructor(bullet: Bullet, x: number = 0, y: number = 0) {
    const { cellSize } = bullet.scene.game.screen;

    if (cellSize) {
      this.x = x * cellSize;
      this.y = y * cellSize;
    } else {
      this.x = x;
      this.y = y;
    }

    // this.x = 500;
    // this.y = 60;
    this.cellX = x;
    this.cellY = y;

    this.blockSize = cellSize;
    this.prevBlockSize = cellSize;
    this.bullet = bullet;

    this.handleResize(this.blockSize);

    this.sprites = new SpriteSheets(
      [SPRITE_SHEETS.BULLET],
      bullet.scene.game.screen
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

  handleFlight() {
    if (this.x < 0 || this.x > this.bullet.scene.game.screen.screenWidth) {
      const characterShape = this.bullet.scene.character.shape
      if (Math.abs(characterShape.x - this.x) < 20) {
        this.bullet.scene.hp -= 1;
        this.bullet.scene.emitInfoChanges()
      }
      this.bullet.scene.bullets.splice(this.bullet.scene.bullets.indexOf(this.bullet), 1);
    } else if (this.bullet.characteristics.verticalSpeed > 0) {
      if (this.y >= this.bullet.scene.gameMap.maxYWithOffset(1)) {
        this.bullet.scene.bullets.splice(this.bullet.scene.bullets.indexOf(this.bullet), 1);
      } else if (this.y >= this.bullet.scene.gameMap.maxYWithOffset(2)) {
        const characterShape = this.bullet.scene.character.shape
        if (Math.abs(characterShape.x - this.x) < 25) {
          this.bullet.scene.hp -= 1;
          this.bullet.scene.emitInfoChanges();
          this.bullet.scene.bullets.splice(this.bullet.scene.bullets.indexOf(this.bullet), 1);
        }
      }
    } else {
      if (this.y <= 0) {
        this.bullet.scene.bullets.splice(this.bullet.scene.bullets.indexOf(this.bullet), 1);
      }
      if (this.y <= this.bullet.scene.gameMap.minYWithOffset(2)) {
        const { spaceships } = this.bullet.scene;
        spaceships.forEach(spaceship => {
          if (spaceship) {
            const spaceshipShape = spaceship?.shape;
            if (Math.abs(spaceshipShape.x - this.x) < 20) {
              this.bullet.scene.removeBullet(this.bullet);
              this.bullet.scene.removeSpaceship(spaceship);
            }
          }
        })
      }
    }
    this.handleMovement(this.bullet.characteristics.verticalSpeed, this.bullet.characteristics.horizontalSpeed);
  }

  handleMovement(verticalSpeed: number, horizontalSpeed: number) {
    const nextY = this.y + verticalSpeed;
    const nextX = this.x + horizontalSpeed;
    this.y = nextY
    this.x = nextX
    return 0;
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
        SPRITE_SHEETS.BULLET
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
