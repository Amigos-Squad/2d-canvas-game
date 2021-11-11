import { CharacterState } from './Character';
import { RawGameMap } from './GameMap';
import { Scenes } from './Scenes';

export type SavedState = {
  gameMap: RawGameMap;
  сharacter?: CharacterState;
  spaceship?: CharacterState;
  scene: keyof Scenes;
};

export type UpdateInfo = <T>(fields: T) => void;

export type Images = Record<string, string>;
