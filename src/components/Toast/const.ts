import { ToastConfig } from '.';
import { ICONS } from '..';

export enum TOAST_TYPES {
  WARNING = 'warning',
  INFO = 'info',
  SUCCESS = 'success',
}

export const ICON: Record<TOAST_TYPES, ICONS> = {
  [TOAST_TYPES.WARNING]: ICONS.Warning,
  [TOAST_TYPES.SUCCESS]: ICONS.Check,
  [TOAST_TYPES.INFO]: ICONS.Info,
};

export const getToastDefault = (
  config: Record<string, unknown> | null
): ToastConfig | null =>
  config
    ? {
        message: '',
        type: TOAST_TYPES.WARNING,
        time: 4000,
        ...config,
      }
    : config;
