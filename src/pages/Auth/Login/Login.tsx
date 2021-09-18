import React, { ReactElement, memo } from 'react';
import { Auth, LoginForm, Page } from '@/modules';

export const Login = memo(
  (): ReactElement => (
    <Page>
      <Auth>
        <LoginForm />
      </Auth>
    </Page>
  )
);
