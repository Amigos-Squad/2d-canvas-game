import React, { ReactElement, memo } from 'react';
import { Page } from '@/modules';

export const Leaderboard = memo(
  (): ReactElement => (
    <Page withHeader>
      <div>Leaderboard</div>
    </Page>
  )
);
