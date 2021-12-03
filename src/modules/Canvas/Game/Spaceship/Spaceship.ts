import { SpaceshipState } from '.';
import { EVENT_BUS_EVENTS } from '..';
import { Bullet } from '../Bullet';
import { Room } from '../Room';
import { HomeBase } from '../Scenes';
import { Exploration } from '../Scenes/Exploration';
import { Shape } from './Shape';

export class Spaceship {
  public scene: HomeBase | Exploration;

  public room: Room | null = null;

  public shape: Shape;

  public characteristics = {
    speed: 6,
  };

  constructor(scene: HomeBase | Exploration, spaceship: SpaceshipState) {
    const { x, y } = spaceship;
    this.scene = scene;

    this.shape = new Shape(this, x, y);
    this.eventRegistration();
  }

  eventRegistration = () => {
    const { eventBus } = this.scene.game;
    eventBus.on(EVENT_BUS_EVENTS.INTERACT, this.interactHandler);
    eventBus.on(EVENT_BUS_EVENTS.SHOOT, this.shootHandler);
  };

  shootHandler = () => {
    if (this.scene instanceof Exploration) {
      this.scene.addBullet(new Bullet(
        this.scene, {
          x: this.shape.x + 17,
          y: this.shape.y,
        }, {verticalSpeed: -15, horizontalSpeed: 0})
      )
    }
  }

  interactHandler = () => {
    if (this.room) {
      this.room.interactStack.pop();
      this.room = null;
    }

    this.scene.game.eventBus.emit(EVENT_BUS_EVENTS.ENERGIZED_CHANGE);
  };

  render() {
    const { frameCount, screen } = this.scene.game;
    this.update(frameCount, screen.cellSize);
    this.shape.draw(screen.context);
  }

  update(frame: number, blockSize?: number) {
    this.shape.update(frame, blockSize);
  }
}
