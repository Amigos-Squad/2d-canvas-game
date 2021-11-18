import { createUniqId } from '@/utils';
import { Room } from '../Room';
import { GENERATOR_INFO } from './const';

export class Generator extends Room {
  serialNumber = createUniqId();

  energyBlock = GENERATOR_INFO.PRICE.STATIC_ENERGY;

  energyGenerateScale = GENERATOR_INFO.BENEFIT.ENERGY;

  scheme = [
    [5.1, 5.2, 5.3],
    [5.4, 5.5, 5.6],
  ];

  horizontalCellCount = 3;
}
