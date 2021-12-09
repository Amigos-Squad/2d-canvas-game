import { Bullet } from "../Bullet";
import { Exploration } from "../Scenes/Exploration";
import { Shape } from "./Shape";
import { SpaceshipState } from "./Spaceship.types";

export class Spaceship {
  public scene: Exploration;

  public shape: Shape;

  public characteristics = {
    speed: 8,
  };

  countdown = Math.random() * 50

  bullets: Bullet[] = []

  constructor(scene: Exploration, spaceship: SpaceshipState) {
    const { tileX, tileY } = spaceship;
    this.scene = scene;

    this.shape = new Shape(this, tileX, tileY);
  }

  shootHandler() {
    if (this.bullets.length < 2) {
      this.scene.addBullet(new Bullet(this.scene, {
        tileX: Math.round(this.shape.x / this.scene.game.screen.cellSize),
        tileY: Math.round(this.shape.y / this.scene.game.screen.cellSize) + 1,
      }, {verticalSpeed: 15, horizontalSpeed: Math.sign(this.characteristics.speed) * 5}))
    }
    this.countdown = Math.random() * 50
  }

  render() {
    this.countdown -= 1;
    if (this.countdown <= 0) {
      this.shootHandler()
    }
    const { frameCount, screen } = this.scene.game;
    this.update(frameCount, screen.cellSize);
    this.shape.draw(screen.context);
  }

  update(frame: number, blockSize?: number) {
    this.shape.update(frame, blockSize);
  }
}
