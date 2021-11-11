import { GameInfo } from '../GameInterface';

export type IStatusPayload = {
  stateKey: keyof GameInfo;
  payload: EnergyState;
};

export type IExplorationPayload = {
  stateKey: keyof GameInfo;
  payload?: ExplorationInfo;
};

export type EnergyState = {
  energy: number;
  block: number;
  spend: number;
};

export type ExplorationInfo = {
  hp: number;
  time: number;
}