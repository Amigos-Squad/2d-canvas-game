import { useState } from 'react';

export function useForm<T>(init: T): {
  form: T;
  onChange: (event: React.FormEvent<unknown>) => void;
  changeSeveral: (fields: T) => void;
  fullChange: (fields: T) => void;
  reset: () => void;
} {
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
  }

  function reset() {
    changeFormField(init);
  }

  return { form, onChange, changeSeveral, fullChange, reset };
}
