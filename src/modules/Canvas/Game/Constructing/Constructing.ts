import { Cell, CELLS, GameMap } from '../Map';
import { Room } from './Room';

export class Constructing {
  room: Room | null = null;

  isBuildPlaceFound: boolean = false;

  handleClick(x: number, y: number, gameMap: GameMap) {
    if (this.room && gameMap[y][x].block.cellNum === CELLS.buildPlace.cellNum) {
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
          gameMap[y][x].block = gameMap[y][x].baseBlockType;
        }
      }
      this.isBuildPlaceFound = false;
    }
  }

  highlightPlaces = (gameMap: GameMap) => {
    const widthCell = this.room?.widthCell || 3;

    for (let y = 0; y < gameMap.length; y += 1) {
      for (let x = 0; x < gameMap[y].length; x += 1) {
        const { block } = gameMap[y][x];

        if (
          block.isRoom &&
          gameMap[y][x - widthCell] &&
          this.checkBuildPlace(gameMap[y], x - widthCell, x)
        ) {
          this.replaceBlockType(x - widthCell, x, gameMap[y]);
        }

        if (
          block.isRoom &&
          gameMap[y][x + widthCell] &&
          this.checkBuildPlace(gameMap[y], x + 1, x + widthCell)
        ) {
          this.replaceBlockType(x + 1, x + widthCell + 1, gameMap[y]);
        }
      }
    }
  };

  checkBuildPlace = (mapRow: Cell[], start: number, end: number) =>
    mapRow
      .slice(start, end)
      .every((cell) => cell.block.cellNum === CELLS.ground.cellNum);

  replaceBlockType = (start: number, end: number, row: Cell[]) => {
    for (let i = start; i < end; i += 1) {
      row[i].block = CELLS.buildPlace;
    }
  };

  handleBuildClick(x: number, y: number, gameMap: GameMap) {
    const widthCell = this.room?.widthCell || 3;
    let rows: [number, number] | [] = [];

    /* этаж = 2 блокам, четный нижний */
    if (y % 2 === 0) {
      rows = [y - 1, y];
    } else {
      rows = [y, y + 1];
    }

    let startX = x;

    while (startX) {
      const current = gameMap[y][startX - 1];

      if (!current || current.block.cellNum !== CELLS.buildPlace.cellNum) {
        break;
      } else {
        startX -= 1;
      }
    }

    rows.forEach((row) => {
      for (let i = startX; i < startX + widthCell; i += 1) {
        gameMap[row][i].block = this.room!.cellType;
        gameMap[row][i].baseBlockType = this.room!.cellType;
      }
    });

    this.room = null;
  }
}
