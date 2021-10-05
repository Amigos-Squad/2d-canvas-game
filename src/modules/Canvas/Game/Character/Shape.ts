import { Animation } from '../Images';
import { TILE_TYPE } from '../Tiles';
import { Character } from './Character';
import { TileCache } from './Character.types';

export class Shape {
  protected character: Character;

  protected cellX: number;

  protected cellY: number;

  public x: number;

  public y: number;

  public width: number = 0;

  public height: number = 0;

  protected prevBlockSize: number;

  protected blockSize: number;

  public animation: null | Animation = null;

  protected tileCache: TileCache = new Map();

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
      this.x -= this.handleHorizontal(-speed);
    } else if (right) {
      this.x += this.handleHorizontal(speed);
    }

    if (down) {
      this.y += speed;
    } else if (up) {
      this.y -= speed;
    }
  }

  handleHorizontal(speed: number) {
    const { gameMap } = this.character.scene;
    let nextX = this.x + speed;

    if (speed > 0) {
      nextX += this.width;
    }

    const { x: tileX, y: tileY } = gameMap.findTile(nextX, this.y);
    const { data } = gameMap.mapArray[tileY][tileX];

    if (data.type === TILE_TYPE.ROOM && tileY % 2 !== 0 && tileY === this.y) {
      return Math.abs(speed);
    }

    return 0;
  }

  update(frame: number, blockSize: number = this.blockSize) {
    if (this.prevBlockSize !== blockSize) {
      this.handleResize(blockSize);
    }

    this.handleWalk();

    if (this.animation) {
      this.animation.update(frame);
    }
  }
}
