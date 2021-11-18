import { SPRITE_SHEETS } from '../Images';
import { TILE_TYPE } from './utils';

export type TileData = {
  type: TILE_TYPE;
  spriteSheet: SPRITE_SHEETS;
  spriteIndex: number;
  isAllowVerticalMove?: boolean;
};

export type TileDataProps = {
  type?: TILE_TYPE;
  spriteIndex: number;
  isAllowVerticalMove?: boolean;
};

export type TilesMap = Map<number, TileData>;

export type Tiles = Record<string, TileData>;
