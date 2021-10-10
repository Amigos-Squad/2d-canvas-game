import { BASE_CHARACTER } from './Character';
import { SavedState } from './Game.types';
import { BASE_GAME_MAP } from './GameMap';
import { Kitchen, Lift } from './Tiles';

export const GAME_CONST = {
  CELL_IN_PAGE: 32,
  START_FRAME: 0,
  END_FRAME: 60,
  FRAME_INCREASE: 1,
  BASE_BUILDINGS: {
    LADDER: new Lift(),
    KITCHEN: new Kitchen(),
  },
};

export const baseSetup: SavedState = {
  gameMap: BASE_GAME_MAP,
  сharacter: BASE_CHARACTER,
  scene: 'homeBase',
};

export const enum EVENT_BUS_EVENTS {
  KEY_DOWN = 'KEY_DOWN',
  KEY_UP = 'KEY_UP',
  ESCAPE = 'ESCAPE',
}
