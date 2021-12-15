import { ROOMS_NAMES, ROOMS_TITLE } from '../Room.types';
import { createRoomTile, createTileLink } from '../../Tiles/utils';
import image from '@/assets/sprites/rooms/mining.png';

export const MINING_INFO = {
  tileNumber: 8,
  image,
  NAME: ROOMS_NAMES.MINING,
  TITLE: ROOMS_TITLE.MINING,
  PRICE: {
    STATIC_ENERGY: 100,
  },
  BENEFIT: {
    ENERGY: 5,
  },
  SLOTS: {
    DRONE: 2,
  },
};

export const MINING = createTileLink(createRoomTile, {
  start: 25,
  num: MINING_INFO.tileNumber,
});
