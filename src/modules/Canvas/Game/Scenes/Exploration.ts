import { Constructing } from '../Tiles';
import { Scene } from './Scene';
import { EVENT_BUS_EVENTS, Game } from '..';
import { SavedState } from '../Game.types';
import { Room } from '../Room';
import { Enemy } from '../Enemy';
import { Bullet } from '../Bullet';
import { IExplorationPayload } from '../Statuses.types';
import { EventBus } from '@/utils';
import { Spaceship } from '../Spaceship';

export class Exploration extends Scene {
  eventBus: EventBus<any>;

  prevScene: Scene;

  interval: NodeJS.Timer;

  private explorationPrize: number;

  public spaceship: Spaceship;

  public bullets: Bullet[] = [];

  public enemies: Enemy[] = [];

  // availableBuildings: typeof ROOMS_STORE;

  ongoingAction: null | Constructing = null;

  countdown: number = 30;

  hp: number = 3;

  constructor(game: Game, savedGame: SavedState, prevScene: Scene, explorationPrize: number) {
    super(game);
    const { eventBus } = game;

    this.prevScene = prevScene;
    this.eventBus = eventBus;
    this.explorationPrize = explorationPrize
    this.enemies = [
      new Enemy(this, {
        x: 150,
        y: 75
      }),
      new Enemy(this, {
        x: this.game.screen.screenWidth - 150,
        y: 75
      }),
      // new Spaceship(this, {
      //   tileX: 31,
      //   tileY: 1
      // })
    ];

    this.spaceship = new Spaceship(this, {
      x: this.game.screen.screenWidth / 2,
      y: this.game.screen.screenHeight - 100,
    });
    // eventBus.on(EVENT_BUS_EVENTS.MOUSE_CLICK, this.click);

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
    this.enemies = [];
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

  removeSpaceship = (enemy: Enemy) => {
    this.enemies.splice(this.enemies.indexOf(enemy), 1);
    if (this.enemies.length === 0) {
      this.explorationComplete(this.explorationPrize + this.countdown);
    }
  }

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
    this.spaceship.render();
    this.enemies.forEach(enemy => {
      enemy.render();
    });
    this.bullets.forEach(bullet => {
      bullet.render()
    })
    // this.character.render();
    // this.resources.render(time);
  }
}
