import { useState } from 'react';

export function useForm<T>(
  init: T
): [
  T,
  (event: React.FormEvent<HTMLInputElement>) => void,
  (fields: T) => void
] {
  const [form, changeFormField] = useState(init);

  function onChange(event: React.FormEvent<HTMLInputElement>) {
    const { name, value } = event.target as HTMLInputElement;

    changeFormField({ ...form, [name]: value });
  }

  function changeSeveral(fields: T) {
    changeFormField({ ...form, ...fields });
  }

  return [form, onChange, changeSeveral];
}
