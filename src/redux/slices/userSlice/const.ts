import { UserSliceState } from './userSlice.types';

export const enum LOAD_STATUS {
  PENDING = '/pending',
  REJECTED = '/rejected',
  FULFILLED = '/fulfilled',
  IDLE = '/idle',
}

export const initialState: UserSliceState = {
  user: undefined,
  isLoaded: false,
  status: LOAD_STATUS.IDLE,
  errorMessage: '',
};
