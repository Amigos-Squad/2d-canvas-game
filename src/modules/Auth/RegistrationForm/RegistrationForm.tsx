import React, { memo, ReactElement } from 'react';
import { Button, Input } from '@/components';
import { useInput } from '@/utils';
import '../Auth.scss';

export const RegistrationForm = memo((): ReactElement => {
  const email = useInput('');
  const login = useInput('');
  const password = useInput('');
  const passwordRepeat = useInput('');

  const onLogin = () => {
    console.warn(password.value, login.value);
  };

  return (
    <>
      <Input {...email} label="Email" />
      <Input {...login} label="Login" />
      <Input {...password} label="Password" />
      <Input {...passwordRepeat} label="Password" />

      <div className="btn-block">
        <Button onClick={onLogin}>REGISTER</Button>
      </div>
    </>
  );
});
