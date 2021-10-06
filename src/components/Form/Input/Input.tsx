import React, { ReactElement, memo } from 'react';
import './Input.scss';
import { Props } from './Input.types';

export const Input = memo(
  ({ onChange, value, label, ...rest }: Props): ReactElement => (
    <label className="input">
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
