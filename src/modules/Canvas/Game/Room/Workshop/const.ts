import { ROOMS_NAMES, ROOMS_TITLE } from '../Room.types';
import { createRoomTile, createTileLink } from '../../Tiles/utils';
import image from '@/assets/sprites/rooms/workshop.png';

export const WORKSHOP_INFO = {
  tileNumber: 7,
  image,
  NAME: ROOMS_NAMES.WORKSHOP,
  TITLE: ROOMS_TITLE.WORKSHOP,
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

export const WORKSHOP = createTileLink(createRoomTile, {
  start: 19,
  num: WORKSHOP_INFO.tileNumber,
});
