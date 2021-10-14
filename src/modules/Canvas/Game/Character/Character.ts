import { CharacterState } from '.';
import { EVENT_BUS_EVENTS } from '..';
import { Room } from '../Room';
import { HomeBase } from '../Scenes';
import { Shape } from './Shape';

export class Character {
  public scene: HomeBase;

  public room: Room | null = null;

  public shape: Shape;

  public characteristics = {
    speed: 4,
  };

  constructor(scene: HomeBase, сharacter: CharacterState) {
    const { tileX, tileY } = сharacter;
    this.scene = scene;

    this.shape = new Shape(this, tileX, tileY);
    this.eventRegistration();
  }

  eventRegistration = () => {
    const { eventBus } = this.scene.game;
    eventBus.on(EVENT_BUS_EVENTS.INTERACT, this.interactHandler);
  };

  interactHandler = () => {
    if (this.room) {
      this.room.interactStack.pop();
      this.room = null;
    } else {
      const { x, y } = this.shape;
      const { room } = this.scene.gameMap.findTile(x, y);

      if (room) {
        this.room = room;
        room.interactStack.push(this);
      }
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
