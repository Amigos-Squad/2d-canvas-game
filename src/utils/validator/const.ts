export enum VALIDATION_RULES {
  EMAIL = 'email',
  PASSWORD = 'password',
  PHONE = 'phone',
  REQUIRED = 'required',
  DUPLICATE = 'duplicate',
  MIN_SIZE = 'min',
}

export const ERROR_MESSAGES: Record<VALIDATION_RULES, string> = {
  [VALIDATION_RULES.EMAIL]: 'Incorrect format',
  [VALIDATION_RULES.PASSWORD]: 'Password incorrect',
  [VALIDATION_RULES.PHONE]: 'Incorrect format',
  [VALIDATION_RULES.REQUIRED]: 'This field is required',
  [VALIDATION_RULES.DUPLICATE]: 'Password and confirm password does not match',
  [VALIDATION_RULES.MIN_SIZE]: 'Incorrect size',
};

export const VALIDATION_REG_EXP = {
  [VALIDATION_RULES.EMAIL]:
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  [VALIDATION_RULES.PASSWORD]:
    /(?=[#$-/:-?{-~!"^_`[\]a-zA-Z]*([0-9#$-/:-?{-~!"^_`[\]]))(?=[#$-/:-?{-~!"^_`[\]a-zA-Z0-9]*[a-zA-Z])[#$-/:-?{-~!"^_`[\]a-zA-Z0-9]{4,}/,
  [VALIDATION_RULES.PHONE]: /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/,
};
