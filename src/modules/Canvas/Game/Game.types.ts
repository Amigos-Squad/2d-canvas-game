import { Citizen } from './Citizens';
import { RawGameMap } from './Map';

export type GameConfig = {
  gameMap: RawGameMap;
  citizens: Citizen[];
};

export type GameHandler = {
  setCitizens: (citizens: number) => void;
  setCurrentDay: (day: number) => void;
};
