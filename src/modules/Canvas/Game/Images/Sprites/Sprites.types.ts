import { SpriteSheet, SPRITE_SHEETS } from '.';

export interface ISprite {
  image: HTMLImageElement;
  imageX: number;
  imageY: number;
  width: number;
  height: number;
}

export interface IAnimation extends Omit<ISprite, 'imageX' | 'imageY'> {
  animationFrames: { x: number; y: number }[];
  speed: number;
  repeat?: boolean;
  autorun?: boolean;
}

export type SpriteSheetGroup = Record<SPRITE_SHEETS, SpriteSheet>;
