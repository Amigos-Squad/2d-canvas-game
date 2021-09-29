export enum SPRITE_CONST {
  DEFAULT_WIDTH = 128,
  DEFAULT_HEIGHT = 128,
}

export enum ANIMATION_CONST {
  DEFAULT_WIDTH = 128,
  DEFAULT_HEIGHT = 128,
}

export const enum SPRITE_SHEETS {
  ENVIRONMENT = 'ENVIRONMENT',
  GROUND = 'GROUND',
  ROOM = 'ROOM',
  CITIZEN = 'CITIZEN',
  BUILD_PLACE = 'BUILD_PLACE',
}

/* [width, height] */
export const SPRITE_SHEETS_SIZE: Record<SPRITE_SHEETS, [number, number]> = {
  [SPRITE_SHEETS.ENVIRONMENT]: [512, 128],
  [SPRITE_SHEETS.GROUND]: [128, 128],
  [SPRITE_SHEETS.ROOM]: [1280, 1280],
  [SPRITE_SHEETS.CITIZEN]: [6240, 420],
  [SPRITE_SHEETS.BUILD_PLACE]: [1536, 128],
};

export const SPRITE_SIZE: Record<SPRITE_SHEETS, [number, number]> = {
  [SPRITE_SHEETS.ENVIRONMENT]: [128, 128],
  [SPRITE_SHEETS.GROUND]: [128, 128],
  [SPRITE_SHEETS.ROOM]: [128, 128],
  [SPRITE_SHEETS.CITIZEN]: [520, 420],
  [SPRITE_SHEETS.BUILD_PLACE]: [128, 128],
};