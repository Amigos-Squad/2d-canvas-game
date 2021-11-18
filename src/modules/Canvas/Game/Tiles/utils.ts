import { SPRITE_SHEETS } from '../Images';
import { TileDataProps } from '../Tiles/tiles.types';

export enum TILE_TYPE {
  ENVIRONMENT = 'ENVIRONMENT',
  GROUND = 'GROUND',
  ROOM = 'ROOM',
  BUILD_PLACE = 'BUILD_PLACE',
  SPACESHIP = 'SPACESHIP',
}

export function createTileLink(
  callback: Function,
  config: {
    num: number;
    start: number;
    count?: number;
  },
  data: Record<string, unknown> = {}
): any {
  const { num, start, count = 6 } = config;
  const array = [];

  for (let i = 0; i < count; i += 1) {
    array.push([
      Number(`${num}.${i + 1}`),
      callback({ spriteIndex: start + i, ...data }),
    ]);
  }

  return array;
}

export function createRoomTile(props: TileDataProps | number): any {
  if (typeof props === 'number') {
    return {
      type: TILE_TYPE.ROOM,
      spriteSheet: SPRITE_SHEETS.ROOM,
      spriteIndex: props,
    };
  }

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
