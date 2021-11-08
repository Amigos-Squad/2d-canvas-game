import { createRoomTile } from '../../Tiles/utils';
import { ROOMS_NAMES, ROOMS_TITLE } from '../Room.types';

export const LIFT = {
  lift_top_left: createRoomTile({ spriteIndex: 12, isAllowVerticalMove: true }),
  lift_top_right: createRoomTile({
    spriteIndex: 13,
    isAllowVerticalMove: true,
  }),
  lift_bottom_left: createRoomTile({
    spriteIndex: 14,
    isAllowVerticalMove: true,
  }),
  lift_bottom_right: createRoomTile({
    spriteIndex: 15,
    isAllowVerticalMove: true,
  }),
};

export const LIFT_INFO = {
  NAME: ROOMS_NAMES.LIFT,
  TITLE: ROOMS_TITLE.LIFT,
  PRICE: {
    STATIC_ENERGY: 5,
  },
};
