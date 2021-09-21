import { Citizen } from './Citizens';
import { RawGameMap } from './Map';

export type GameConfig = {
  gameMap: RawGameMap;
  citizens: Citizen[];
};
