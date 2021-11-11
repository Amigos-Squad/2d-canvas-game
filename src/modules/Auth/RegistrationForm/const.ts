import { ValidationForm, VALIDATION_RULES } from '@/utils';
import { IRegistrationForm } from '..';

export const DEFAULT_FORM_DATA = {
  firstName: '',
  secondName: '',
  email: '',
  login: '',
  password: '',
  phone: '',
};

export const DEFAULT_FORM_DATA_VALIDATION: ValidationForm<IRegistrationForm> = {
  firstName: [VALIDATION_RULES.REQUIRED],
  secondName: [VALIDATION_RULES.REQUIRED],
  email: [VALIDATION_RULES.REQUIRED, VALIDATION_RULES.EMAIL],
  login: [VALIDATION_RULES.REQUIRED],
  phone: [VALIDATION_RULES.REQUIRED, VALIDATION_RULES.PHONE],
  password: [VALIDATION_RULES.REQUIRED, VALIDATION_RULES.PASSWORD],
};
