import { Character } from './Character';
import { RawGameMap } from './Tiles';

export type GameConfig = {
  gameMap: RawGameMap;
  сharacter: Character;
};

export type GameHandler = {
  setCurrentDay: (day: number) => void;
};

export type Images = Record<string, string>;
