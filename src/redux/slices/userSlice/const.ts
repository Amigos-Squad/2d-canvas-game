import { UserSliceState } from './userSlice.types';

export const AVATAR_LINK = 'https://ya-praktikum.tech/api/v2/resources/';

export enum LOAD_STATUS {
  PENDING = '/pending',
  REJECTED = '/rejected',
  FULFILLED = '/fulfilled',
  IDLE = '/idle',
}

export const initialState: UserSliceState = {
  user: undefined,
  userAvatar: '',
  isLoaded: false,
  status: LOAD_STATUS.IDLE,
  errorMessage: '',
};
