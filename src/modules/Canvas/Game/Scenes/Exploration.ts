import React from 'react';

import { Constructing } from '../Tiles';
import { Scene } from './Scene';
import { EVENT_BUS_EVENTS, Game } from '..';
import { GameMap } from '../GameMap';
import { SavedState } from '../Game.types';
import { Room, CommandPost } from '../Room';
import { Spaceship } from '../Spaceship';
import { Bullet } from '../Bullet';
import { Character } from '../Character';
import { BASE_CHARACTER } from '../Spaceship/const';
import { IExplorationPayload } from '../Statuses.types';
import { EventBus } from '@/utils';
// import { BASE_CHARACTER } from '../Spaceship/const';

export class Exploration extends Scene {
  gameMap: GameMap;

  eventBus: EventBus<any>;

  prevScene: Scene;

  interval: NodeJS.Timer;

  private explorationPrize: number;

  public character: Character;

  public bullets: Bullet[] = [];

  public spaceships: Spaceship[] = [];

  // availableBuildings: typeof ROOMS_STORE;

  ongoingAction: null | Constructing = null;

  countdown: number = 30;

  hp: number = 3;

  constructor(game: Game, savedGame: SavedState, prevScene: Scene, explorationPrize: number) {
    super(game);
    const { gameMap } = savedGame;
    const { eventBus } = game;

    const commandPost = new CommandPost();

    this.prevScene = prevScene;
    this.eventBus = eventBus;
    this.explorationPrize = explorationPrize
    this.gameMap = new GameMap(this, gameMap, commandPost);
    this.spaceships = [
      new Spaceship(this, {
        tileX: 1,
        tileY: 1
      }),
      new Spaceship(this, {
        tileX: 16,
        tileY: 1
      }),
      new Spaceship(this, {
        tileX: 31,
        tileY: 1
      })
    ];

    this.character = new Character(this, BASE_CHARACTER);
    eventBus.on(EVENT_BUS_EVENTS.MOUSE_CLICK, this.click);

    this.emitInfoChanges();
    this.interval = setInterval(() => {
      this.countdown -= 1;
      this.emitInfoChanges()
      if (this.countdown === 0) {
        this.explorationComplete(this.explorationPrize);
      }
    }, 1000);
  }

  emitInfoChanges = () => {
    this.eventBus.emit(EVENT_BUS_EVENTS.ENERGY_CHANGE, {
      stateKey: 'explorationInfo',
      payload: {
        time: this.countdown,
        hp: this.hp,
      },
    } as IExplorationPayload);
    if (this.hp === 0) {
      this.explorationComplete();
    }
  }

  explorationComplete = (prize: number = 0) => {
    this.spaceships = [];
    this.bullets = [];
    clearInterval(this.interval);
    this.eventBus.emit(EVENT_BUS_EVENTS.ENERGY_CHANGE, {
      stateKey: 'explorationInfo',
      payload: undefined,
    } as IExplorationPayload);
    this.game.screen.clear()
    this.game.currentScene = this.prevScene
    this.game.currentScene.resources?.energy.addEnergy(prize)
  }

  addBullet = (bullet: Bullet) => {
    this.bullets.push(bullet);
  }

  removeBullet = (bullet: Bullet) => {
    this.bullets.splice(this.bullets.indexOf(bullet), 1);
  }

  removeSpaceship = (spaceship: Spaceship) => {
    this.spaceships.splice(this.spaceships.indexOf(spaceship), 1);
    if (this.spaceships.length === 0) {
      this.explorationComplete(this.explorationPrize + this.countdown);
    }
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
    // this.rooms.push(room);
  };

  render(time: number) {
    // this.constructing.update(this.gameMap.mapArray);
    this.game.screen.clear();
    this.gameMap.render();
    this.character.render();
    this.spaceships.forEach(spaceship => {
      spaceship.render();
    });
    this.bullets.forEach(bullet => {
      bullet.render()
    })
    // this.character.render();
    // this.resources.render(time);
  }
}
