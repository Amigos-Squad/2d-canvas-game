import { Game } from '../Game';
import { EnergyState } from '../Game/Statuses.types';

export type Props = {
  game: Game | null;
  info: GameInfo;
  restart: () => void;
};

export type GameInfo = {
  day: number;
  energyState: EnergyState;
  drones: {
    total: number;
    free: number;
  };
  isGameOver: boolean;
};
