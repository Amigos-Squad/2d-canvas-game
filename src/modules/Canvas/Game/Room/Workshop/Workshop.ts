import { Room } from '../Room';
import { WORKSHOP_INFO } from './const';

export class Workshop extends Room {
  energyBlock = WORKSHOP_INFO.PRICE.STATIC_ENERGY;

  scheme = [
    [7.1, 7.2, 7.3],
    [7.4, 7.5, 7.6],
  ];

  horizontalCellCount = 3;
}
