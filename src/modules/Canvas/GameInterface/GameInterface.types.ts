import { Game } from '../Game';

export type Props = {
  game: Game | null;
  gameInfo: GameInfo;
};

export type GameInfo = {
  day: number;
};
