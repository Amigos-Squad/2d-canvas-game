import { IUser } from '@/models';
import { LOAD_STATUS } from './const';

export type UserSliceState = {
  user?: IUser;
  isLoggedIn: boolean;
  status: LOAD_STATUS;
  errorMessage: string;
};
