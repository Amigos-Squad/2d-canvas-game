import { HomeBase } from '../Scenes';
import { Drone } from './Drone';
import { Energy } from './Energy';

export class Resources {
  scene: HomeBase;

  drones: Drone[];

  energy: Energy;

  constructor(scene: HomeBase) {
    this.scene = scene;
    this.drones = [new Drone(), new Drone()];
    this.energy = new Energy(scene.game.eventBus, [...this.drones]);
  }

  render(time: number) {
    this.energy.update(time);
  }
}
