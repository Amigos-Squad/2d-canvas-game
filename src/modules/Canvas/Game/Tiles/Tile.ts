import { SpriteSheetGroup } from '../Images';
import { ENVIRONMENT } from './const';
import { TileData } from './tiles.types';

export class Tile {
  private x: number = 0;

  private y: number = 0;

  private width: number = 0;

  private height: number = 0;

  data: TileData;

  baseData: TileData;

  constructor(type: TileData = ENVIRONMENT.empty) {
    this.data = type;
    this.baseData = type;
  }

  update(x: number, y: number, cellSize: number) {
    this.x = x * cellSize;
    this.y = y * cellSize;
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
