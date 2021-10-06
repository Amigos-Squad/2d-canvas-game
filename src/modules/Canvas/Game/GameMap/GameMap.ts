import { SpriteSheets, SPRITE_SHEETS } from '../Images';
import { HomeBase } from '../Scenes';
import { Screen } from '../Screen';
import { Tile, TILES } from '../Tiles';
import { GameTileMap, RawGameMap } from './GameMap.types';

export class GameMap {
  static CONST = {
    HEADER_HEIGHT: 50,
  };

  protected sprites: SpriteSheets;

  scene: HomeBase;

  mapArray: GameTileMap = [];

  constructor(scene: HomeBase, gameMap: RawGameMap) {
    this.scene = scene;

    this.sprites = new SpriteSheets(
      [
        SPRITE_SHEETS.GROUND,
        SPRITE_SHEETS.ENVIRONMENT,
        SPRITE_SHEETS.ROOM,
        SPRITE_SHEETS.BUILD_PLACE,
      ],
      scene.game.screen
    );

    this.loadMap(gameMap);
  }

  loadMap(mapArray: RawGameMap) {
    this.mapArray = mapArray.map((y, indexY) =>
      y.map((x, indexX) => new Tile(TILES.get(x), indexY, indexX))
    );
  }

  findTile = (pageX: number, pageY: number) => {
    const { cellSize } = this.scene.game.screen;
    const x = Math.floor(pageX / cellSize);
    const y = Math.floor(pageY / cellSize);

    return this.mapArray[y][x];
  };

  render() {
    const { game } = this.scene;
    this.draw(game.screen);
  }

  draw = (screen: Screen) => {
    for (let y = 0; y < this.mapArray.length; y += 1) {
      for (let x = 0; x < this.mapArray[y].length; x += 1) {
        this.mapArray[y][x].update(screen.cellSize);
        this.mapArray[y][x].draw(screen.context, this.sprites.groups);
      }
    }
  };
}
