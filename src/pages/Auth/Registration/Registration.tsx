import React, { ReactElement, memo } from 'react';
import { Auth, Page, RegistrationForm } from '@/modules';

export const Registration = memo(
  (): ReactElement => (
    <Page isHeader={false}>
      <Auth>
        <RegistrationForm />
      </Auth>
    </Page>
  )
);
