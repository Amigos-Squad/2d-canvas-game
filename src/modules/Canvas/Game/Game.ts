import { baseSetup, GAME_CONST } from './const';
import { SavedState, UpdateInfo } from './Game.types';
import { HomeBase, Scenes } from './Scenes';
import { Screen } from './Screen';
import { Statuses } from './Statuses';
import { Control } from './Control';
import ImageRoom from '@/assets/sprites/Room.png';
import ImageGround from '@/assets/sprites/Ground.png';
import ImageEnvironment from '@/assets/sprites/Environment.png';
import ImageCharacter from '@/assets/sprites/Citizen.png';
import ImageBuildArea from '@/assets/sprites/BuildArea.png';
import { SPRITE_SHEETS } from './Images';

export class Game {
  static IMAGES = {
    [SPRITE_SHEETS.ENVIRONMENT]: ImageEnvironment,
    [SPRITE_SHEETS.GROUND]: ImageGround,
    [SPRITE_SHEETS.ROOM]: ImageRoom,
    [SPRITE_SHEETS.CHARACTER]: ImageCharacter,
    [SPRITE_SHEETS.BUILD_PLACE]: ImageBuildArea,
  };

  isLoaded: boolean = false;

  screen: Screen;

  control: Control;

  frameCount: number = GAME_CONST.START_FRAME;

  animationFrameId: number | null = null;

  private scenes: Scenes;

  currentScene: HomeBase;

  statuses: Statuses;

  constructor(
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    savedState: SavedState = baseSetup,
    updateHandler: UpdateInfo
  ) {
    this.screen = new Screen(canvas, context);
    this.control = new Control();
    this.statuses = new Statuses(this, updateHandler);

    this.scenes = {
      homeBase: new HomeBase(this, savedState),
    };

    this.currentScene = this.scenes[savedState.scene];
    this.load();
  }

  load = async () => {
    await this.screen.loadImages(Game.IMAGES);
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

    if (this.isLoaded) {
      this.currentScene.render();
    }

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
