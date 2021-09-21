import { GAME_CONST } from '../const';
import { Citizen } from './Citizen';

export const BASE_CITIZEN = new Array(GAME_CONST.START_CITIZEN_COUNT).fill(
  new Citizen()
);
