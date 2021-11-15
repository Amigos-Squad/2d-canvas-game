import React, { FormEvent, memo, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Icon, ICONS } from '@/components';
import { Input } from '@/components/Form';
import { getYandexAuthLink, useForm } from '@/utils';
import type { ILoginForm } from '@/modules';
import { signIn } from '@/redux';
import { DEFAULT_FORM_DATA } from './const';
import '../Auth.scss';
import { Store } from '@/redux/store.type';

export const LoginForm = memo((): ReactElement => {
  const dispatch = useDispatch();
  const { serviceId } = useSelector((store: Store) => store.globalState);

  const { form, errors, onChange, onSubmit } = useForm<ILoginForm>(
    DEFAULT_FORM_DATA,
    submitHandler
  );

  function submitHandler(formData: ILoginForm, e: FormEvent) {
    e.preventDefault();
    dispatch(signIn(formData));
  }

  const oauthHandler = () => {
    window.location.href = getYandexAuthLink(serviceId);
  };

  return (
    <form onSubmit={onSubmit} className="authorization__form">
      <div className="authorization__form-body">
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
          LOGIN
        </Button>
        <div className="btn-block__oauth">
          <div className="btn-block__oauth-item">
            <Icon name={ICONS.Yandex} onClick={oauthHandler} />
          </div>
        </div>
      </footer>
    </form>
  );
});
