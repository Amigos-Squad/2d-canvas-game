import { GameInfo } from '../GameInterface';

export type IStatusPayload = {
  stateKey: keyof GameInfo;
  payload: EnergyState;
};

export type EnergyState = {
  energy: number;
  block: number;
  spend: number;
};
