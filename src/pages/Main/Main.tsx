import React, { ReactElement, memo } from 'react';
import { Page } from '@/modules/Layout/Page/Page';

export const Main = memo(
  (): ReactElement => (
    <Page withHeader>
      <div>Main</div>
    </Page>
  )
);
