import { Game } from '..';
import { Sprite } from '../Images/Sprite';
import { CELLS } from './const';
import { CellType } from './map.types';

export class Cell {
  private x: number = 0;

  private y: number = 0;

  private width: number = 0;

  private height: number = 0;

  block: CellType;

  baseBlockType: CellType;

  constructor(cellType: CellType = CELLS.blocked) {
    this.block = cellType;
    this.baseBlockType = cellType;
  }

  update(x: number, y: number, cellSize: number) {
    this.x = x * cellSize;
    this.y = y * cellSize;
    this.width = cellSize;
    this.height = cellSize;
  }

  updateCellType(cellType: CellType) {
    if (cellType) {
      this.block = cellType;
    } else {
      this.block = this.baseBlockType;
    }
  }

  draw = (game: Game, sprite: Sprite) => {
    const { context, images } = game.screen;
    context.drawImage(
      images[sprite.imageName],
      sprite.sourceX,
      sprite.sourceY,
      128,
      128,
      this.x,
      this.y,
      this.width,
      this.height
    );
    /*   context.strokeStyle = 'black';
    context.fillStyle = this.block.background;
    context.fillRect(this.x, this.y, this.width, this.height); */
  };
}
