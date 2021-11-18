import { createRoomTile } from '../../Tiles/utils';
import { ROOMS_NAMES, ROOMS_TITLE } from '../Room.types';
import image from '@/assets/sprites/rooms/generator.png';

export const GENERATOR = {
  generator_top_left: createRoomTile({ spriteIndex: 7 }),
  generator_top_center: createRoomTile({ spriteIndex: 8 }),
  generator_top_right: createRoomTile({ spriteIndex: 9 }),
  generator_bottom_left: createRoomTile({ spriteIndex: 10 }),
  generator_bottom_center: createRoomTile({ spriteIndex: 11 }),
  generator_bottom_right: createRoomTile({ spriteIndex: 12 }),
};

export const GENERATOR_INFO = {
  image,
  NAME: ROOMS_NAMES.GENERATOR,
  TITLE: ROOMS_TITLE.GENERATOR,
  PRICE: {
    STATIC_ENERGY: 10,
  },
  BENEFIT: {
    ENERGY: 3,
  },
  SLOTS: {
    DRONE: 2,
  },
};
