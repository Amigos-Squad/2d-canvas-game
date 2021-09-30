import React, { ReactElement, memo } from 'react';
import { Page } from '@/modules/Layout/Page/Page';
import { Canvas } from '@/modules';

export const Main = memo(
  (): ReactElement => (
    <Page>
      <Canvas />
    </Page>
  )
);
