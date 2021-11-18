import { SPACEPORT_INFO } from './const';

export class Spaceport {
  energyBlock = SPACEPORT_INFO.PRICE.STATIC_ENERGY;

  scheme = [
    [9.1, 9.2, 9.3],
    [9.4, 9.5, 9.6],
  ];

  horizontalCellCount = 3;
}
