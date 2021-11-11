import { BASE_CHARACTER } from './Character';
import { BASE_SPACESHIP } from './Character/const';
import { SavedState } from './Game.types';
import { BASE_GAME_MAP } from './GameMap';
import { EXPLORATION_GAME_MAP } from './GameMap/const';

export const GAME_CONST = {
  CELL_IN_PAGE: 32,
  START_FRAME: 0,
  END_FRAME: 60,
  FRAME_INCREASE: 1,
};

export const baseSetup: SavedState = {
  gameMap: BASE_GAME_MAP,
  сharacter: BASE_CHARACTER,
  scene: 'homeBase',
};

export const explorationSetup: SavedState = {
  gameMap: EXPLORATION_GAME_MAP,
  spaceship: BASE_SPACESHIP,
  scene: 'homeBase',
};

export const BASE_INFO_STATE = {
  day: 1,
  drones: {
    free: 2,
    total: 2,
  },
  energyState: {
    energy: 0,
    block: 0,
    spend: 0,
  },
  isGameOver: false,
};

export enum EVENT_BUS_EVENTS {
  KEY_DOWN = 'KEY_DOWN',
  KEY_UP = 'KEY_UP',
  KEY_PRESS = 'KEY_PRESS',
  MOUSE_CLICK = 'MOUSE_CLICK',
  ROOM_SELECTED = 'ROOM_SELECTED',
  ESCAPE = 'ESCAPE',
  OPEN_BUILD_MENU = 'OPEN_BUILD_MENU',
  ENERGY_CHANGE = 'ENERGY_CHANGE',
  ENERGIZED_CHANGE = 'ENERGIZED_CHANGE',
  INTERACT = 'INTERACT',
  STOP_INTERACT = 'STOP_INTERACT',
  SHOOT = 'SHOOT',
  EXPLORATION_TIME_CHANGE = 'EXPLORATION_TIME_CHANGE',
  EXPLORATION_HP_CHANGE = 'EXPLORATION_HP_CHANGE',
}
