import { Game } from '../Game';
import { Resources } from '../Resources';

export abstract class Scene {
  game: Game;

  public resources?: Resources;
  
  availableBuildings?: any;

  constructor(game: Game) {
    this.game = game;
  }

  abstract render(time: number): void;
}
