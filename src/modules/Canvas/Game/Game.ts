import { GameHandler } from './Game.types';
import { Den, Scene, Scenes } from './Scenes';
import { Screen } from './Screen';
import { Statuses } from './Statuses';

export class Game {
  isLoaded: boolean = false;

  screen: Screen;

  frameCount: number = 0;

  animationFrameId: number | null = null;

  private scenes: Scenes;

  private currentScene: Scene;

  statuses: Statuses;

  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    this.screen = new Screen(canvas, context);
    this.statuses = new Statuses(this);

    this.scenes = {
      den: new Den(this),
    };

    this.currentScene = this.scenes.den;
  }

  load(handlers: GameHandler) {
    this.currentScene.init();
    this.statuses.setHandlers(handlers);
    this.isLoaded = true;
  }

  private predraw() {
    if (this.frameCount === 60) {
      this.frameCount = 0;
    } else {
      this.frameCount += 1;
    }

    this.screen.screenSize();
  }

  private postdraw() {
    this.screen.restore();
  }

  private animate = () => {
    this.predraw();
    this.statuses.update();
    this.currentScene.render();
    this.postdraw();
    this.animationFrameId = requestAnimationFrame(this.animate);
  };

  run() {
    if (!this.animationFrameId) {
      this.animate();
    }
  }

  cancelAnimation() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }
}
