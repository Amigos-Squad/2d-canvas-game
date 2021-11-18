import { Generator, Lift } from '.';
import { GENERATOR_INFO } from './Generator';
import { LIFT_INFO } from './Lift';
import { Mining } from './Mining';
import { MINING_INFO } from './Mining/const';
import { ROOMS_NAMES } from './Room.types';
import { Spaceport } from './Spaceport';
import { SPACEPORT_INFO } from './Spaceport/const';
import { Workshop, WORKSHOP_INFO } from './Workshop';

export const ROOMS_INSTANCE = new Map([
  [ROOMS_NAMES.LIFT, Lift],
  [ROOMS_NAMES.GENERATOR, Generator],
  [ROOMS_NAMES.MINING, Mining],
  [ROOMS_NAMES.SPACEPORT, Spaceport],
  [ROOMS_NAMES.WORKSHOP, Workshop],
]);

export const ROOMS_STORE = new Map([
  [ROOMS_NAMES.LIFT, LIFT_INFO],
  [ROOMS_NAMES.GENERATOR, GENERATOR_INFO],
  [ROOMS_NAMES.MINING, MINING_INFO],
  [ROOMS_NAMES.SPACEPORT, SPACEPORT_INFO],
  [ROOMS_NAMES.WORKSHOP, WORKSHOP_INFO],
]);
