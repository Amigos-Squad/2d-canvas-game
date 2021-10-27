import React, { FormEvent, memo, ReactElement } from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '@/components';
import { Input } from '@/components/Form';
import { useForm } from '@/utils';
import type { ILoginForm } from '@/modules';
import { signIn } from '@/redux';
import { DEFAULT_FORM_DATA } from './const';
import '../Auth.scss';

export const LoginForm = memo((): ReactElement => {
  const dispatch = useDispatch();

  const { form, onChange, onSubmit } = useForm<ILoginForm>(
    DEFAULT_FORM_DATA,
    submitHandler
  );

  function submitHandler(formData: ILoginForm, e: FormEvent) {
    e.preventDefault();
    dispatch(signIn(formData));
  }

  return (
    <form onSubmit={onSubmit} className="authorization__form">
      <div className="authorization__form-body">
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
      </div>

      <footer className="btn-block">
        <Button type="submit" onClick={onSubmit}>
          LOGIN
        </Button>
      </footer>
    </form>
  );
});
