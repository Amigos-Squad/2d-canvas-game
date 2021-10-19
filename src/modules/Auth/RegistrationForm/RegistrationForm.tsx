import React, { FormEvent, memo, ReactElement } from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '@/components';
import { Input } from '@/components/Form';
import { IRegistrationForm } from '@/modules';
import { converter, useForm } from '@/utils';
import { signUp } from '@/redux';
import '../Auth.scss';

export const RegistrationForm = memo((): ReactElement => {
  const dispatch = useDispatch();
  const { form, onChange } = useForm<IRegistrationForm>({
    firstName: '',
    secondName: '',
    email: '',
    login: '',
    password: '',
    phone: '',
  });

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    dispatch(signUp(converter.convertCamelToSnakeCase(form)));
  };

  return (
    <form onSubmit={onSubmit} className="authorization__form">
      <div className="authorization__form-body">
        <Input
          value={form.firstName}
          onChange={onChange}
          label="First name"
          name="firstName"
          required
        />
        <Input
          value={form.secondName}
          onChange={onChange}
          label="Second name"
          name="secondName"
          required
        />
        <Input
          value={form.email}
          onChange={onChange}
          label="Email"
          name="email"
          type="email"
          required
        />
        <Input
          value={form.login}
          onChange={onChange}
          label="Login"
          name="login"
          required
        />
        <Input
          value={form.password}
          onChange={onChange}
          label="Password"
          name="password"
          type="password"
          required
        />
        <Input
          value={form.phone}
          onChange={onChange}
          label="Phone"
          name="phone"
          type="tel"
          required
        />
      </div>

      <footer className="btn-block">
        <Button type="submit" onClick={onSubmit}>
          REGISTER
        </Button>
      </footer>
    </form>
  );
});
