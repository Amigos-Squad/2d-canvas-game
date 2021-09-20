export class Citizen {
  x: number;

  y: number;

  width: number;

  height: number;

  constructor(x: number, y: number, blockSize: number) {
    this.x = x;
    this.y = y;
    this.width = blockSize;
    this.height = blockSize / 2;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.strokeStyle = 'black';
    ctx.fillStyle = '#444';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
