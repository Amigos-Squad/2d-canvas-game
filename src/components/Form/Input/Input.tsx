import React, { ReactElement, memo } from 'react';
import block from 'bem-cn-lite';
import { Props } from './Input.types';
import './Input.scss';

const inputLabel = block('input');
const input = block('input__field');
const inputError = block('input__error');

export const Input = memo(
  ({
    onChange,
    value,
    label,
    horizontal,
    name,
    type,
    error = '',
  }: Props): ReactElement => {
    return (
      <label className={inputLabel({ horizontal })}>
        <div className="input__label">{label}</div>
        <div className="input__container">
          <input
            className={input({ error: Boolean(error.length) })}
            onChange={onChange}
            value={value}
            name={name}
            type={type}
          />
          <div className={inputError({ error: Boolean(error.length) })}>
            {error}
          </div>
        </div>
      </label>
    );
  }
);
