import React, { ReactElement, memo } from 'react';
import type { TextareaProps } from './Textarea.types';
import '../Input/Input.scss';
import './Textarea.scss';

export const Textarea = memo(
  ({ onChange, value, label, ...rest }: TextareaProps): ReactElement => (
    <label className="input">
      <div className="input__label">{label}</div>
      <textarea
        className="input__textarea"
        onChange={onChange}
        value={value}
        {...rest}
      />
    </label>
  )
);
