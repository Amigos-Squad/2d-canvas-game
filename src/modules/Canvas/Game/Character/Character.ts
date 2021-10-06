import { CharacterState } from '.';
import { HomeBase } from '../Scenes';
import { Shape } from './Shape';

export class Character {
  public scene: HomeBase;

  public shape: Shape;

  public characteristics = {
    speed: 4,
  };

  constructor(scene: HomeBase, сharacter: CharacterState) {
    const { tileX, tileY } = сharacter;
    this.scene = scene;

    this.shape = new Shape(this, tileX, tileY);
  }

  render() {
    const { frameCount, screen } = this.scene.game;
    this.update(frameCount, screen.cellSize);
    this.shape.draw(screen.context);
  }

  update(frame: number, blockSize?: number) {
    this.shape.update(frame, blockSize);
  }
}
