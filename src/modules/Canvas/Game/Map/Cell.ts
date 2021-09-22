import { CELLS } from './const';
import { CellType } from './map.types';

export class Cell {
  context: CanvasRenderingContext2D;

  private x: number = 0;

  private y: number = 0;

  private width: number = 0;

  private height: number = 0;

  private block: CellType;

  constructor(
    context: CanvasRenderingContext2D,
    cellType: CellType = CELLS.blocked
  ) {
    this.context = context;
    this.block = cellType;
  }

  update(x: number, y: number, cellSize: number) {
    this.x = x * cellSize;
    this.y = y * cellSize;
    this.width = cellSize;
    this.height = cellSize;
  }

  draw() {
    this.context.strokeStyle = 'black';
    this.context.fillStyle = this.block.background;
    this.context.fillRect(this.x, this.y, this.width, this.height);
  }
}
