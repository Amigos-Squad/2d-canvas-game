import { Room } from '.';
import { SpriteSheetGroup } from '../Images';
import { ENVIRONMENT } from './const';
import { TileData } from './tiles.types';

export class Tile {
  room: Room | undefined;

  indexY: number;

  indexX: number;

  x: number = 0;

  y: number = 0;

  private width: number = 0;

  private height: number = 0;

  data: TileData;

  baseData: TileData;

  constructor(
    type: TileData = ENVIRONMENT.empty,
    indexY: number,
    indexX: number,
    room?: Room
  ) {
    this.data = type;
    this.baseData = type;
    this.indexX = indexX;
    this.indexY = indexY;
    this.room = room;
  }

  update(cellSize: number) {
    this.x = this.indexX * cellSize;
    this.y = this.indexY * cellSize;
    this.width = cellSize;
    this.height = cellSize;
  }

  updateCellType(cellType: TileData) {
    if (cellType) {
      this.data = cellType;
    } else {
      this.data = this.baseData;
    }
  }

  draw = (context: CanvasRenderingContext2D, sprites: SpriteSheetGroup) => {
    const { spriteSheet, spriteIndex } = this.data;
    const { image, imageX, imageY, width, height } =
      sprites[spriteSheet].getSprite(spriteIndex);

    context.drawImage(
      image,
      imageX,
      imageY,
      width,
      height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  };
}
