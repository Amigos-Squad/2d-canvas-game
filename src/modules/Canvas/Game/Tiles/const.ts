import { LADDER, LOBBY, KITCHEN } from './Room';
import { Tiles, TilesMap } from './tiles.types';
import {
  createBuildPlaceTile,
  createEnvironmentTile,
  createGroundTile,
} from './utils';

export const enum TILE_TYPE {
  ENVIRONMENT = 'ENVIRONMENT',
  GROUND = 'GROUND',
  ROOM = 'ROOM',
  BUILD_PLACE = 'BUILD_PLACE',
}

export const ENVIRONMENT: Tiles = {
  empty: createEnvironmentTile({ spriteIndex: 0 }),
  grass: createEnvironmentTile({ spriteIndex: 1 }),
  grass_stone_right: createEnvironmentTile({ spriteIndex: 2 }),
  grass_stone: createEnvironmentTile({ spriteIndex: 3 }),
  grass_stone_left: createEnvironmentTile({ spriteIndex: 4 }),
};

export const BUILD_PLACE: Tiles = {
  build_top_left: createBuildPlaceTile({ spriteIndex: 1 }),
  build_top_center_empty: createBuildPlaceTile({ spriteIndex: 2 }),
  build_top_center: createBuildPlaceTile({ spriteIndex: 3 }),
  build_top_right: createBuildPlaceTile({ spriteIndex: 4 }),
  build_bottom_left: createBuildPlaceTile({ spriteIndex: 5 }),
  build_bottom_center_empty: createBuildPlaceTile({ spriteIndex: 6 }),
  build_bottom_center: createBuildPlaceTile({ spriteIndex: 7 }),
  build_bottom_right: createBuildPlaceTile({ spriteIndex: 8 }),
  build_short_top_left: createBuildPlaceTile({ spriteIndex: 9 }),
  build_short_top_right: createBuildPlaceTile({ spriteIndex: 10 }),
  build_short_bottom_left: createBuildPlaceTile({ spriteIndex: 11 }),
  build_short_bottom_right: createBuildPlaceTile({ spriteIndex: 12 }),
};

export const GROUND: Tiles = {
  soil: createGroundTile({ spriteIndex: 1 }),
};

export const ROOMS: Tiles = {
  ...LOBBY,
  ...LADDER,
  ...KITCHEN,
};

export const TILES: TilesMap = new Map([
  [0, ENVIRONMENT.empty],
  [1, ENVIRONMENT.grass],
  [1.1, ENVIRONMENT.grass_stone],
  [1.2, ENVIRONMENT.grass_stone_left],
  [1.3, ENVIRONMENT.grass_stone_right],
  [2, GROUND.soil],
  [3.1, ROOMS.lobby_top_left],
  [3.2, ROOMS.lobby_top_center],
  [3.3, ROOMS.lobby_top_right],
  [3.4, ROOMS.lobby_bottom_left],
  [3.5, ROOMS.lobby_bottom_center],
  [3.6, ROOMS.lobby_bottom_right],
  [4.1, ROOMS.ladder_top_left],
  [4.2, ROOMS.ladder_top_right],
  [4.3, ROOMS.ladder_bottom_left],
  [4.4, ROOMS.ladder_bottom_right],
  [5.1, ROOMS.kitchen_top_left],
  [5.2, ROOMS.kitchen_top_center],
  [5.3, ROOMS.kitchen_top_right],
  [5.4, ROOMS.kitchen_bottom_left],
  [5.5, ROOMS.kitchen_bottom_right],
]);

/* prettier-ignore */
export const BASE_GAME_MAP:number[][] = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
  [1, 1, 1.3, 1.1, 1.1, 1.2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.3, 1.1, 1.1, 1.2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3.1, 3.2, 3.2, 3.3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3.4, 3.5, 3.5, 3.6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
]