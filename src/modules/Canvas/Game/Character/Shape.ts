import { Animation, SpriteSheets, SPRITE_SHEETS } from '../Images';
import { TILE_TYPE } from '../Tiles';
import { Character } from './Character';
import { TileCache } from './Character.types';
import { ACTIVITYS_TITLE, SHAPE_ACTIVITYS } from './const';

export class Shape {
  protected character: Character;

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

  constructor(character: Character, x: number = 0, y: number = 0) {
    const { cellSize } = character.scene.game.screen;

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
    this.character = character;

    this.sprites = new SpriteSheets(
      [SPRITE_SHEETS.CHARACTER],
      character.scene.game.screen
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
    const { scene, characteristics } = this.character;
    const { down, left, right, up } = scene.game.control.state;
    const { speed } = characteristics;

    if (left) {
      this.x += this.handleHorizontal(-speed);
    } else if (right) {
      this.x += this.handleHorizontal(speed);
    }

    if (down) {
      this.y += this.handleVertical(speed);
    } else if (up) {
      this.y += this.handleVertical(-speed);
    }
  }

  handleHorizontal(speed: number) {
    const { gameMap, game } = this.character.scene;
    let nextX = this.x + speed;

    if (speed > 0) {
      nextX += this.width;
    }

    const { data, y, indexX, indexY } = gameMap.findTile(nextX, this.y);

    if (data.type === TILE_TYPE.ROOM) {
      if (this.y !== y + this.height) {
        if (indexY % 2 === 0) {
          this.y = y;
        } else {
          this.y = y + game.screen.cellSize;
        }
      }

      this.cellX = indexX;

      return speed;
    }

    return 0;
  }

  handleVertical(speed: number) {
    const { gameMap } = this.character.scene;
    let nextY = this.y;

    if (speed > 0) {
      nextY += this.height;
    }

    const { data, indexY } = gameMap.findTile(this.x, nextY);

    if (data.type === TILE_TYPE.ROOM && data.isAllowVerticalMove) {
      this.cellY = indexY;
      return speed;
    }

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
        SPRITE_SHEETS.CHARACTER
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
      this.y - 10,
      this.width,
      this.height
    );
  }
}
