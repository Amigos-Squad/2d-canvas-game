import { useMemo, useState } from 'react';

export function useForm<T>(init: T): {
  form: T;
  onChange: (event: React.FormEvent<unknown>) => void;
  changeSeveral: (fields: T) => void;
  fullChange: (fields: T) => void;
  reset: () => void;
  isChanged: boolean;
  rewriteInit: (newInit: T) => void;
} {
  const [fixedInit, rewriteInit] = useState(init);
  const [form, changeFormField] = useState(init);

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

  return {
    form,
    onChange,
    changeSeveral,
    fullChange,
    reset,
    isChanged,
    rewriteInit,
  };
}
