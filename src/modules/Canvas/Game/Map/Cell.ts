import { CELLS } from './const';
import { CellType } from './map.types';

export class Cell {
  private x: number = 0;

  private y: number = 0;

  private width: number = 0;

  private height: number = 0;

  private block: CellType;

  constructor(cellType: CellType = CELLS.blocked) {
    this.block = cellType;
  }

  update(x: number, y: number, cellSize: number) {
    this.x = x * cellSize;
    this.y = y * cellSize;
    this.width = cellSize;
    this.height = cellSize;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.strokeStyle = 'black';
    ctx.fillStyle = this.block.background;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
