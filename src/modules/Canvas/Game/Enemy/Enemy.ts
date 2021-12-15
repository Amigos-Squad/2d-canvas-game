import { Bullet } from "../Bullet";
import { Exploration } from "../Scenes/Exploration";
import { Shape } from "./Shape";
import { EnemyState } from "./Enemy.types";

export class Enemy {
  public scene: Exploration;

  public shape: Shape;

  public characteristics = {
    speed: 8,
  };

  countdown = Math.random() * 50

  bullets: Bullet[] = []

  constructor(scene: Exploration, enemy: EnemyState) {
    const { x, y } = enemy;
    this.scene = scene;

    this.shape = new Shape(this, x, y);
  }

  shootHandler() {
    if (this.bullets.length < 2) {
      this.scene.addBullet(new Bullet(this.scene, {
        x: this.shape.x,
        y: this.shape.y,
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
