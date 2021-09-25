import { GAME_CONST } from './const';
import { GameHandler } from './Game.types';
import { Den, Scene, Scenes } from './Scenes';
import { Screen } from './Screen';
import { Statuses } from './Statuses';

export class Game {
  isLoaded: boolean = false;

  screen: Screen;

  frameCount: number = GAME_CONST.START_FRAME;

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
    if (this.frameCount === GAME_CONST.END_FRAME) {
      this.frameCount = GAME_CONST.START_FRAME;
    } else {
      this.frameCount += GAME_CONST.FRAME_INCREASE;
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
