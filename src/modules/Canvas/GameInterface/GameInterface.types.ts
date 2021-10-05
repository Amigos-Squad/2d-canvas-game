import { Game } from '../Game';

export type Props = {
  game: Game | null;
  info: GameInfo;
};

export type GameInfo = {
  day: number;
};
