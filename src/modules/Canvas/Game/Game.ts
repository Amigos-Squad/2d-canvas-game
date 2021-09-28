import { GAME_CONST } from './const';
import { GameHandler } from './Game.types';
import { Den, Scenes } from './Scenes';
import { Screen } from './Screen';
import { Statuses } from './Statuses';
import ImageRoom from '@/assets/sprites/Room.png';
import ImageGround from '@/assets/sprites/Ground.png';
import ImageEnvironment from '@/assets/sprites/Environment.png';
import ImageCitizen from '@/assets/sprites/Citizen.png';
import ImageBuildArea from '@/assets/sprites/BuildArea.png';
import { SPRITE_SHEETS } from './Images';

export class Game {
  static IMAGES = {
    [SPRITE_SHEETS.ENVIRONMENT]: ImageEnvironment,
    [SPRITE_SHEETS.GROUND]: ImageGround,
    [SPRITE_SHEETS.ROOM]: ImageRoom,
    [SPRITE_SHEETS.CITIZEN]: ImageCitizen,
    [SPRITE_SHEETS.BUILD_PLACE]: ImageBuildArea,
  };

  isLoaded: boolean = false;

  screen: Screen;

  frameCount: number = GAME_CONST.START_FRAME;

  animationFrameId: number | null = null;

  private scenes: Scenes;

  currentScene: Den;

  statuses: Statuses;

  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    this.screen = new Screen(canvas, context);
    this.statuses = new Statuses(this);

    this.scenes = {
      den: new Den(this),
    };

    this.currentScene = this.scenes.den;
  }

  load = async (handlers: GameHandler) => {
    await this.screen.loadImages(Game.IMAGES);
    this.currentScene.init();
    this.statuses.setHandlers(handlers);
    this.isLoaded = true;
  };

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
