import { createRoomTile } from '../../utils';

const createLift = (function unnamed() {
  const data = { isAllowVerticalMove: true };
  return function create(index: number) {
    return createRoomTile({ spriteIndex: index, ...data });
  };
})();

export const LIFT = {
  lift_top_left: createLift(12),
  lift_top_right: createLift(13),
  lift_bottom_left: createLift(14),
  lift_bottom_right: createLift(15),
};
