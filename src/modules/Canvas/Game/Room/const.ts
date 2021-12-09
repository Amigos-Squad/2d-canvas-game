import { Generator, Lift } from '.';
import { GENERATOR_INFO } from './Generator';
import { LIFT_INFO } from './Lift';
import { ROOMS_NAMES } from './Room.types';

export const ROOMS_INSTANCE = new Map([
  [ROOMS_NAMES.LIFT, Lift],
  [ROOMS_NAMES.GENERATOR, Generator],
]);

export const ROOMS_STORE = new Map([
  [ROOMS_NAMES.LIFT, LIFT_INFO],
  [ROOMS_NAMES.GENERATOR, GENERATOR_INFO],
]);
