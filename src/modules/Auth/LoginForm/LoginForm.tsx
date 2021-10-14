import React, { FormEvent, memo, ReactElement } from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '@/components';
import { Form, Input } from '@/components/Form';
import { useForm } from '@/utils';
import type { ILoginForm } from '@/modules';
import { signIn } from '@/redux';
import { notEmptyRule } from '@/utils/rules/notEmptyRule';
import '../Auth.scss';

export const LoginForm = memo((): ReactElement => {
  const dispatch = useDispatch();
  const { form, onChange } = useForm<ILoginForm>({
    password: '',
    login: '',
  });

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    dispatch(signIn(form));
  };

  return (
    <Form onSubmit={onSubmit} className="authorization__form">
      <div className="authorization__form-body">
        <Input
          value={form.login}
          onChange={onChange}
          label="Login"
          name="login"
          rules={[notEmptyRule]}
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
    </Form>
  );
});
