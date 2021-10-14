import { createUniqId, Stack } from '@/utils';
import { IEnergyBased } from '../Resources';

export abstract class Room implements IEnergyBased {
  static STATE = {
    DEFAULT_ENERGY_SPEND: 0,
    DEFAULT_ENERGY_BLOCK: 0,
    DEFAULT_ENERGY_GENERATE: 0,
  };

  serialNumber: number = createUniqId();

  energyBlock: number = Room.STATE.DEFAULT_ENERGY_BLOCK;

  energyGenerateScale: number = Room.STATE.DEFAULT_ENERGY_GENERATE;

  energySpend: number = Room.STATE.DEFAULT_ENERGY_SPEND;

  interactStack = new Stack();

  get energyGenerate(): number {
    return this.energyGenerateScale * this.interactStack.size;
  }

  abstract scheme: any;

  abstract horizontalCellCount: number;
}
