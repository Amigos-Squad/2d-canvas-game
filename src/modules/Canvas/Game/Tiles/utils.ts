import { SPRITE_SHEETS } from '../Images';
import { TileDataProps } from '../Tiles/tiles.types';

export enum TILE_TYPE {
  ENVIRONMENT = 'ENVIRONMENT',
  GROUND = 'GROUND',
  ROOM = 'ROOM',
  BUILD_PLACE = 'BUILD_PLACE',
  SPACESHIP = 'SPACESHIP',
}

export function createRoomTile(props: TileDataProps): any {
  return {
    type: TILE_TYPE.ROOM,
    spriteSheet: SPRITE_SHEETS.ROOM,
    ...props,
  };
}

export function createEnvironmentTile(props: TileDataProps) {
  return {
    type: TILE_TYPE.ENVIRONMENT,
    spriteSheet: SPRITE_SHEETS.ENVIRONMENT,
    ...props,
  };
}

export function createSpaceshipTile(props: TileDataProps) {
  return {
    type: TILE_TYPE.SPACESHIP,
    spriteSheet: SPRITE_SHEETS.SPACESHIP,
    ...props,
  };
}

export function createBuildPlaceTile(props: TileDataProps) {
  return {
    type: TILE_TYPE.BUILD_PLACE,
    spriteSheet: SPRITE_SHEETS.BUILD_PLACE,
    ...props,
  };
}

export function createGroundTile(props: TileDataProps) {
  return {
    type: TILE_TYPE.GROUND,
    spriteSheet: SPRITE_SHEETS.GROUND,
    ...props,
  };
}
