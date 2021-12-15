import { ROOMS_NAMES, ROOMS_TITLE } from '../Room.types';
import { createRoomTile, createTileLink } from '../../Tiles/utils';
import image from '@/assets/sprites/rooms/port.png';

export const SPACEPORT_INFO = {
  tileNumber: 9,
  image,
  NAME: ROOMS_NAMES.SPACEPORT,
  TITLE: ROOMS_TITLE.SPACEPORT,
  PRICE: {
    STATIC_ENERGY: 10,
  },
  BENEFIT: {
    ENERGY: 5,
  },
  SLOTS: {
    DRONE: 0,
  },
};

export const SPACEPORT = createTileLink(createRoomTile, {
  start: 31,
  num: SPACEPORT_INFO.tileNumber,
});
