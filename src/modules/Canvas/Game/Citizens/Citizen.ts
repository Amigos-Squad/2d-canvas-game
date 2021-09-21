export class Citizen {
  x: number = 0;

  y: number = 0;

  width: number = 0;

  height: number = 0;

  update(x: number, y: number, blockSize: number) {
    this.x = x;
    this.y = y;
    this.width = blockSize;
    this.height = blockSize / 2;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.strokeStyle = 'black';
    ctx.fillStyle = '#c0f';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
