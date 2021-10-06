import { Tile, TILES } from '.';
import { GameTileMap } from '../GameMap';
import { HomeBase } from '../Scenes';
import { BUILD_PLACE, TILE_TYPE } from './const';
import { Room } from './Room';

/* TODO Rewrite/refactoring */
export class Constructing {
  scene: HomeBase;

  room: Room | null = null;

  isBuildPlaceFound: boolean = false;

  constructor(scene: HomeBase) {
    this.scene = scene;
  }

  handleClick(x: number, y: number) {
    const { mapArray } = this.scene.gameMap;
    if (this.room && mapArray[y][x].data.type === TILE_TYPE.BUILD_PLACE) {
      this.handleBuildClick(x, y);
    }
  }

  update(gameMap: GameTileMap) {
    if (this.room && !this.isBuildPlaceFound) {
      this.highlightPlaces();
      this.isBuildPlaceFound = true;
    } else if (this.isBuildPlaceFound && !this.room) {
      for (let y = 0; y < gameMap.length; y += 1) {
        for (let x = 0; x < gameMap[y].length; x += 1) {
          gameMap[y][x].data = gameMap[y][x].baseData;
        }
      }
      this.isBuildPlaceFound = false;
    }
  }

  highlightPlaces = () => {
    const { mapArray } = this.scene.gameMap;
    const cellCount = this.room?.horizontalCellCount || 3;

    for (let y = 0; y < mapArray.length; y += 1) {
      for (let x = 0; x < mapArray[y].length; x += 1) {
        const { data } = mapArray[y][x];
        const isOdd = y % 2 !== 0;
        const leftOffset = x - cellCount;
        const rightOffset = x + cellCount;

        if (data.type === TILE_TYPE.ROOM) {
          if (
            data.isAllowVerticalMove &&
            !isOdd &&
            this.checkVertical(mapArray, y, x, rightOffset)
          ) {
            this.highlightVerticalPlaces(mapArray, y, x);
          }

          if (
            mapArray[y][leftOffset] &&
            this.checkBuildPlace(mapArray[y], leftOffset, x)
          ) {
            this.replaceBlockType(leftOffset, x, mapArray[y], isOdd);
          }

          if (
            mapArray[y][rightOffset] &&
            this.checkBuildPlace(mapArray[y], x + 1, rightOffset)
          ) {
            this.replaceBlockType(x + 1, rightOffset + 1, mapArray[y], isOdd);
          }
        }
      }
    }
  };

  checkBuildPlace = (mapRow: Tile[], start: number, end: number) =>
    mapRow
      .slice(start, end)
      .every((cell) => cell.data.type === TILE_TYPE.GROUND);

  checkVertical = (
    gameMap: GameTileMap,
    row: number,
    start: number,
    end: number
  ) =>
    gameMap[row]
      .slice(start, end)
      .every(
        (cell) =>
          cell.data.isAllowVerticalMove && cell.data.type !== TILE_TYPE.GROUND
      );

  replaceBlockType = (
    start: number,
    end: number,
    row: Tile[],
    isOdd: boolean
  ) => {
    if (Math.abs(start - end) === 2) {
      if (isOdd) {
        row[start].data = BUILD_PLACE.build_short_top_left;
        row[end - 1].data = BUILD_PLACE.build_short_top_right;
      } else {
        row[start].data = BUILD_PLACE.build_short_bottom_left;
        row[end - 1].data = BUILD_PLACE.build_short_bottom_right;
      }
    } else {
      const center = start + (Math.abs(start - end) - 2);

      for (let i = start; i < end; i += 1) {
        if (isOdd) {
          if (i === start) {
            row[i].data = BUILD_PLACE.build_top_left;
          } else if (i === end - 1) {
            row[i].data = BUILD_PLACE.build_top_right;
          } else if (i === center) {
            row[i].data = BUILD_PLACE.build_top_center;
          } else {
            row[i].data = BUILD_PLACE.build_top_center_empty;
          }
        } else if (!isOdd) {
          if (i === start) {
            row[i].data = BUILD_PLACE.build_bottom_left;
          } else if (i === end - 1) {
            row[i].data = BUILD_PLACE.build_bottom_right;
          } else if (i === center) {
            row[i].data = BUILD_PLACE.build_bottom_center;
          } else {
            row[i].data = BUILD_PLACE.build_bottom_center_empty;
          }
        }
      }
    }
  };

  highlightVerticalPlaces = (
    gameMap: GameTileMap,
    startY: number,
    startX: number
  ) => {
    gameMap[startY + 1][startX].data = BUILD_PLACE.build_short_top_left;
    gameMap[startY + 1][startX + 1].data = BUILD_PLACE.build_short_top_right;
    gameMap[startY + 2][startX].data = BUILD_PLACE.build_short_bottom_left;
    gameMap[startY + 2][startX + 1].data = BUILD_PLACE.build_short_bottom_right;
  };

  /* этаж = 2 блокам, четный нижний */
  handleBuildClick(x: number, y: number) {
    const topRow: number = y % 2 === 0 ? y - 1 : y;
    const startX = this.findStartX(x, y);
    this.applyShema(startX, topRow);
  }

  findStartX = (x: number, y: number) => {
    const { mapArray } = this.scene.gameMap;
    let startX = x;
    while (startX) {
      const current = mapArray[y][startX - 1];

      if (!current || current.data.type !== TILE_TYPE.BUILD_PLACE) {
        break;
      } else {
        startX -= 1;
      }
    }

    return startX;
  };

  applyShema = (startX: number, topRow: number) => {
    const { mapArray } = this.scene.gameMap;
    this.room?.scheme.forEach((tileNum: number[], index: number) => {
      for (let i = startX; i < startX + tileNum.length; i += 1) {
        mapArray[topRow + index][i].data = TILES.get(tileNum[i - startX])!;
        mapArray[topRow + index][i].baseData = TILES.get(tileNum[i - startX])!;
      }
    });

    this.room = null;
  };
}
