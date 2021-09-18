import React, { ReactElement, memo } from 'react';
import { Page } from '@/modules';

export const Profile = memo(
  (): ReactElement => (
    <Page withHeader>
      <div>Profile</div>
    </Page>
  )
);
