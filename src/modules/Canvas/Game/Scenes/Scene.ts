import { Game } from '../Game';

export abstract class Scene {
  game: Game;

  constructor(game: Game) {
    this.game = game;
  }

  abstract init(): void;

  abstract render(): void;
}
