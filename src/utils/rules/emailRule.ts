import { InputRule } from '../../components/Form/Input/Input.types';

export const emailRule: InputRule = {
  rule: RegExp(/^.+@.+\.[a-zA-Z]{2,3}$/),
  message: 'Email должен соответствовать шаблону',
};
