import React, { ReactElement, memo } from 'react';
import { Page } from '@/modules';

export const Forum = memo(
  (): ReactElement => (
    <Page withHeader>
      <div>Forum</div>
    </Page>
  )
);
