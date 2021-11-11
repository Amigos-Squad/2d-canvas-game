import { SpriteSheets, SPRITE_SHEETS } from '../Images';
import { CommandPost } from '../Room';
import { Scene } from '../Scenes';
import { Screen } from '../Screen';
import { Tile, TILES } from '../Tiles';
import { GameTileMap, RawGameMap } from './GameMap.types';

export class GameMap {
  static CONST = {
    COMAND_POST_PREFIX: '3',
  };

  protected sprites: SpriteSheets;

  scene: Scene;

  commandPost: CommandPost;

  mapArray: GameTileMap = [];

  constructor(scene: Scene, gameMap: RawGameMap, commandPost: CommandPost) {
    this.scene = scene;
    this.commandPost = commandPost;

    this.sprites = new SpriteSheets(
      [
        SPRITE_SHEETS.GROUND,
        SPRITE_SHEETS.ENVIRONMENT,
        SPRITE_SHEETS.ROOM,
        SPRITE_SHEETS.BUILD_PLACE,
        SPRITE_SHEETS.SPACESHIP,
      ],
      scene.game.screen
    );

    this.loadMap(gameMap);
  }

  loadMap(mapArray: RawGameMap) {
    this.mapArray = mapArray.map((y, indexY) =>
      y.map((x, indexX) => {
        if (x.toString().startsWith(GameMap.CONST.COMAND_POST_PREFIX)) {
          return new Tile(TILES.get(x), indexY, indexX, this.commandPost);
        }

        return new Tile(TILES.get(x), indexY, indexX);
      })
    );
  }

  findTile = (pageX: number, pageY: number) => {
    const { cellSize } = this.scene.game.screen;
    const x = Math.floor(pageX / cellSize);
    const y = Math.floor(pageY / cellSize);

    return this.mapArray[y][x];
  };

  maxYWithOffset = (offset: number = 0) => {
    const { cellSize } = this.scene.game.screen;
    return (this.mapArray.length - 1 - offset) * cellSize
  }

  minYWithOffset = (offset: number = 0) => {
    const { cellSize } = this.scene.game.screen;
    return offset * cellSize
  }

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
