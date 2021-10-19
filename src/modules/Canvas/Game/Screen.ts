import { GAME_CONST } from './const';
import { Images } from './Game.types';
import { ImageLoader } from './Images';

export class Screen {
  cellSize: number = 0;

  images: Record<string, HTMLImageElement> = {};

  private canvas: HTMLCanvasElement;

  context: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.context = context;
  }

  loadImages = async (images: Images) => {
    const loader = new ImageLoader(images);
    await loader.load();
    this.images = Object.assign(this.images, loader.images);
  };

  private resizeCanvasToDisplaySize() {
    const { width, height } = this.canvas.getBoundingClientRect();

    if (this.canvas.width !== width || this.canvas.height !== height) {
      this.canvas.width = width;
      this.canvas.height = height;
      this.cellSize = Math.round(width / GAME_CONST.CELL_IN_PAGE);
      this.context.clearRect(0, 0, width, height);
    }
  }

  screenSize() {
    this.context.save();
    this.resizeCanvasToDisplaySize();
  }

  restore() {
    this.context.restore();
  }
}
