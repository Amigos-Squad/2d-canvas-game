import React from 'react';
import { Character } from '../Character';
import { Constructing } from '../Tiles';
import { Scene } from './Scene';
import { EVENT_BUS_EVENTS, Game } from '..';
import { GameMap } from '../GameMap';
import { SavedState } from '../Game.types';
import { Resources } from '../Resources';
import { Room, ROOMS_STORE, CommandPost } from '../Room';

export class HomeBase extends Scene {
  gameMap: GameMap;

  protected character: Character;

  protected constructing: Constructing;

  protected rooms: Room[];

  public resources: Resources;

  availableBuildings: typeof ROOMS_STORE;

  ongoingAction: null | Constructing = null;

  constructor(game: Game, savedGame: SavedState) {
    super(game);
    const { gameMap, сharacter } = savedGame;
    const { eventBus } = game;

    const commandPost = new CommandPost();

    this.rooms = [commandPost];
    this.constructing = new Constructing(this);
    this.character = new Character(this, сharacter!);
    this.gameMap = new GameMap(this, gameMap, commandPost);
    this.resources = new Resources(this);
    this.availableBuildings = ROOMS_STORE;

    eventBus.on(EVENT_BUS_EVENTS.MOUSE_CLICK, this.click);
    eventBus.on(EVENT_BUS_EVENTS.ROOM_SELECTED, this.constructing.setRoom);
    eventBus.on(EVENT_BUS_EVENTS.ESCAPE, this.constructing.clearRoom);
  }

  click = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    const { y: offsetTop } = (
      event.target as HTMLCanvasElement
    ).getBoundingClientRect();
    const canvasY = event.pageY - offsetTop;

    const { indexX, indexY } = this.gameMap.findTile(event.pageX, canvasY);

    if (this.ongoingAction) {
      this.ongoingAction.handleClick(indexX, indexY);
    }
  };

  clearOngoingAction = () => {
    if (this.ongoingAction) {
      this.ongoingAction.stopAction();
      this.ongoingAction = null;
    }
  };

  updateRooms = (room: Room) => {
    this.rooms.push(room);
  };

  get getResources() {
    return this.resources
  }

  render(time: number) {
    this.constructing.update(this.gameMap.mapArray);
    this.gameMap.render();
    this.character.render();
    this.resources.render(time);
  }
}
