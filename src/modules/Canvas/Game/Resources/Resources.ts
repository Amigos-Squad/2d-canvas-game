import { HomeBase } from '../Scenes';
import { ExplorationInfo } from '../Statuses.types';
import { Drone } from './Drone';
import { Energy } from './Energy';

export class Resources {
  scene: HomeBase;

  drones: Drone[];

  energy: Energy;

  explorationTime?: number;

  explorationHP?: number;

  constructor(scene: HomeBase, explorationInfo: ExplorationInfo | undefined = undefined) {
    this.scene = scene;
    this.drones = [new Drone(), new Drone()];
    this.energy = new Energy(scene.game.eventBus, [...this.drones]);
    if (explorationInfo) {
      this.explorationTime = explorationInfo.time
      this.explorationHP = explorationInfo.hp
    }
  }

  render(time: number) {
    this.energy.update(time);
  }
}
