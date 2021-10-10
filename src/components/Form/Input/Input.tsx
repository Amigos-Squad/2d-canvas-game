import React, { ReactElement, memo, useState } from 'react';
import './Input.scss';
import { Props } from './Input.types';

export const Input = memo(
  ({ onChange, value, label, horizontal, rules, ...rest }: Props): ReactElement => {
    
    const [message, setMessage] = useState<string | undefined>()
    const handleRules = () => {
      if (!rules) {
        return;
      }
      setMessage(rules.find(x => !x.rule.test(value))?.message)
    }

    return (
      <label className={`input ${horizontal ? 'input_horizontal' : ''}`}>
        <div className="input__label">{label}</div>
        <input
          className="input__field"
          onChange={onChange}
          onBlur={handleRules}
          value={value}
          {...rest}
        />
        <div className="input_error">{message}</div>
      </label>
    )
  });
