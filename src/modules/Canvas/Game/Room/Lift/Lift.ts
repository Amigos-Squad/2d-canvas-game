import { Room } from '../Room';
import { LIFT_INFO } from './const';

export class Lift extends Room {
  energyBlock = LIFT_INFO.PRICE.STATIC_ENERGY;

  scheme = [
    [4.1, 4.2, 4.3],
    [4.4, 4.5, 4.6],
  ];

  horizontalCellCount = 3;

  data = {
    isAllowVertical: true,
  };
}
