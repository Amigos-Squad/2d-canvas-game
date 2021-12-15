import React, { ReactElement, memo } from 'react';
import block from 'bem-cn-lite';
import type { TextareaProps } from './Textarea.types';
import '../Input/Input.scss';
import './Textarea.scss';

const inputLabel = block('input');
const input = block('input__textarea');
const inputError = block('input__error');

export const Textarea = memo(
  ({
    onChange,
    value,
    label,
    error = '',
    horizontal,
    name,
    ...rest
  }: TextareaProps): ReactElement => (
    <label className={inputLabel({ horizontal })}>
      <div className="input__label">{label}</div>
      <div className="input__container">
        <textarea
          className={input({ error: Boolean(error.length) })}
          onChange={onChange}
          value={value}
          name={name}
          {...rest}
        />

        <div className={inputError({ error: Boolean(error.length) })}>
          {error}
        </div>
      </div>
    </label>
  )
);
