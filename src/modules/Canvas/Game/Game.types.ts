import { Сharacter } from './Сharacter';
import { RawGameMap } from './Tiles';

export type GameConfig = {
  gameMap: RawGameMap;
  сharacter: Сharacter;
};

export type GameHandler = {
  setCitizens: (citizens: number) => void;
  setCurrentDay: (day: number) => void;
};

export type Images = Record<string, string>;
