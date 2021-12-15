import { Room } from '../Room';
import { MINING_INFO } from './const';

export class Mining extends Room {
  energyBlock = MINING_INFO.PRICE.STATIC_ENERGY;

  scheme = [
    [8.1, 8.2, 8.3],
    [8.4, 8.5, 8.6],
  ];

  horizontalCellCount = 3;
}
