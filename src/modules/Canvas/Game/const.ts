import { BASE_CHARACTER } from './Character';
import { SavedState } from './Game.types';
import { BASE_GAME_MAP } from './GameMap';
import { Kitchen, Ladder } from './Tiles';

export const GAME_CONST = {
  CELL_IN_PAGE: 32,
  START_FRAME: 0,
  END_FRAME: 60,
  FRAME_INCREASE: 1,
  BASE_BUILDINGS: {
    LADDER: new Ladder(),
    KITCHEN: new Kitchen(),
  },
};

export const baseSetup: SavedState = {
  gameMap: BASE_GAME_MAP,
  сharacter: BASE_CHARACTER,
  scene: 'homeBase',
};
