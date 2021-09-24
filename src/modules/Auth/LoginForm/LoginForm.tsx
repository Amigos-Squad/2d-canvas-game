import React, { memo, ReactElement } from 'react';
import { Input, Button } from '@/components';
import { useInput } from '@/utils';
import '../Auth.scss';

export const LoginForm = memo((): ReactElement => {
  const password = useInput('');
  const login = useInput('');

  const onLogin = () => {
    console.warn(password.value, login.value);
  };

  return (
    <>
      <Input {...password} label="Password" />
      <Input {...login} label="Login" />
      <div className="btn-block">
        <Button onClick={onLogin}>LOGIN</Button>
      </div>
    </>
  );
});
