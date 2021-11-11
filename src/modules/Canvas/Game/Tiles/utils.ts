import { SPRITE_SHEETS } from '../Images';
import { TILE_TYPE } from './const';
import { TileData, TileDataProps } from './tiles.types';

export const createRoomTile = (props: TileDataProps): TileData => ({
  type: TILE_TYPE.ROOM,
  spriteSheet: SPRITE_SHEETS.ROOM,
  ...props,
});

export const createEnvironmentTile = (props: TileDataProps): TileData => ({
  type: TILE_TYPE.ENVIRONMENT,
  spriteSheet: SPRITE_SHEETS.ENVIRONMENT,
  ...props,
});

export const createGroundTile = (props: TileDataProps): TileData => ({
  type: TILE_TYPE.GROUND,
  spriteSheet: SPRITE_SHEETS.GROUND,
  ...props,
});

export const createSpaceshipTile = (props: TileDataProps): TileData => ({
  type: TILE_TYPE.SPACESHIP,
  spriteSheet: SPRITE_SHEETS.SPACESHIP,
  ...props,
});

export const createBuildPlaceTile = (props: TileDataProps): TileData => ({
  type: TILE_TYPE.BUILD_PLACE,
  spriteSheet: SPRITE_SHEETS.BUILD_PLACE,
  ...props,
});
