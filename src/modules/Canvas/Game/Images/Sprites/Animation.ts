import { ANIMATION_CONST } from './const';
import { IAnimation } from './Sprites.types';
import { Sprite } from './Sprite';

const { DEFAULT_HEIGHT, DEFAULT_WIDTH } = ANIMATION_CONST;

export class Animation extends Sprite {
  frames: { x: number; y: number }[];

  speed: number;

  repeat: boolean;

  running: boolean;

  frame: number;

  totalFrames: number;

  constructor({
    image,
    animationFrames,
    speed,
    repeat = true,
    autorun = true,
    width = DEFAULT_WIDTH,
    height = DEFAULT_HEIGHT,
  }: IAnimation) {
    super({
      image,
      imageX: animationFrames[0].x,
      imageY: animationFrames[0].y,
      width,
      height,
    });

    this.frames = animationFrames;
    this.speed = speed;
    this.repeat = repeat;
    this.running = autorun;
    this.frame = 0;
    this.totalFrames = animationFrames.length;
  }

  setFrame(index: number) {
    this.frame = index;
    this.imageX = this.frames[index].x;
    this.imageY = this.frames[index].y;
  }

  run() {
    this.setFrame(0);
    this.running = true;
  }

  stop() {
    this.running = false;
  }

  nextFrame() {
    this.frame += 1;
    if (this.frame === this.totalFrames) {
      if (this.repeat) {
        this.setFrame(0);
      } else {
        this.stop();
      }
    }
    this.setFrame(this.frame);
  }

  update(gameFrame: number) {
    if (this.running && gameFrame % 7 === 0) {
      this.nextFrame();
    }
  }
}
