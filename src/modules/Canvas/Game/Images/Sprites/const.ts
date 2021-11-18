export enum SPRITE_CONST {
  DEFAULT_WIDTH = 128,
  DEFAULT_HEIGHT = 128,
}

export enum ANIMATION_CONST {
  DEFAULT_WIDTH = 128,
  DEFAULT_HEIGHT = 128,
}

export enum SPRITE_SHEETS {
  ENVIRONMENT = 'ENVIRONMENT',
  GROUND = 'GROUND',
  ROOM = 'ROOM',
  CHARACTER = 'CHARACTER',
  BUILD_PLACE = 'BUILD_PLACE',
  SPACESHIP = 'SPACESHIP',
  BULLET = 'BULLET',
}

/* [width, height] */
export const SPRITE_SHEETS_SIZE: Record<SPRITE_SHEETS, [number, number]> = {
  [SPRITE_SHEETS.ENVIRONMENT]: [512, 128],
  [SPRITE_SHEETS.GROUND]: [512, 128],
  [SPRITE_SHEETS.ROOM]: [1280, 1280],
  [SPRITE_SHEETS.CHARACTER]: [1280, 1280],
  [SPRITE_SHEETS.BUILD_PLACE]: [384, 256],
  [SPRITE_SHEETS.SPACESHIP]: [128, 128],
  [SPRITE_SHEETS.BULLET]: [256, 256],
};

export const SPRITE_SIZE: Record<SPRITE_SHEETS, [number, number]> = {
  [SPRITE_SHEETS.ENVIRONMENT]: [128, 128],
  [SPRITE_SHEETS.GROUND]: [128, 128],
  [SPRITE_SHEETS.ROOM]: [128, 128],
  [SPRITE_SHEETS.CHARACTER]: [256, 256],
  [SPRITE_SHEETS.BUILD_PLACE]: [128, 128],
  [SPRITE_SHEETS.SPACESHIP]: [200, 200],
  [SPRITE_SHEETS.BULLET]: [1200, 1200],
};
