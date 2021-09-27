import { Kitchen, Ladder } from './Constructing';

export const GAME_CONST = {
  CELL_IN_PAGE: 32,
  START_FRAME: 0,
  END_FRAME: 60,
  FRAME_INCREASE: 1,
  START_CITIZEN: {
    COUNT: 2,
    X: 16,
    Y: 8,
  },
  BASE_BUILDINGS: {
    LADDER: new Ladder(),
    KITCHEN: new Kitchen(),
  },
};
