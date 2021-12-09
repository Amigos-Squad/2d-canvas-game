import { TOAST_TYPES } from './const';

export type ToastConfig = {
  type: TOAST_TYPES;
  time: 3000 | 4000 | 5000 | 10000;
  message: string;
};
