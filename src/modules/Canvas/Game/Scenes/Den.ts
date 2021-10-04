import React from 'react';
import { Character } from '../Character';
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
import { SPRITE_SHEETS, SpriteSheets } from '../Images';
import { Game } from '..';

export class Den extends Scene {
  static CONST = {
    HEADER_HEIGHT: 50,
  };

  private rawGameMap: RawGameMap = BASE_GAME_MAP;

  gameMap: GameMap = [];

  protected character: Character;

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

  constructor(game: Game) {
    super(game);
    this.character = new Character(
      GAME_CONST.START_CHARACTER.X,
      GAME_CONST.START_CHARACTER.Y,
      game
    );
  }

  click = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    const { x, y } = this.findCell(event.pageX, event.pageY);
    this.constructing.handleClick(x, y, this.gameMap);
  };

  findCell = (pageX: number, pageY: number) => {
    const { cellSize } = this.game.screen;
    const x = Math.floor(pageX / cellSize);
    const y = Math.floor((pageY - Den.CONST.HEADER_HEIGHT) / cellSize);

    return { x, y };
  };

  loadMap() {
    this.gameMap = this.rawGameMap.map((y) =>
      y.map((x) => new Tile(TILES.get(x)))
    );
  }

  /* load saved char */
  loadCharacter = () => {
    console.warn('load saved char');
  };

  init(gameState?: unknown) {
    if (gameState) {
      this.loadCharacter();
    } else {
      this.loadMap();
    }
  }

  render() {
    this.constructing.update(this.gameMap);
    this.drawMap();
    this.drawCharacter();
  }

  drawMap = () => {
    for (let y = 0; y < this.gameMap.length; y += 1) {
      for (let x = 0; x < this.gameMap[y].length; x += 1) {
        this.gameMap[y][x].update(x, y, this.game.screen.cellSize);
        this.gameMap[y][x].draw(this.game, this.sprites.groups);
      }
    }
  };

  drawCharacter() {
    const { frameCount, screen } = this.game;
    this.character.update(frameCount, screen.cellSize);
    this.character.draw(screen.context, this.sprites.groups);
  }

  setBuilding(roomName?: string) {
    if (roomName) {
      this.constructing.room = this.game.statuses.building[roomName];
    }
  }
}
