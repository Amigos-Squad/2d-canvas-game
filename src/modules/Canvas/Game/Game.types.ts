import { Citizen } from './Citizen';
import { RawGameMap } from './Tiles';

export type GameConfig = {
  gameMap: RawGameMap;
  citizens: Citizen[];
};

export type GameHandler = {
  setCitizens: (citizens: number) => void;
  setCurrentDay: (day: number) => void;
};

export type Images = Record<string, string>;