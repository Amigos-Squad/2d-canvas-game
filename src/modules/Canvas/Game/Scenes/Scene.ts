import { Game } from '..';

export abstract class Scene {
  game: Game;

  constructor(game: Game) {
    this.game = game;
  }

  init() {}

  render() {}
}
