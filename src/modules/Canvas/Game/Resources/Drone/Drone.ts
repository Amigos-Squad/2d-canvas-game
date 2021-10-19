import { createUniqId } from '@/utils';
import type { IEnergyBased } from '../Resources.types';

export class Drone implements IEnergyBased {
  static CONST = {
    DEFAULT_ENERGY_SPEND: 1,
    DEFAULT_ENERGY_GENERATE: 0,
    DEFAULT_ENERGY_BLOCK: 0,
  };

  serialNumber = createUniqId();

  energyGenerate = Drone.CONST.DEFAULT_ENERGY_GENERATE;

  energyBlock = Drone.CONST.DEFAULT_ENERGY_BLOCK;

  energySpend = Drone.CONST.DEFAULT_ENERGY_SPEND;
}
