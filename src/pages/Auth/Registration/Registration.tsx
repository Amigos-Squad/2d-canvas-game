import React, { ReactElement, memo } from 'react';
import { Auth, RegistrationForm } from '@/modules';

export const Registration = memo((): ReactElement => (
    <Auth>
      <RegistrationForm />
    </Auth>
  ));
