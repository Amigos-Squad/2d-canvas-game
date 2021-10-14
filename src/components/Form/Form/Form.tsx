import React, { ReactElement, memo, useState, FormEvent } from 'react';
import { Props } from './Form.types';

// const ValidationContext = React.createContext({})

export const Form = memo(
  ({ children, onSubmit, ...rest }: Props): ReactElement => {
    const [valid, setValid] = useState(true);

    /* eslint-disable */
    const validate = () => {
      if (Array.isArray(children)) {
        return children?.forEach((x) => {});
      }
      setValid(true);
    };
    validate();

    const validateOnSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      validate();
      if (onSubmit && valid) {
        onSubmit(e);
      }
    };

    return (
      <form {...rest} onSubmit={validateOnSubmit}>
        {children}
      </form>
    );
  }
);
