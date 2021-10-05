import React from 'react';
import { Character } from '../Character';
import { Constructing } from '../Tiles';
import { Scene } from './Scene';
import { Game } from '..';
import { GameMap } from '../GameMap';
import { SavedState } from '../Game.types';

export class HomeBase extends Scene {
  gameMap: GameMap;

  protected character: Character;

  protected constructing: Constructing = new Constructing();

  constructor(game: Game, savedGame: SavedState) {
    super(game);
    const { gameMap, сharacter } = savedGame;

    this.character = new Character(this, сharacter);
    this.gameMap = new GameMap(this, gameMap);
  }

  click = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    const { y: offsetTop } = (
      event.target as HTMLCanvasElement
    ).getBoundingClientRect();
    const canvasY = event.pageY - offsetTop;

    const { x, y } = this.gameMap.findTile(event.pageX, canvasY);
    this.constructing.handleClick(x, y, this.gameMap.mapArray);
  };

  render() {
    this.constructing.update(this.gameMap.mapArray);
    this.gameMap.render();
    this.character.render();
  }

  setBuilding(roomName?: string) {
    if (roomName) {
      this.constructing.room = this.game.statuses.building[roomName];
    }
  }
}
