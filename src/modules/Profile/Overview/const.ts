import { VALIDATION_RULES } from '@/utils';
import {
  PasswordValidationConfig,
  ProfileValidationConfig,
} from './Overview.types';

export const DEFAULT_PROFILE = {
  email: '',
  firstName: '',
  login: '',
  displayName: '',
  secondName: '',
  phone: '',
  avatar: null,
};

export const DEFAULT_PROFILE_VALIDATION: ProfileValidationConfig = {
  email: [VALIDATION_RULES.REQUIRED, VALIDATION_RULES.EMAIL],
  firstName: [
    VALIDATION_RULES.REQUIRED,
    {
      type: VALIDATION_RULES.MIN_SIZE,
      payload: 3,
    },
  ],
  login: [
    VALIDATION_RULES.REQUIRED,
    {
      type: VALIDATION_RULES.MIN_SIZE,
      payload: 3,
    },
  ],
  displayName: [
    VALIDATION_RULES.REQUIRED,
    {
      type: VALIDATION_RULES.MIN_SIZE,
      payload: 3,
    },
  ],
  secondName: [
    VALIDATION_RULES.REQUIRED,
    {
      type: VALIDATION_RULES.MIN_SIZE,
      payload: 3,
    },
  ],
  phone: [VALIDATION_RULES.REQUIRED, VALIDATION_RULES.PHONE],
  avatar: [],
};

export const DEFAULT_PASSWORD = {
  newPasswordRepeat: '',
  newPassword: '',
  oldPassword: '',
};

export const DEFAULT_PASSWORD_VALIDATION: PasswordValidationConfig = {
  oldPassword: [VALIDATION_RULES.REQUIRED, VALIDATION_RULES.PASSWORD],
  newPassword: [VALIDATION_RULES.REQUIRED, VALIDATION_RULES.PASSWORD],
  newPasswordRepeat: [
    VALIDATION_RULES.REQUIRED,
    VALIDATION_RULES.PASSWORD,
    {
      type: VALIDATION_RULES.DUPLICATE,
      payload: 'newPassword',
    },
  ],
};
