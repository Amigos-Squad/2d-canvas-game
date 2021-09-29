import { useState } from 'react';

export function useForm<T>(
  init: T
): [T, (event: React.FormEvent<HTMLInputElement>) => void] {
  const [form, changeFormField] = useState(init);

  function onChange(event: React.FormEvent<HTMLInputElement>) {
    const { name, value } = event.target as HTMLInputElement;

    changeFormField({ ...form, [name]: value });
  }

  return [form, onChange];
}
