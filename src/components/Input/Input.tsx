import React, { ReactElement, memo } from 'react';
import './Input.scss';
import { Props } from './Input.types';

export const Input = memo(
  ({ onChange, value, label, ...rest }: Props): ReactElement => (
    <div className="input">
      <label className="input__label">{label}</label>
      <input
        className="input__field"
        onChange={onChange}
        value={value}
        {...rest}
      />
    </div>
  )
);
