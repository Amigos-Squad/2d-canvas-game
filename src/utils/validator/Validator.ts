import { ValidationConfig, VALIDATION_RULES } from '.';
import { ERROR_MESSAGES, VALIDATION_REG_EXP } from './const';

export class Validator<T, V> {
  config: V;

  constructor(config: V) {
    this.config = config;
  }

  checks: Record<VALIDATION_RULES, Function> = {
    [VALIDATION_RULES.EMAIL]: (value: string) =>
      VALIDATION_REG_EXP.email.test(value),

    [VALIDATION_RULES.PASSWORD]: (value: string) =>
      VALIDATION_REG_EXP.password.test(value),

    [VALIDATION_RULES.PHONE]: (value: string) =>
      VALIDATION_REG_EXP.phone.test(value),

    [VALIDATION_RULES.REQUIRED]: (value: string) => value && value.trim(),

    [VALIDATION_RULES.MIN_SIZE]: (value: string, payload: number) =>
      value.toString().trim().length > payload,

    [VALIDATION_RULES.DUPLICATE]: (
      value: unknown,
      payload: string | number,
      form: T
    ) => value === form[payload as keyof T],
  };

  ckeckField = (rule: ValidationConfig, value: T[keyof T], form: T) => {
    let isValid = true;
    if (typeof rule === 'object' && rule.type === VALIDATION_RULES.DUPLICATE) {
      isValid = this.checks[rule.type](value, rule.payload, form);
    } else if (
      typeof rule === 'object' &&
      rule.type === VALIDATION_RULES.MIN_SIZE
    ) {
      isValid = this.checks[rule.type](value, rule.payload);
    } else if (typeof rule === 'string') {
      isValid = this.checks[rule](value);
    }

    return isValid;
  };

  validate(form: T, changeError: (errors: Record<keyof T, string>) => void) {
    let isFullValid = true;
    const keys = Object.keys(form);

    const errors = keys.reduce((acc, key) => {
      const value = form[key as keyof T];
      const rules: unknown = this.config[key as keyof V];

      if (rules) {
        for (let i = 0; i < (rules as VALIDATION_RULES[]).length; i += 1) {
          const rule = (rules as ValidationConfig[])[i];
          const isValid = this.ckeckField(rule, value, form);

          if (isValid) {
            acc[key as keyof T] = '';
          } else if (!acc[key as keyof T]) {
            isFullValid = false;
            acc[key as keyof T] =
              ERROR_MESSAGES[typeof rule === 'object' ? rule.type : rule];
          }
        }
      }

      return acc;
    }, {} as Record<keyof T, string>);

    changeError(errors);

    return isFullValid;
  }
}
