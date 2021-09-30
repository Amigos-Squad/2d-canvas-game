import { SPRITE_SHEETS, SPRITE_SHEETS_SIZE, SPRITE_SIZE } from '.';
import { Screen } from '../../Screen';
import { SpriteSheetGroup } from './Sprites.types';
import { SpriteSheet } from './SpriteSheet';

export class SpriteSheets {
  groups: SpriteSheetGroup;

  constructor(spriteSheets: SPRITE_SHEETS[], screen: Screen) {
    this.groups = spriteSheets.reduce((acc, sheet) => {
      acc[sheet] = new SpriteSheet(
        sheet,
        SPRITE_SHEETS_SIZE[sheet][0],
        SPRITE_SHEETS_SIZE[sheet][1],
        screen,
        SPRITE_SIZE[sheet][0],
        SPRITE_SIZE[sheet][1]
      );

      return acc;
    }, {} as SpriteSheetGroup);
  }
}
