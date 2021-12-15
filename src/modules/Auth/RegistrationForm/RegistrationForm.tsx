import React, { FormEvent, memo, ReactElement } from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '@/components';
import { Input } from '@/components/Form';
import { IRegistrationForm } from '@/modules';
import { converter, useForm } from '@/utils';
import { signUp } from '@/redux';
import '../Auth.scss';
import { DEFAULT_FORM_DATA, DEFAULT_FORM_DATA_VALIDATION } from './const';

export const RegistrationForm = memo((): ReactElement => {
  const dispatch = useDispatch();
  const { form, errors, onSubmit, onChange } = useForm<IRegistrationForm>(
    DEFAULT_FORM_DATA,
    submitHandler,
    DEFAULT_FORM_DATA_VALIDATION
  );

  function submitHandler(formData: IRegistrationForm, event: FormEvent) {
    event.preventDefault();
    dispatch(signUp(converter.convertCamelToSnakeCase(formData)));
  }

  return (
    <form onSubmit={onSubmit} className="authorization__form">
      <div className="authorization__form-body">
        <Input
          value={form.firstName}
          onChange={onChange}
          label="First name"
          name="firstName"
          error={errors.firstName}
          required
        />
        <Input
          value={form.secondName}
          onChange={onChange}
          label="Second name"
          name="secondName"
          error={errors.secondName}
          required
        />
        <Input
          value={form.email}
          onChange={onChange}
          label="Email"
          name="email"
          type="email"
          error={errors.email}
          required
        />
        <Input
          value={form.phone}
          onChange={onChange}
          label="Phone"
          name="phone"
          type="tel"
          error={errors.phone}
          required
        />
        <Input
          value={form.login}
          onChange={onChange}
          label="Login"
          name="login"
          error={errors.login}
          required
        />
        <Input
          value={form.password}
          onChange={onChange}
          label="Password"
          name="password"
          type="password"
          error={errors.password}
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
