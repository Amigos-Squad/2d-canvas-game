import React, { ReactElement, memo } from 'react';
import { Auth, LoginForm } from '@/modules';

export const Login = memo((): ReactElement => (
    <Auth>
      <LoginForm />
    </Auth>
  ));
