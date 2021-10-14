import { InputRule } from '../../components/Form/Input/Input.types';

export const notEmptyRule: InputRule = {
  rule: RegExp(/^.{1,}$/),
  message: 'Поле не может быть пустым',
};
