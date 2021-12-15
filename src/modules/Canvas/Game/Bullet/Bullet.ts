import { Exploration } from "../Scenes/Exploration";
import { Shape } from "./Shape";
import { BulletState } from "./Bullet.types";

export class Bullet {
  public scene: Exploration;

  public shape: Shape;

  public characteristics = {
    verticalSpeed: 15,
    horizontalSpeed: 0,
  };

  constructor(scene: Exploration, bullet: BulletState, characteristics: {verticalSpeed: number, horizontalSpeed: number}) {
    const { x, y } = bullet;
    this.scene = scene;
    this.characteristics = characteristics

    this.shape = new Shape(this, x, y);
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
