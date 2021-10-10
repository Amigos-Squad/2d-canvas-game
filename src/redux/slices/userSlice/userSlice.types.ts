import { IUser } from '@/models';
import { LOAD_STATUS } from './const';

export type UserSliceState = {
  user?: IUser;
  userAvatar?: string;
  isLoaded: boolean;
  status: LOAD_STATUS;
  errorMessage: string;
};
