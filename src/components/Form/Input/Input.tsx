import React, { ReactElement, memo } from 'react';
import './Input.scss';
import { Props } from './Input.types';

export const Input = memo(
  ({ onChange, value, label, horizontal, ...rest }: Props): ReactElement => (
    <label className={`input ${horizontal ? 'input_horizontal' : ''}`}>
      <div className="input__label">{label}</div>
      <input
        className="input__field"
        onChange={onChange}
        value={value}
        {...rest}
      />
    </label>
  )
);
