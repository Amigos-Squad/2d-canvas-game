import { useState } from 'react';

export function useForm<T>(
  init: T
): [T, (event: React.FormEvent<unknown>) => void, (fields: T) => void] {
  const [form, changeFormField] = useState(init);

  function onChange<E>(event: React.FormEvent<E>) {
    const { name, value } = event.target as HTMLInputElement;

    changeFormField({ ...form, [name]: value });
  }

  function changeSeveral(fields: T) {
    changeFormField({ ...form, ...fields });
  }

  return [form, onChange, changeSeveral];
}
