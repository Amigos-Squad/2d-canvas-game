import { VALIDATION_RULES } from '.';

export type ValidationConfig =
  | {
      type: VALIDATION_RULES;
      payload?: string | number;
    }
  | VALIDATION_RULES;

export type ValidationForm<F> = Record<keyof F, ValidationConfig[]>;
