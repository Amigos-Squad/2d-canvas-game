import React, { ReactElement, memo } from 'react';
import { Auth, Page, RegistrationForm } from '@/modules';

export const Registration = memo(
  (): ReactElement => (
    <Page>
      <Auth>
        <RegistrationForm />
      </Auth>
    </Page>
  )
);
