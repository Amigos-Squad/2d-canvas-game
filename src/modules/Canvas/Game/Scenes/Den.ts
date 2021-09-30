import React from 'react';
import { Citizen } from '../Citizen';
import { GAME_CONST } from '../const';
import {
  BASE_GAME_MAP,
  GameMap,
  RawGameMap,
  Constructing,
  Tile,
  TILES,
} from '../Tiles';
import { Scene } from './Scene';
import { SpriteSheets } from '../Images/Sprites/SpriteSheets';
import { SPRITE_SHEETS } from '../Images';

export class Den extends Scene {
  static CONST = {
    HEADER_HEIGHT: 50,
  };

  private rawGameMap: RawGameMap = BASE_GAME_MAP;

  protected gameMap: GameMap = [];

  protected citizens: Citizen[] = [];

  protected constructing: Constructing = new Constructing();

  protected sprites: SpriteSheets = new SpriteSheets(
    [
      SPRITE_SHEETS.GROUND,
      SPRITE_SHEETS.ENVIRONMENT,
      SPRITE_SHEETS.ROOM,
      SPRITE_SHEETS.CITIZEN,
      SPRITE_SHEETS.BUILD_PLACE,
    ],
    this.game.screen
  );

  click = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    const { cellSize } = this.game.screen;
    const x = Math.floor(event.pageX / cellSize);
    const y = Math.floor((event.pageY - Den.CONST.HEADER_HEIGHT) / cellSize);

    this.constructing.handleClick(x, y, this.gameMap);
  };

  loadMap() {
    this.gameMap = this.rawGameMap.map((y) =>
      y.map((x) => new Tile(TILES.get(x)))
    );
  }

  loadCitizens() {
    const { context, cellSize } = this.game.screen;
    this.citizens = new Array(GAME_CONST.START_CITIZEN.COUNT)
      .fill(0)
      .map(
        (_, i) =>
          new Citizen(
            context,
            GAME_CONST.START_CITIZEN.X + i * 2,
            GAME_CONST.START_CITIZEN.Y,
            cellSize
          )
      );
  }

  init() {
    this.loadMap();
    this.loadCitizens();
  }

  render() {
    this.constructing.update(this.gameMap);
    this.drawMap();
    this.drawCitizens();
  }

  drawMap = () => {
    for (let y = 0; y < this.gameMap.length; y += 1) {
      for (let x = 0; x < this.gameMap[y].length; x += 1) {
        this.gameMap[y][x].update(x, y, this.game.screen.cellSize);
        this.gameMap[y][x].draw(this.game, this.sprites.groups);
      }
    }
  };

  drawCitizens() {
    for (let i = 0; i < this.citizens.length; i += 1) {
      if (this.citizens[i].health === 0) {
        this.citizens.splice(i, 1);
        this.game.statuses.changeCitizens(this.citizens.length);
      } else {
        this.citizens[i].update(
          this.game.frameCount,
          this.game.screen.cellSize
        );
        this.citizens[i].draw(this.sprites.groups);
      }
    }
  }

  setBuilding(roomName?: string) {
    if (roomName) {
      this.constructing.room = this.game.statuses.building[roomName];
    }
  }
}
