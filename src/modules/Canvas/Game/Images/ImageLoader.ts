import { Images } from '../Game.types';

export class ImageLoader {
  images: Record<string, HTMLImageElement>;

  imageFiles: Images;

  constructor(imageFiles: Images) {
    this.imageFiles = imageFiles;
    this.images = {};
  }

  load() {
    return Promise.all(
      Object.entries(this.imageFiles).reduce(
        (acc: Promise<unknown>[], [key, value]) => {
          acc.push(this.loadImage(key, value));
          return acc;
        },
        []
      )
    );
  }

  loadImage(name: string, src: string) {
    return new Promise((resolve) => {
      const image = new Image();
      this.images[name] = image;
      image.onload = () => resolve(name);
      image.src = src;
    });
  }
}
