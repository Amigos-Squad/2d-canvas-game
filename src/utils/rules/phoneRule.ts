import { InputRule } from '../../components/Form/Input/Input.types';

export const phoneRule: InputRule = {
  rule: RegExp(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/),
  message: 'Номер телефона должен соответствовать шаблону',
};
