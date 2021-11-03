import { ValidationForm, VALIDATION_RULES } from '@/utils';
import { ILoginForm } from '..';

export const DEFAULT_FORM_DATA = {
  password: '',
  login: '',
};

export const DEFAULT_FORM_DATA_VALIDATION: ValidationForm<ILoginForm> = {
  password: [VALIDATION_RULES.REQUIRED, VALIDATION_RULES.PASSWORD],
  login: [VALIDATION_RULES.REQUIRED, VALIDATION_RULES.PASSWORD],
};
