import { Game } from '..';

export abstract class Scene {
  game: Game;

  constructor(game: Game) {
    this.game = game;
  }
  /* eslint-disable */
  init() {}

  render() {}
}
