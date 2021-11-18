import {
  LIFT,
  COMMAND_POST,
  GENERATOR,
  WORKSHOP,
  MINING,
  SPACEPORT,
} from '../Room';
import { Tiles, TilesMap } from './tiles.types';
import {
  createBuildPlaceTile,
  createEnvironmentTile,
  createGroundTile,
  createSpaceshipTile,
} from './utils';

export const ENVIRONMENT: Tiles = {
  empty: createEnvironmentTile({ spriteIndex: 0 }),
  floor_first: createEnvironmentTile({ spriteIndex: 1 }),
  floor_second: createEnvironmentTile({ spriteIndex: 2 }),
  stone_first: createEnvironmentTile({ spriteIndex: 3 }),
  stone_right: createEnvironmentTile({ spriteIndex: 4 }),
};

export const BUILD_PLACE: Tiles = {
  build_top_left: createBuildPlaceTile({ spriteIndex: 1 }),
  build_top_center: createBuildPlaceTile({ spriteIndex: 2 }),
  build_top_right: createBuildPlaceTile({ spriteIndex: 3 }),
  build_bottom_left: createBuildPlaceTile({ spriteIndex: 4 }),
  build_bottom_center: createBuildPlaceTile({ spriteIndex: 5 }),
  build_bottom_right: createBuildPlaceTile({ spriteIndex: 6 }),
};

export const GROUND: Tiles = {
  soil: createGroundTile({ spriteIndex: 1 }),
};

export const SPACESHIP: Tiles = {
  weak: createSpaceshipTile({ spriteIndex: 1 }),
  normal: createSpaceshipTile({ spriteIndex: 2 }),
  hard: createSpaceshipTile({ spriteIndex: 3 }),
  bullet: createSpaceshipTile({ spriteIndex: 4 }),
};

export const ROOMS: Tiles = {
  ...COMMAND_POST,
  ...LIFT,
  ...GENERATOR,
};

export const TILES: TilesMap = new Map([
  [0, ENVIRONMENT.empty],
  [1, ENVIRONMENT.floor_first],
  [1.1, ENVIRONMENT.floor_second],
  [1.2, ENVIRONMENT.stone_first],
  [1.3, ENVIRONMENT.stone_right],
  [2, GROUND.soil],
  [3.1, ROOMS.commandPost_top_left],
  [3.2, ROOMS.commandPost_top_center],
  [3.3, ROOMS.commandPost_top_right],
  [3.4, ROOMS.commandPost_bottom_left],
  [3.5, ROOMS.commandPost_bottom_center],
  [3.6, ROOMS.commandPost_bottom_right],
  [4.1, ROOMS.lift_top_left],
  [4.2, ROOMS.lift_top_center],
  [4.3, ROOMS.lift_top_right],
  [4.4, ROOMS.lift_bottom_left],
  [4.5, ROOMS.lift_bottom_center],
  [4.6, ROOMS.lift_bottom_right],
  [5.1, ROOMS.generator_top_left],
  [5.2, ROOMS.generator_top_center],
  [5.3, ROOMS.generator_top_right],
  [5.4, ROOMS.generator_bottom_left],
  [5.5, ROOMS.generator_bottom_center],
  [5.6, ROOMS.generator_bottom_right],
  [6.1, SPACESHIP.weak],
  [6.2, SPACESHIP.normal],
  [6.3, SPACESHIP.hard],
  [6.4, SPACESHIP.bullet],
  ...WORKSHOP,
  ...MINING,
  ...SPACEPORT,
]);
