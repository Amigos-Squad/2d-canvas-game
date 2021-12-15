import { createRoomTile } from '../../Tiles/utils';
import { ROOMS_NAMES, ROOMS_TITLE } from '../Room.types';
import image from '@/assets/sprites/rooms/lift.png';

export const LIFT = {
  lift_top_left: createRoomTile({ spriteIndex: 13, isAllowVerticalMove: true }),
  lift_top_center: createRoomTile({
    spriteIndex: 14,
    isAllowVerticalMove: true,
  }),
  lift_top_right: createRoomTile({
    spriteIndex: 15,
    isAllowVerticalMove: true,
  }),
  lift_bottom_left: createRoomTile({
    spriteIndex: 16,
    isAllowVerticalMove: true,
  }),
  lift_bottom_center: createRoomTile({
    spriteIndex: 17,
    isAllowVerticalMove: true,
  }),
  lift_bottom_right: createRoomTile({
    spriteIndex: 18,
    isAllowVerticalMove: true,
  }),
};

export const LIFT_INFO = {
  image,
  NAME: ROOMS_NAMES.LIFT,
  TITLE: ROOMS_TITLE.LIFT,
  PRICE: {
    STATIC_ENERGY: 5,
  },
};
