import { DIRECTIONS } from '../Control';
import { Animation } from '../Images';
import { TILE_TYPE } from '../Tiles/const';
import { Character } from './Character';
import { TileCache } from './Character.types';

export class Shape {
  character: Character;

  cellX: number;

  cellY: number;

  x: number;

  y: number;

  width: number = 0;

  height: number = 0;

  prevBlockSize: number;

  blockSize: number;

  animation: null | Animation = null;

  tileCache: TileCache = new Map();

  constructor(character: Character, x: number = 0, y: number = 0) {
    const { cellSize } = character.game.screen;
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
    const { game, characteristics } = this.character;
    const { down, left, right, up } = game.control.state;
    const { speed } = characteristics;
    const { leftAllow, rightAllow, upAllow, bottomAllow } = this.getTileRules();

    if (left && leftAllow) {
      this.x -= this.handleHorizontal(DIRECTIONS.LEFT, speed);
    } else if (right && rightAllow) {
      this.x += this.handleHorizontal(DIRECTIONS.RIGHT, speed);
    }

    if (down && bottomAllow) {
      this.y += speed;
    } else if (up && upAllow) {
      this.y -= speed;
    }
  }

  handleHorizontal(direction: DIRECTIONS, speed: number) {
    const { findCell, gameMap } = this.character.game.currentScene;

    if (direction === DIRECTIONS.LEFT) {
      const { x, y } = findCell(this.x - 1, this.y);
      const { data } = gameMap[y][x];
      if (data.type === TILE_TYPE.ROOM) {
        return speed;
      }
    } else if (direction === DIRECTIONS.RIGHT) {
      const { x, y } = findCell(this.x + this.width + 1, this.y);
      const { data } = gameMap[y][x];
      if (data.type === TILE_TYPE.ROOM) {
        return speed;
      }
    }

    return 0;
  }

  getTileRules = () => {
    const allows = {
      leftAllow: false,
      rightAllow: false,
      upAllow: false,
      bottomAllow: false,
    };
    const { findCell, gameMap } = this.character.game.currentScene;
    const { x, y } = findCell(this.x, this.y);

    const { data } = gameMap[y][x];

    if (data.type === TILE_TYPE.ROOM) {
      allows.leftAllow = true;
      allows.rightAllow = true;
    }

    return allows;
  };

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
