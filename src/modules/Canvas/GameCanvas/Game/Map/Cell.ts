import { CELLS } from './const';
import { CellType } from './Map.types';

export class Cell {
  private x: number;

  private y: number;

  private width: number;

  private height: number;

  private block: CellType;

  constructor(
    x: number,
    y: number,
    cellSize: number,
    cellType: CellType = CELLS.blocked
  ) {
    this.x = x;
    this.y = y;
    this.width = cellSize;
    this.height = cellSize;
    this.block = cellType;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.strokeStyle = 'black';
    ctx.fillStyle = this.block.background;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
