import { GameMap, Tile, TILES, Tiles } from '.';
import { BUILD_PLACE, TILE_TYPE } from './const';
import { Room } from './Room';

export class Constructing {
  room: Room | null = null;

  isBuildPlaceFound: boolean = false;

  handleClick(x: number, y: number, gameMap: GameMap) {
    if (this.room && gameMap[y][x].data.type === TILE_TYPE.BUILD_PLACE) {
      this.handleBuildClick(x, y, gameMap);
    }
  }

  update(gameMap: GameMap) {
    if (this.room && !this.isBuildPlaceFound) {
      this.highlightPlaces(gameMap);
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

  highlightPlaces = (gameMap: GameMap) => {
    const widthCell = this.room?.widthCell || 3;

    for (let y = 0; y < gameMap.length; y += 1) {
      for (let x = 0; x < gameMap[y].length; x += 1) {
        const { type } = gameMap[y][x].data;
        const isOdd = y % 2 !== 0;
        if (
          type === TILE_TYPE.ROOM &&
          gameMap[y][x - widthCell] &&
          this.checkBuildPlace(gameMap[y], x - widthCell, x)
        ) {
          this.replaceBlockType(x - widthCell, x, gameMap[y], isOdd);
        }

        if (
          type === TILE_TYPE.ROOM &&
          gameMap[y][x + widthCell] &&
          this.checkBuildPlace(gameMap[y], x + 1, x + widthCell)
        ) {
          this.replaceBlockType(x + 1, x + widthCell + 1, gameMap[y], isOdd);
        }
      }
    }
  };

  checkBuildPlace = (mapRow: Tile[], start: number, end: number) =>
    mapRow
      .slice(start, end)
      .every((cell) => cell.data.type === TILE_TYPE.GROUND);

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

  replaceBuildTile = (
    { start, end, empty, center }: Tiles,
    { startIndex, endIndex, centerIndex }: Record<string, number>,
    index: number,
    row: Tile
  ) => {
    if (index === startIndex) {
      row.data = start;
    } else if (index === endIndex) {
      row.data = end;
    } else if (index === centerIndex) {
      row.data = center;
    } else {
      row.data = empty;
    }
  };

  handleBuildClick(x: number, y: number, gameMap: GameMap) {
    let topRow: number = 0;

    /* этаж = 2 блокам, четный нижний */
    if (y % 2 === 0) {
      topRow = y - 1;
    } else {
      topRow = y;
    }

    let startX = x;

    while (startX) {
      const current = gameMap[y][startX - 1];

      if (!current || current.data.type !== TILE_TYPE.BUILD_PLACE) {
        break;
      } else {
        startX -= 1;
      }
    }

    this.room?.scheme.forEach((tileNum: number[], index: number) => {
      for (let i = startX; i < startX + tileNum.length; i += 1) {
        gameMap[topRow + index][i].data = TILES.get(tileNum[i - startX])!;
        gameMap[topRow + index][i].baseData = TILES.get(tileNum[i - startX])!;
      }
    });

    this.room = null;
  }
}
