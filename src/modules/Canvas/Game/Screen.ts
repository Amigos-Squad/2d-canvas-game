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

  get screenWidth() {
    return this.canvas.width;
  }

  get screenHeight() {
    return this.canvas.height;
  }

  public clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  public resizeCanvasToDisplaySize() {
    const { width, height } = this.canvas.getBoundingClientRect();

    if (this.canvas.width !== width || this.canvas.height !== height) {
      this.canvas.width = width;
      this.canvas.height = height;
      this.cellSize = 64;
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
