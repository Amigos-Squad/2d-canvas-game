export const BASE_CHARACTER = {
  tileX: 12,
  tileY: 8,
};

export const EXPLORATION_CHARACTER = {
  tileX: 16,
  tileY: 10,
};

export const BASE_SPACESHIP = {
  tileX: 16,
  tileY: 10,
};

export enum ACTIVITYS_TITLE {
  IDLE = 'IDLE',
}

export const SHAPE_ACTIVITYS = {
  [ACTIVITYS_TITLE.IDLE]: {
    cadres: [1],
    width: 128,
  },
};
