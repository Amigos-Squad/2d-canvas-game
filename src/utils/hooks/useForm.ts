import { FormEvent, useMemo, useState } from 'react';
import { Validator } from '..';

export function useForm<T, V = {}>(
  init: T,
  submitHandler?: (formData: T, e: FormEvent) => void,
  validationConfig?: V
): {
  form: T;
  isChanged: boolean;
  errors: Record<keyof T, string>;
  onChange: (event: React.FormEvent<unknown>) => void;
  changeSeveral: (fields: T) => void;
  fullChange: (fields: T) => void;
  reset: () => void;
  rewriteInit: (newInit: T) => void;
  onSubmit: (e: FormEvent, formData?: T) => void;
} {
  const [fixedInit, rewriteInit] = useState(init);
  const [form, changeFormField] = useState(init);
  const [errors, changeErrors] = useState(
    Object.keys(init).reduce((acc, key) => {
      acc[key as keyof T] = '';
      return acc;
    }, {} as Record<keyof T, string>)
  );
  const validator = new Validator<T>(validationConfig);

  function onChange<E>(event: React.FormEvent<E>) {
    const { name, value } = event.target as HTMLInputElement;
    changeFormField({ ...form, [name]: value });
  }

  function changeSeveral(fields: T) {
    changeFormField({ ...form, ...fields });
  }

  function fullChange(fields: T) {
    changeFormField(fields);
    rewriteInit(fields);
  }

  function reset() {
    changeFormField(fixedInit);
  }

  const isChanged = useMemo(() => {
    if (form) {
      return Object.entries(form).some(
        ([key, value]) => value !== fixedInit[key as keyof T]
      );
    }

    return false;
  }, [fixedInit, form]);

  const onSubmit = (e: FormEvent) => {
    const isValid = validator.validate(form, changeErrors);
    if (isValid && submitHandler) {
      submitHandler(form, e);
    }
  };

  return {
    form,
    isChanged,
    errors,
    onChange,
    changeSeveral,
    fullChange,
    reset,
    rewriteInit,
    onSubmit,
  };
}
